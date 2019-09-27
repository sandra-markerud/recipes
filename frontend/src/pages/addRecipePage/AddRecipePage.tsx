import React, {Component} from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';
import TextareaAutosize from 'react-autosize-textarea';

type AddRecipePageProps = WithSheet<typeof styles, {}>;

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
        alert('A name was submitted: ' + this.state.nameInput);
        event.preventDefault();
    };

    render() {
        const classes = this.props.classes;
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

                        <input type="submit" className={classes.formElement} value="Rezept speichern"/>
                    </div>
                </form>
            </PageTemplate>
        );
    }
}

export default withStyles(styles)(AddRecipePage);