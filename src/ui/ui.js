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
        <p><b>Email:</b> <a href="mailto:${user.website}" target="_blank">${user.email}</a></p>
        <p><b>Address:</b> ${user.address.suite}, ${user.address.street}</p>
        <p><b>City:</b>  ${user.address.city}</p>
        <p><b>ZIP:</b>  ${user.address.zipcode}</p>
        <p><b>Phone:</b> <a href="tel:${user.phone}" target="_blank">${user.phone}</a></p>
        <p><b>Website:</b> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><b>Company:</b> ${user.company.name}</p>
      `;
			app.appendChild(userCard);
		});
	}
}
