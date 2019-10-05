import * as React from 'react';
import {useState} from 'react';
import withStyles, {WithSheet} from 'react-jss';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styles from './styles';
import {CreateIngredientInput, useCreateRecipeMutation} from '../../generated/graphql';
import PageTemplate from '../pageTemplate/PageTemplate';
import TextareaAutosize from 'react-autosize-textarea';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type AddRecipePageProps = WithSheet<typeof styles, {}> & RouteComponentProps;
type IngredientInputRow = {
    key: number,
    quantity: string,
    unitId: string,
    foodId: string,
};

const AddRecipePage: React.FC<AddRecipePageProps> = ({history, classes}) => {

    const initialState = {
        name: '',
        instruction: '',
        ingredients: [{key: Math.random(), quantity: '', unitId: '', foodId: ''}],
    };

    const [name, setName] = useState(initialState.name);
    const [instruction, setInstruction] = useState(initialState.instruction);
    const [ingredients, setIngredients] = useState(initialState.ingredients);

    const [createRecipe, {loading: mutationLoading, error: mutationError}] = useCreateRecipeMutation({
        onCompleted: data => {
            history.push('/rezept/' + data.createRecipe.recipe.id);
        },
    });

    const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIngredients([...ingredients, {key: Math.random(), quantity: '', unitId: '', foodId: ''}]);
    };

    const deleteIngredient = (event: React.MouseEvent<HTMLDivElement>, ingredient: IngredientInputRow) => {
        if (ingredients.length <= 1) {
            return;
        }
        setIngredients(ingredients.filter(element => element.key !== ingredient.key));
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInstructionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInstruction(event.target.value);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const copiedIngredients = [...ingredients];
        copiedIngredients[index].quantity = event.target.value;
        setIngredients(copiedIngredients);
    };

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const copiedIngredients = [...ingredients];
        copiedIngredients[index].unitId = event.target.value;
        setIngredients(copiedIngredients);
    };

    const handleFoodChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const copiedIngredients = [...ingredients];
        copiedIngredients[index].foodId = event.target.value;
        setIngredients(copiedIngredients);
    };

    const convertIngredients = (): CreateIngredientInput[] => {
        const convertedIngredients: CreateIngredientInput[] = [];
        ingredients.forEach(ingredient => {
            convertedIngredients.push({
                quantity: Number(ingredient.quantity),
                unitId: ingredient.unitId,
                foodId: ingredient.foodId,
            })
        });
        return convertedIngredients;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createRecipe({
            variables: {
                name: name,
                instruction: instruction,
                ingredients: convertIngredients(),
            }
        });
    };

    return (
        <PageTemplate title={'Neues Rezept'}>
            <form onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                    <span className={classes.formError}>
                        {mutationLoading && <Loader/>}
                        {mutationError && <Error error={mutationError}/>}
                    </span>

                    <label htmlFor="name" className={classes.formLabel}>Rezeptname:</label>
                    <input id="name" type="text" className={classes.formElement} value={name}
                           placeholder={'Hier kommt der Rezeptname hin...'}
                           onChange={handleNameChange}/>

                    <label htmlFor="instruction" className={classes.formLabel}>Zubereitung:</label>
                    <TextareaAutosize id='instruction' className={classes.formElement}
                                      placeholder={'Hier kommt die Zubereitung hin...'}
                                      rows={5}
                                      value={instruction}
                                      onChange={handleInstructionChange}/>

                    <label htmlFor="ingredients" className={classes.formLabel}>Zutaten und Mengenangaben:</label>
                    <fieldset className={classes.formElement}>
                        {ingredients.map(ingredient => {
                            const index = ingredients.indexOf(ingredient);
                            return (
                                <div key={ingredient.key} className={classes.ingredientContainer}>
                                    <input type="text" className={classes.component}
                                           value={ingredient.quantity}
                                           placeholder={'Menge...'}
                                           onChange={event => handleQuantityChange(event, index)}/>
                                    <select required className={classes.component}
                                            onChange={event => handleUnitChange(event, index)}>
                                        <option key={'0'} value="" hidden>Einheit...</option>
                                        <option key={'1'} value={'1002'}>{'Esslöffel'}</option>
                                        <option key={'2'} value={'1003'}>{'Teelöffel'}</option>
                                        <option key={'3'} value={'1000'}>{'Gramm'}</option>
                                    </select>
                                    <select required className={classes.component}
                                            onChange={event => handleFoodChange(event, index)}>
                                        <option key={'0'} value="" hidden>Zutat...</option>
                                        <option key={'1'} value={'2001'}>{'Wachholderschinken'}</option>
                                        <option key={'2'} value={'2005'}>{'Nudeln'}</option>
                                        <option key={'3'} value={'2008'}>{'Basilikum, getrocknet'}</option>
                                    </select>
                                    <div onClick={event => deleteIngredient(event, ingredient)}><FontAwesomeIcon
                                        icon={'trash'}/></div>
                                </div>
                            )
                        })}
                        <button className={classes.formElement} onClick={addIngredient}>Zutat hinzufügen</button>
                    </fieldset>

                    <input type="submit" value={'Rezept speichern'} className={classes.formElement}/>
                </div>
            </form>
        </PageTemplate>
    );
};

export default withRouter(withStyles(styles)(AddRecipePage));