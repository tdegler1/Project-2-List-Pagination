# Project-2-List-Pagination
This project takes a web page that contains a list of student names, photos and email addresses;  display 10 names at a time, include a series of links at the bottom of the page to let users click through the other student entries, 10 at a time.


The skills, techniques and process used to complete the project

The code uses unobtrusive Javascript so that a user without Javascript enabled will not experience the pagination feature, but will still see the student list in its entirety. The pagination feature is dynamically added to the HTML without disrupting the original HTML functionality.

First, the showPage function was created to simply take a list of students and a page number as parameters, and then display only that section of students using a style of "display". The other students are merely hidden (display ="none", not physically removed from the HTML list.

Then the appendPageLinks function was created to Create page links, add them to the HTML, and add functionality when clicked. Once the page numbers were created, they needed to be clickable, so an EventListener was added to each one. When a page link is clicked, the setAction function is called. It operates on the local variables of appendPageLinks as well as any global variables. SetAction first wrangles together all the other links and removes any "active" class that may exist on a link. Then the "active" class is added only to the link that was clicked (event.target).

Finally, after the pagination links have been created and functionality assigned, the whole unordered list of links is appended dynamically to the newly created pagination div at the botom of the page.

It's all a matter of organizing the order of when elements and functionality need to be created and added to the DOM. 