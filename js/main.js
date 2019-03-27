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
		const StoredBookmarks = [
			{
				title: 'Google',
				link: 'www.google.com'
			},
			{
				title: 'Facebook',
				link: 'www.facebook.com'
			}
		];

		const bookmarks = StoredBookmarks;

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

	//Clear all form fields
	static clearFields(){
		document.querySelector('#title').value = '';
		document.querySelector('#link').value = '';
	}

	//Delete bookmark
	static removeBook(element){
		if (element.classList.contains('delete')) {
			element.parentElement.parentElement.remove();
		}
	}
}

//Store Class

//Event Display Bookmark
document.addEventListener('DOMContentLoaded', UI.displayBookmarks);

//Event Add Bookmark
document.querySelector('#bookmark-form').addEventListener('submit', (e) => {
	//Prevent actual submit
	e.preventDefault();

	//Get form vaues
	const title = document.querySelector('#title').value;
	const link = document.querySelector('#link').value;

	//Create a bookmark
	const bookmark = new Bookmark(title, link);

	//Add bookmark to UI
	UI.addBookmarkToList(bookmark);

	//Clear fields
	UI.clearFields();
});

//Event Remove Bookmark
document.querySelector('#bookmark-list').addEventListener('click', (e) => {
	UI.removeBook(e.target);
});