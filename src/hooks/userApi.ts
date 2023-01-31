import api from './api'
import { TCreateUser } from '../App';

export class UserApi {
    async getUsersList() {
        return await api.get('/users');
    }

    async createUser(body: TCreateUser) {
        return await api.post('/users', body);
    }

    async updateUser(id: number, body: TCreateUser) {
        return await api.put(`/users/${id}/user`, body);
    }

    async deleteUser(id: number) {
        return await api.delete(`/users/${id}/user`);
    }
}
