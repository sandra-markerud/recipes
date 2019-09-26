import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type AddRecipePageProps = WithSheet<typeof styles, {}>;

const AddRecipePage: React.FC<AddRecipePageProps> = ({classes}) => {
    return (
        <div>
            <h1>Hier kommt das Formular hin</h1>
        </div>
    );
};

export default withStyles(styles)(AddRecipePage);