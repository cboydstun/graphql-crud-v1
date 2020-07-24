import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import 'bootstrap/dist/css/bootstrap.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();