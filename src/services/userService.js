import User from '../models/user';

export default class UserService {
	static async fetchUsers() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			return data.map(user => new User(user));
		} catch (error) {
			console.error('Error fetching users:', error);
			return [];
		}
	}
}
