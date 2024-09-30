export default class UI {
	static renderUsers(users) {
		const app = document.getElementById('cards-list');
		app.innerHTML = '';

		users.forEach(user => {
			const userCard = document.createElement('pre');
			userCard.innerHTML = JSON.stringify(user, null, 2);
			app.appendChild(userCard);
		});
	}
}
