
import axios from "axios"


export const getGallery = async ({ pageParam = 1 })=>{
    try {
        const response = await axios.get(`${base_url}/gallery/client/gallery?page=${pageParam}`, {withCredentials: true})
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

// ////////////////////////////////////////////////////////////////////////////////////////////////