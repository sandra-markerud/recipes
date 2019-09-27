import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';
import Form from '../../components/form';

type AddRecipePageProps = WithSheet<typeof styles, {}>;

const AddRecipePage: React.FC<AddRecipePageProps> = (props) => {
    return (
        <PageTemplate title={'Neues Rezept'}>
            <div>
                <h1>Hier kommt das Formular hin</h1>
                <Form>
                    <h1>Test</h1>
                </Form>
            </div>
        </PageTemplate>
    );
};

export default withStyles(styles)(AddRecipePage);