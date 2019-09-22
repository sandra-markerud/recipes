import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faSpinner} from '@fortawesome/free-solid-svg-icons'
import RecipeList from './components/recipeList';
import RecipeDetail from './components/recipeDetail';
import PageTemplate from './pages/shared/pageTemplate/PageTemplate';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

library.add(faHome, faSpinner);

type AppProps = WithSheet<typeof styles, {}>;

const App: React.FC<AppProps> = () => {

    return (
        <React.Fragment>
            <Switch>

                <Route exact path="/" render={props => (
                    <PageTemplate title={'Rezepte'} {...props}>
                        <RecipeList/>
                    </PageTemplate>
                )}/>

                <Route path="/rezept/:id" render={props => (
                    <PageTemplate title={'Rezept'} {...props}>
                        <RecipeDetail id={props.match.params.id}/>
                    </PageTemplate>
                )}/>


            </Switch>
        </React.Fragment>
    );
};

export default withStyles(styles)(App);
