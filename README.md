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

