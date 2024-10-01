import UI from "./ui/ui";

import UserService from "./services/userService";
import FilterService from "./services/filterService";

export default class App {
	static async init() {
		const users = await UserService.fetchUsers();

		const filterSelect = document.getElementById('filterSelect');
		const filterInput = document.getElementById('filterInput');
		const filterInputBlock = document.getElementById('filterInputBlock')

		const toggleInputVisibility = () => {
			if (filterSelect.value === 'default') {
				filterInputBlock.classList.add('hidden')
			} else {
				filterInputBlock.classList.remove('hidden')
			}
		};

		const applyFilter = () => {
			const filterKey = filterSelect.value;
			const filterValue = filterInput.value.toLowerCase();
			const filteredUsers = FilterService.applyFilter(users, filterKey, filterValue);
			UI.renderUsers(filteredUsers);
		};

		filterSelect.addEventListener('change', () => {
			toggleInputVisibility();
			filterInput.value = '';
			applyFilter();
			filterInput.focus();
		});

		filterInput.addEventListener('input', applyFilter);

		toggleInputVisibility();

		UI.renderUsers(users);
	}
}
