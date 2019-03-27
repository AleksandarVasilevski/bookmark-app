//Bookmark Class
class Bookmark {
	constructor(title, link){
		this.title = title;
		this.link = link;
	}
}

//UI Class
class UI{
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

	static addBookmarkToList(bookmark){
		//List
		const list = document.querySelector('#bookmark-list');

		//New Row
		const row = document.createElement('tr');

		//Binding data to the row
		row.innerHTML = `
			<td>${bookmark.title}</td>
			<td>${bookmark.link}</td>
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

		//Appending the row to the list
		list.appendChild(row);
	}
}

//Store Class

//Event Display Bookmark
document.addEventListener('DOMContentLoaded', UI.displayBookmarks);

//Event Add Bookmark

//Event Remove Bookmark