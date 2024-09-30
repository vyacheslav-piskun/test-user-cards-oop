import UserService from "./services/userService";
import UI from "./ui/ui";

export default class App {
	static async init() {
		const users = await UserService.fetchUsers();
		UI.renderUsers(users);
	}
}
