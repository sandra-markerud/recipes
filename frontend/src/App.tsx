import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from './components/recipeList/index';
import Header from './components/shared/header/Header';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/" component={RecipeList}/>
                </Switch>
            </main>
        </React.Fragment>
    );
};

export default App;
