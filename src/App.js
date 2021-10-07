import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ChakraProvider } from "@chakra-ui/react";
import rootReducer from "./rootReducer";
import MovieLibrary from "./MovieLibrary";
import { theme } from "./resources/theme/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MovieLibrary />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
