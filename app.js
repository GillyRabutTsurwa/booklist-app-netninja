// =========================================== VARIABLES ===========================================
const list = document.querySelector("#book-list ul");
const searchForms = document.forms;
const addForm = document.forms["add-book"];
const hideBox = document.querySelector("#hide");
const searchBar = document.forms["search-books"].querySelector("input");
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
// ==================================================================================================

// =========================================== FUNCTIONS ===========================================
const deleteBook = () => {
	list.addEventListener("click", (event) => {
		if (event.target.className === "delete") {
			const li = event.target.parentElement;
			list.removeChild(li); 
		}
	});
}

const addBook = () => {
	addForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const value = addForm.querySelector("input[type='text']").value;
		console.log(value);
	
		const li = document.createElement("li");
		const bookName = document.createElement("span");
		const deleteButton = document.createElement("span");
	
		deleteButton.textContent = "delete";
		bookName.textContent = value;
	
		bookName.classList.add("name");
		deleteButton.classList.add("delete");
	
		li.appendChild(bookName);
		li.appendChild(deleteButton);
		list.appendChild(li);
	});
}

const hideBookList = () => {
	hideBox.addEventListener("change", () => {
		if (hideBox.checked) {
			list.style.display = "none";
		}
		else {
			list.style.display = "block"; 
		}
	});
}

const searchBook = () => {
	searchBar.addEventListener("keyup", (event) => {
		const term = event.target.value.toLowerCase();
		const books = list.getElementsByTagName("li");
		Array.from(books).forEach(function(currentBook) {
			const title = currentBook.firstElementChild.textContent; 
			if (title.toLowerCase().indexOf(term) != -1) {
				currentBook.style.display = "block";
			}
			else {
				currentBook.style.display = "none";
			}
		});
	});
}

const infoTabsDisplay = () => {
	tabs.addEventListener("click", (event) => {
		if (event.target.tagName == "LI") {
			const targetPanel = document.querySelector(event.target.dataset.target);
			console.log(targetPanel);
	
			panels.forEach(function(currentPanel) {
				if (currentPanel === targetPanel) {
					currentPanel.classList.add("active");
				}
				else {
					currentPanel.classList.remove("active");
				}
			});
		}
	});
}

const initialise = () => {
	deleteBook();
	addBook();
	hideBookList();
	searchBook();
	infoTabsDisplay();
}
// ==================================================================================================


initialise();










