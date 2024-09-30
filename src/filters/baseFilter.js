export default class BaseFilter {
	apply(users, filterKey, filterValue) {
		return users.filter(user => {
			const keys = filterKey.split('.');
			let value = user;

			for (const key of keys) {
				value = value[key];
			}

			return value && value.toString().toLowerCase().includes(filterValue);
		});
	}
}
