//Bookmark Class
class Bookmark {
	constructor(title, link){
		this.title = title;
		this.link = link;
	}
}

//UI Class
class UI{
	//Display bookmarks
	static displayBookmarks(){
		const bookmarks = Store.getBookmarks();

		bookmarks.forEach((bookmark) => UI.addBookmarkToList(bookmark));
	}

	//Add bookmark to the list
	static addBookmarkToList(bookmark){
		//List
		const list = document.querySelector('#bookmark-list');

		//New row
		const row = document.createElement('tr');

		//Binding data to the row
		row.innerHTML = `
			<td>${bookmark.title}</td>
			<td><a href="${bookmark.link}"<a>${bookmark.link}</td>
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

		//Appending the row to the list
		list.appendChild(row);
	}

	//Alert
	static showAlert(message, className){
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#bookmark-form');
		container.insertBefore(div, form);

		//Dismiss after 3 seconds
		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}

	//Clear all form fields
	static clearFields(){
		document.querySelector('#title').value = '';
		document.querySelector('#link').value = '';
	}

	//Delete bookmark
	static removeBookmark(element){
		if (element.classList.contains('delete')) {
			element.parentElement.parentElement.remove();
		}
	}
}

//Store Class
class Store {
	static getBookmarks() {
		let bookmarks;
		if(localStorage.getItem('bookmarks') === null){
			bookmarks = [];
		}else {
			bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		}
		return bookmarks;
	}

	static addBookmark(bookmark) {
		const bookmarks = Store.getBookmarks();
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	static removeBookmark(link) {
		const bookmarks = Store.getBookmarks();
		bookmarks.forEach((bookmark, index) => {
			if(link === bookmarks.link){
				bookmarks.splice(index, 1);
			}
		});

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
}

//Event Display Bookmark
document.addEventListener('DOMContentLoaded', UI.displayBookmarks());

//Event Add Bookmark
document.querySelector('#bookmark-form').addEventListener('submit', (e) => {
	//Prevent actual submit
	e.preventDefault();

	//Get form vaues
	const title = document.querySelector('#title').value;
	const link = document.querySelector('#link').value;

	//Validate
	if (title === '' || link === '') {
		UI.showAlert('Please fill in all the fields', 'danger');	
	}else{
		//Create a bookmark
		const bookmark = new Bookmark(title, link);

		//Add bookmark to UI
		UI.addBookmarkToList(bookmark);

		//Add bookmark to local store
		Store.addBookmark(bookmark);

		//Show success message
		UI.showAlert('Bookmark Added', 'success');

		//Clear fields
		UI.clearFields();
	}
});

//Event Remove Bookmark
document.querySelector('#bookmark-list').addEventListener('click', (e) => {
	UI.removeBookmark(e.target);

	Store.removeBookmark();

	//Show success message
	UI.showAlert('Bookmark Removed', 'success');
});