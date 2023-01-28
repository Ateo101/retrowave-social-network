import axios from "axios";
// DAL
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7e58f42b-aee4-44e0-aa61-91992fe16a68"
    }
})


export const getUsers = (currPage: number, pageSize: number) => {
    return instance.get(`users?page=${currPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollowUser = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export const getUserProfile = (userId: number) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const getAuthData = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)
}