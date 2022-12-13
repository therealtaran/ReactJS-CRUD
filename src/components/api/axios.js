import axios from 'axios'

//create instance of axios and setting base URL
export const api=axios.create({
    baseURL:'https://636cfd2c91576e19e31be059.mockapi.io'
})

//below code for reading the posts for search bar and pagination
export const getPosts=async()=>{
    const response=await api.get('/CRUD')
    //below code for axios giving back json data
    return response.data
}

