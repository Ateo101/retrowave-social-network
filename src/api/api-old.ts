/*
// DAL
const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currPage: number, pageSize: number) => {
    return axios.get(`${baseURL}users?page=${currPage}&count=${pageSize}`,{
        withCredentials: true
    })
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return axios.post(`${baseURL}follow/${id}`,{},{
        withCredentials: true
    })
        .then(response => response.data)
}

export const unfollowUser = (id: number) => {
    return axios.delete(`${baseURL}follow/${id}`,{
        withCredentials: true
    })
        .then(response => response.data)
}*/

export default null