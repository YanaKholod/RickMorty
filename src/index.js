import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "./reduxJs/store";
import App from "./App";

const Styled = {
  Global: styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Gill Sans", sans-serif;
    box-sizing: border-box;
  `,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
