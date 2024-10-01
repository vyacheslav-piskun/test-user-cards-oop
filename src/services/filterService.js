export default class FilterService {
	static applyFilter(users, filterKey, filterValue) {
		if (!filterKey || filterKey === 'default' || !filterValue) {
			return users;
		}

		return users.filter(user => {
			const keys = filterKey.split('.');
			let value = user;

			for (const key of keys) {
				if (!value) return false;
				value = value[key];
			}

			return value && value.toString().toLowerCase().includes(filterValue);
		});
	}
}
