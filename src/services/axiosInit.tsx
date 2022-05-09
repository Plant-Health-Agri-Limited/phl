import axios from 'axios'

const axiosInit:any = axios.create({ 
    //baseURL: 'https://api.instantwebtools.net/v1/airlines',
    
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
})

export default axiosInit