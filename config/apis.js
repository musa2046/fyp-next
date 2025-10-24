
import axios from "axios";
const base_url = `http://localhost:3000/apis`;



export const getHome = async ()=>{
    try {
        const response = await axios.get(`${base_url}/home`, {withCredentials: true});
        return response.data
    } catch (error) {
        throw new Error(error);
    }
}


export const getPrograms = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/programs/client/allPrograms?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getAchievements = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/achievements/client/all?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
export const getAwards = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/awards/client/all?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}


export const getGallery = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/gallery/client/gallery?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
export const getMembers = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/members/client/allMembers?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}
export const getExectives = async ()=>{
    try {
        const response = await axios.get(`${base_url}/members/client/allExecs/client`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

