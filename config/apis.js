
import axios from "axios";
const base_url = `http://localhost:3000/apis`;


export const getPrograms = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/programs/client/allPrograms?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
