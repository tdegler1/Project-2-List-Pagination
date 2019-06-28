/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


/*** GLOBAL VARIABLES ***/

const listItems = document.querySelectorAll('.student-item'); 	/* All of the student list item elements in the student list */
//console.log(listItems);
const perPage = 10;	/* Number of students to show on the page */
const pageDiv = document.querySelector('.page'); /* div that contains entire student list */
const paginationDiv = document.createElement('div'); /* This will be the new div that contains the pagination links */

/*** FUNCTIONS ***/
/* Loop through the entire 'list' of student elements. Display on the page only those students who fall within the 'section' of the starting index and the ending index. */
function showPage (list, section) {
	const startIndex = (section * perPage) - perPage; /* calculate the start value */
	const endIndex = (section * perPage) - 1; /* calculate the end value */
	for (let i=0; i<list.length; i++) {
		let li = list[i];
		if (i>=startIndex && i<=endIndex) {
			li.style.display = '';  
		} else {
			li.style.display = 'none';  
		}
	}
}	// END showPage

/*** Create page links, add them to the HTML, and add functionality when clicked. ***/
function appendPageLinks(list){
	const pageNum = Math.ceil(list.length/perPage);	/* compute the number of page links needed */
	const ul = document.createElement('ul');
	/* Create list element for each page link; the link's text is the page number. */
	for (let i=1; i<=pageNum; i++) {
  		let li = document.createElement('li');
  		let a = document.createElement('a');  
		let linkText = document.createTextNode(i);
		a.appendChild(linkText);
  		a.href = "#";
		if (i===1) {
			a.className="active"; /* initialize the pagination by assigning the "active" class to the first page link */
		}
		li.appendChild(a);
		ul.appendChild(li);
		/* add an event listener to the link itself so that when the page is clicked, it will show that page link as "active" and display that section of students. */
		a.addEventListener('click', (e) => {
			setAction(e);
			showPage (listItems, i);
		}); 
	}
	/* Once the list of page links is created, it is added to the bottom of the web page, after the list of students. */
	paginationDiv.className = "pagination";
	paginationDiv.appendChild(ul);
	pageDiv.appendChild(paginationDiv);

	/* When this function is called (local to appendPageLinks) it will grab all the page links that were created and added to the paginationDIV. The class is removed from each link (if any), and the "active" class is assigned to the page link that was clicked (target). */
	function setAction (event){
		const pageLinks = document.querySelectorAll('a');
		//console.log(pageLinks);
		for (let i=0; i<pageNum; i++) {
			pageLinks[i].className="";
		}
		targetLink = event.target;
		targetLink.className="active";
	}	// END setAction
} // END appendPageLinks

/*** MAIN ***/

showPage (listItems, 1); 	/* initialize web page to display the first page of students */
appendPageLinks(listItems); 	/* Create pagination links and add them to the page. */


