export default class FilterManager {
	constructor() {
		this.filters = [];
	}

	addFilter(filter) {
		this.filters.push(filter);
	}

	applyFilters(users, filterKey, filterValue) {
		let filteredUsers = users;
		this.filters.forEach(filter => {
			filteredUsers = filter.apply(filteredUsers, filterKey, filterValue);
		});
		return filteredUsers;
	}
}
