import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL
});

export class UserApi {
    async getUsersList() {
        return await instance.get('/users');
    }

    async createUser(body) {
        return await instance.post('/users', body);
    }

    async updateUser(body) {
        return await instance.put('/users', body);
    }

    async deleteUser(id: number) {
        return await instance.delete('/users');
    }
}
