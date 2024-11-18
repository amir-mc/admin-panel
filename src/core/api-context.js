import axios from "axios"

const basUrl="https://react-mini-projects-api.classbon.com";

export const Http= axios.create({
    baseURL:basUrl
})
