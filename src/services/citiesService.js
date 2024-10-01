export default class CitiesService {
	static getUniqueCities(users) {
		const cities = users.map(user => user.address.city);
		return [...new Set(cities)];
	}
}
