import React, {Component} from 'react';
import {ApolloError} from 'apollo-boost';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';
import TextareaAutosize from 'react-autosize-textarea';
import {CreateIngredientInput, CreateRecipeComponent, CreateRecipeMutationVariables} from '../../generated/graphql';
import Error from '../../components/error/Error';
import IngredientInputRow from '../../components/ingredientInputRow';

type AddRecipePageProps = WithSheet<typeof styles, {}> & RouteComponentProps;

type AddRecipePageState = {
    nameInput: string,
    instructionInput: string,
    ingredientsInput: CreateIngredientInput[],
    error?: ApolloError,
};

class AddRecipePage extends Component<AddRecipePageProps, AddRecipePageState> {
    constructor(props: AddRecipePageProps) {
        super(props);
        this.state = {
            nameInput: '',
            instructionInput: '',
            ingredientsInput: [],
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({nameInput: event.target.value});
    };

    handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({instructionInput: event.target.value});
    };

    handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
    };

    render() {
        const classes = this.props.classes;
        const variables: CreateRecipeMutationVariables = {
            name: this.state.nameInput,
            instruction: this.state.instructionInput,
            ingredients: this.state.ingredientsInput,
        };
        return (
            <PageTemplate title={'Neues Rezept'}>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.formContainer}>

                        <span className={classes.formError}>
                        {this.state.error && <Error error={this.state.error}/>}
                        </span>

                        <label htmlFor="name" className={classes.formLabel}>Rezeptname:</label>
                        <input id="name" type="text" className={classes.formElement} value={this.state.nameInput}
                               placeholder={'Hier kommt der Rezeptname hin...'}
                               onChange={this.handleChange}/>

                        <label htmlFor="ingredients" className={classes.formLabel}>Zutaten und Mengenangaben:</label>
                        <fieldset className={classes.formElement}>
                            <IngredientInputRow/>
                        </fieldset>

                        <label htmlFor="instruction" className={classes.formLabel}>Zubereitung:</label>
                        <TextareaAutosize id='instruction' className={classes.formElement}
                                          placeholder={'Hier kommt die Zubereitung hin...'}
                                          rows={5}
                                          value={this.state.instructionInput}
                                          onChange={this.handleAreaChange}/>

                        <CreateRecipeComponent variables={variables}
                                               onCompleted={(data) => {
                                                   this.props.history.push(`/rezept/${data.createRecipe.recipe.id}`);
                                               }}
                                               onError={(error) => {
                                                   this.setState({error: error})
                                               }}>
                            {mutate => (
                                <input type={'submit'} value={'Rezept speichern'} className={classes.formElement}
                                       onClick={() => mutate()}/>
                            )}
                        </CreateRecipeComponent>

                    </div>
                </form>
            </PageTemplate>
        );
    }
}

export default withRouter(withStyles(styles)(AddRecipePage));