import UI from "./ui/ui";
import UserService from "./services/userService";

export default class App {
	static async init() {
		const users = await UserService.fetchUsers();

		const filterSelect = document.getElementById('filterSelect');
		const filterInput = document.getElementById('filterInput');

		const toggleInputVisibility = () => {
			filterInput.disabled = filterSelect.value === 'default';
		};

		filterSelect.addEventListener('change', () => {
			toggleInputVisibility();
		});

		toggleInputVisibility();

		UI.renderUsers(users);
	}
}
