
import axios from "axios"
const base_url = 'http://localhost:3000/apis';

export const getGallery = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/gallery/client/gallery?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////////

export const getPrograms = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/programs/client/allPrograms?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}



// ////////////////////////////////////////////////////////////////////////////////////////////////
export const getNews = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/news/client/allNews?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}


// ////////////////////////////////////////////////////////////////////////////////////////////////


export const getAchievements = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/achievements/client/allAchievements?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
