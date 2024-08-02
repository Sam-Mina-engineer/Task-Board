# Task-Board
Task Board using Day JS
I am reading through the original HTML starter code and I noticed that it is linked to Bootstrap.
I am now reading through the Bootstrap documentation to see how it can help me build the modal form in the HTML. 
I wrote the HTML for the modal form using Bootstrap. 
I chose h5 because it is not large but not too small either.
I ran the browser and the form works. Time for a Git push. 
I wrote the first function for generating a unique task id. It was extremely straightforward. I just used ++ to increment. 
To create the task card I used the Day JS task dueDate and I formated it to reat MMMM D, YYYY. And then I made it so that it will 
return a dynamically generated HTML string. Time for another Git push. 
Creating the function to render the task list and make it draggable was a chore. I would have preferred to do it in Vanilla JavaScript, which in my opinion is more readable then JQuery, etc... 
I started by making an object called lanes. Its three properies are to-do, in-progress and done. They each go with one of the JQuery selectors that targets HTML elements with the ids of to do cards, in progress cards and done cards. Then I use a loop to iterate over each key in the lanes object. Each key represents a task status. It clears any existing child elemtents from the container. This makes sure that the containers are empty before new tasks are added. Then I use an arrow function to iterate through the taskList array. It selects the container from the lanes for each task based on the task's status. It then appends a new task to the selected container. 
I use the JQuery UI to make the elements draggable. And the revert: "invalid" is a neat way to make sure it goes back to its original spot if not dragged to an appropriate spot. Then I make an event handler function that is called when the dragging starts. It sets the z index CSS of the dragged element to 1000 to guarantee that it will appear above the other elements. For the stop event handler I have it reset the z index CSS of the dragged element back to an empty string. Finally time for a git push.
Now for the function to handle adding a new task. I add the event.prefentDefault() to stop the page from reloading. 
Then I use JQuery inside the title, description, and dueDate variables to retrieve the values from the form fields. 
I make a quick if Statement to ensure that all forms are completed. 
Then I create a newTask object with the form data. I make sure that the initial status is to-do. 
Then localStorage.setItem and then JSON stringify the task to update it to localStorage. 
Then use JQuery to close the form and displaying the new task. 
FOr deleting the task I const taskId and then use JQuery to get the element that triggered the event. Find hte parent element with class card and retrieve the dtata id attribute calue from the task card. Then I use I remove the task from that ID from the taskList array. I use an arrow function and createa new array that does not have the task with the matching ID. 
Then I JSON stringify the updated array and save it to local task list and then re-render. This will show the deletion. 
Time for another GIT PUSH!!!
For the function that handles dropping a task into a new status lane I use const taskID to get the ID of the task that is going to be dragged. I then use JQuery UI. The draggable object gets the data id attribute from the dragged element. Then I use const newStatus to determine the new status lane into which the task was placed. Then I update the task's status. I use an arrow function for this to do a strict equal === task.id to taskId, then task.status = newStatus.
Then JSON stringify to update the task list to localStorage. And then render. 
For the last function makes sure that the task list is rendered and it uses event listeners for the form submission and for deleting tasks. It also uses JQuery UI to ake the task lanes droppable and to let tasks be moved between lanes. It also has the date picker on the due date input field. Time for a git push. 