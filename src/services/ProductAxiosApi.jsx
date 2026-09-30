import axios from "axios";

const ProductAxiosApi = axios.create({
    baseURL: "https://dummyjson.com"
});

export default ProductAxiosApi;