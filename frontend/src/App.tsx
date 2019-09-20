import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from './components/recipeList';
import RecipeDetail from './components/recipeDetail';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type AppProps = WithSheet<typeof styles, {}>;

const App: React.FC<AppProps> = ({classes}) => {
    return (
        <div className={classes.page}>
            <Header/>
            <main className={classes.content}>
                <Switch>
                    <Route exact path="/" component={RecipeList}/>
                    <Route path="/rezept/:id" render={
                        props => <RecipeDetail id={props.match.params.id}/>
                    }/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
};

export default withStyles(styles)(App);
