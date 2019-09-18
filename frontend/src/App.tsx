import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from './components/recipeList/index';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type AppProps = WithSheet<typeof styles, {}>

const App: React.FC<AppProps> = ({classes}) => {
    return (
        <React.Fragment>
            <Header/>
            <main className={classes.content}>
                <Switch>
                    <Route exact path="/" component={RecipeList}/>
                </Switch>
            </main>
            <Footer/>
        </React.Fragment>
    );
};

export default withStyles(styles)(App);
