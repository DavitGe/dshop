import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        productsScroll: offsetLimitPagination(),
      },
    },
  },
});
const client = new ApolloClient({
  // cache: new InMemoryCache(),
  // uri: "https://dsop-server-production.up.railway.app/api",
  uri: "http://localhost:3000/api",
  cache,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
