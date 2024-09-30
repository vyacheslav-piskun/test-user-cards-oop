export default class UI {
	static renderUsers(users) {
		const app = document.getElementById('cards-list');
		app.innerHTML = '';

		if (users.length === 0) {
			const noItemsMessage = document.createElement('h2');
			noItemsMessage.textContent = 'NO ITEMS';
			app.appendChild(noItemsMessage);
			return;
		}

		users.forEach(user => {
			const userCard = document.createElement('div');
			userCard.classList.add('user-card');
			userCard.innerHTML = `
        <h2>${user.name} (@${user.username})</h2>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>Company: ${user.company.name}</p>
      `;
			app.appendChild(userCard);
		});
	}
}
