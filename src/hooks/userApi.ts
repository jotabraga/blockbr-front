import api from './api'
import { TCreateUser, TUser } from '../App';

export class UserApi {
    async getUsersList() {
        return await api.get('/users');
    }

    async createUser(body: TCreateUser) {
        return await api.post('/users', body);
    }

    async updateUser(body: TUser) {
        return await api.put('/users', body);
    }

    async deleteUser(id: number) {
        return await api.delete(`/users/${id}`);
    }
}
