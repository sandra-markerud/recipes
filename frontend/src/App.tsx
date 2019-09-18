import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeList from "./components/recipeList/index";

const App: React.FC = () => {
  return (
      <React.Fragment>
        <main>
          <Switch>
            <Route exact path="/" component={RecipeList} />
          </Switch>
        </main>
      </React.Fragment>
  );
};

export default App;
