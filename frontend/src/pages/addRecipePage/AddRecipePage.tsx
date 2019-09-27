import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';

type AddRecipePageProps = WithSheet<typeof styles, {}>;

const AddRecipeContent: React.FC<AddRecipePageProps> = () => {
    return (
        <div>
            <h1>Hier kommt das Formular hin</h1>
        </div>
    );
};


const AddRecipePage: React.FC<AddRecipePageProps> = (props) => {
    return (
        <PageTemplate title={'Neues Rezept'}>
            <AddRecipeContent {...props} />
        </PageTemplate>
    );
};

export default withStyles(styles)(AddRecipePage);