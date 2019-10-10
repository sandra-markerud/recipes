import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faAngleDoubleRight,
    faAngleDoubleUp,
    faAngleDown,
    faBars,
    faCookieBite,
    faHeart,
    faHome,
    faSearch,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import RecipesCollectionPage from './pages/recipesCollectionPage';
import RecipeDetailPage from './pages/recipeDetailPage';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import NotFoundPage from './pages/notFoundPage';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import AddRecipePage from './pages/addRecipePage/AddRecipePage';

library.add(faAngleDown, faAngleDoubleRight, faAngleDoubleUp, faBars, faCookieBite, faHeart, faHome, faPlusSquare, faSearch, faSpinner, faTrash);

type AppProps = WithSheet<typeof styles, {}>;

const App: React.FC<AppProps> = () => {

    return (
        <Switch>
            <Route exact path="/" component={RecipesCollectionPage}/>
            <Route path="/rezept/neu" component={AddRecipePage}/>
            <Route path="/rezept/:id" render={props => <RecipeDetailPage id={props.match.params.id}/>}/>
            <Route component={NotFoundPage}/>
        </Switch>
    );
};

export default withStyles(styles)(App);
