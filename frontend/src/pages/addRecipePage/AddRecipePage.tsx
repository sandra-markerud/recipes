import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';
import TextareaAutosize from 'react-autosize-textarea';
import {CreateRecipeComponent, CreateRecipeMutationVariables} from '../../generated/graphql';

type AddRecipePageProps = WithSheet<typeof styles, {}> & RouteComponentProps;

type AddRecipePageState = {
    nameInput: string,
    instructionInput: string,
};

class AddRecipePage extends Component<AddRecipePageProps, AddRecipePageState> {
    constructor(props: AddRecipePageProps) {
        super(props);
        this.state = {
            nameInput: '',
            instructionInput: '',
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
        };
        return (
            <PageTemplate title={'Neues Rezept'}>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.formContainer}>

                        <label htmlFor="name" className={classes.formLabel}>Rezeptname:</label>
                        <input id="name" type="text" className={classes.formElement} value={this.state.nameInput}
                               placeholder={'Hier kommt der Rezeptname hin...'}
                               onChange={this.handleChange}/>

                        <label htmlFor="instruction" className={classes.formLabel}>Zubereitung:</label>
                        <TextareaAutosize id='instruction' className={classes.formElement}
                                          placeholder={'Hier kommt die Zubereitung hin...'}
                                          rows={5}
                                          value={this.state.instructionInput}
                                          onChange={this.handleAreaChange}/>

                        <CreateRecipeComponent variables={variables} onCompleted={(data) => {
                            this.props.history.push(
                                `/rezept/${data.createRecipe.recipe.id}`
                            );
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