import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "213a7c909dc5430788c898484513e5d8"
    }
})