import axios from "axios";

const BASED_URL = 'http://localhost:4000/api/v1/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjRhY2VkOTFiMGFlYzgwNWQ1OWUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzUyNDYyOCwiZXhwIjoxNjYzNzgzODI4fQ.b3XeIaaG29h0kRHIEhHbWG3ZBFKC8UDdKnOB0oxzGvM'


export const publicRequest = axios.create({
    baseURL:BASED_URL
})

export const userRequest = axios.create({
    baseURL:BASED_URL,
    headers:{token:`Bearer ${TOKEN}`}

})