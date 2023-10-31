import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "./redux/store";
import App from "./App";

const Styled = {
  Global: styled.div`
    font: 112.5%/1.625 -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    overflow-y: scroll;
  `,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Styled.Global>
      <App />
    </Styled.Global>
  </Provider>
);
