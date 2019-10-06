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
import AddIngredients, {Row} from '../../components/addIngredients/AddIngredients';

type AddRecipePageProps = WithSheet<typeof styles, {}> & RouteComponentProps;
type IngredientInputRow = {
    key: number,
    quantity: string,
    unitId: string,
    foodId: string,
};

const createIngredientKey = () => {
    return Math.floor(Math.random() * (100000 - 10000)) + 10000;
};

const AddRecipePage: React.FC<AddRecipePageProps> = ({history, classes}) => {


    const initialState = {
        name: '',
        instruction: '',
        ingredients: [{key: createIngredientKey(), quantity: '', unitId: '', foodId: ''}],
    };

    const [name, setName] = useState(initialState.name);
    const [instruction, setInstruction] = useState(initialState.instruction);
    const [ingredients, setIngredients] = useState(initialState.ingredients);

    const [createRecipe, {loading: mutationLoading, error: mutationError}] = useCreateRecipeMutation({
        onCompleted: data => {
            history.push('/rezept/' + data.createRecipe.recipe.id);
        },
    });

    const editIngredient = (updatedIngredient: Row) => {
        setIngredients(ingredients.map(ingredient => {
            return ingredient.key === updatedIngredient.key ? updatedIngredient : ingredient
        }));
    };

    const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIngredients([...ingredients, {key: createIngredientKey(), quantity: '', unitId: '', foodId: ''}]);
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
                    <AddIngredients ingredients={ingredients} editRow={editIngredient} addRow={addIngredient}
                                    deleteRow={deleteIngredient}/>

                    <input type="submit" value={'Rezept speichern'} className={classes.formElement}/>
                </div>
            </form>
        </PageTemplate>
    );
};

export default withRouter(withStyles(styles)(AddRecipePage));