import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import App from './App';
import RecipeList from './components/recipeList/index';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <RecipeList />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
