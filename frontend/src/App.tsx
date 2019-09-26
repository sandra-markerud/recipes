import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faAngleDoubleRight,
    faAngleDoubleUp,
    faBars,
    faCookieBite,
    faHeart,
    faHome,
    faSearch,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import RecipesCollectionPage from './pages/recipesCollectionPage';
import RecipeDetailPage from './pages/recipeDetailPage';
import PageTemplate from './pages/pageTemplate';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import NotFoundPage from './pages/notFoundPage';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

library.add(faAngleDoubleRight, faAngleDoubleUp, faBars, faCookieBite, faHeart, faHome, faPlusSquare, faSearch, faSpinner)
;

type AppProps = WithSheet<typeof styles, {}>;

const App: React.FC<AppProps> = () => {

    return (
        <React.Fragment>
            <Switch>

                <Route exact path="/" render={props => (
                    <PageTemplate title={'Rezepte'} {...props}>
                        <RecipesCollectionPage/>
                    </PageTemplate>
                )}/>

                <Route path="/rezept/:id" render={props => (
                    <PageTemplate title={'Rezept'} {...props}>
                        <RecipeDetailPage id={props.match.params.id}/>
                    </PageTemplate>
                )}/>

                <Route render={props => (
                    <PageTemplate title={'404 - Fehler'} {...props}>
                        <NotFoundPage/>
                    </PageTemplate>
                )}/>

            </Switch>
        </React.Fragment>
    );
};

export default withStyles(styles)(App);
