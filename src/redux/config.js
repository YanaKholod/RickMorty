import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const FETCH_ALL = ({ page }) => `/character?page=${page}`;

export const FETCH_ONE = (id) => `/character/${id}`;

export default axios;
