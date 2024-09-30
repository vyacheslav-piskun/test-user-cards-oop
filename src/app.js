import UI from "./ui/ui";
import UserService from "./services/userService";
import FilterManager from "./filters/filterManager";
import BaseFilter from "./filters/baseFilter";

export default class App {
	static async init() {
		const users = await UserService.fetchUsers();

		const filterManager = new FilterManager();
		filterManager.addFilter(new BaseFilter());

		const filterSelect = document.getElementById('filterSelect');
		const filterInput = document.getElementById('filterInput');

		const toggleInputVisibility = () => {
			filterInput.disabled = filterSelect.value === 'default';
		};

		const applyFilter = () => {
			const filterKey = filterSelect.value;
			const filterValue = filterInput.value.toLowerCase();
			const filteredUsers = filterManager.applyFilters(users, filterKey, filterValue);
			UI.renderUsers(filteredUsers);
		};

		filterSelect.addEventListener('change', () => {
			toggleInputVisibility();
			filterInput.value = '';
			applyFilter();
		});

		filterInput.addEventListener('input', applyFilter);

		toggleInputVisibility();

		UI.renderUsers(users);
	}
}
