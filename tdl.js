console.log("JavaScript is running");
// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create list item
        const listItem = document.createElement('li');
        
        // Add task text
        listItem.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('span');
        deleteButton.textContent = "✖";
        deleteButton.classList.add('delete');
        
        // Append delete button to list item
        listItem.appendChild(deleteButton);

        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear the input
        taskInput.value = "";

        // Remove task on delete button click
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Add task on pressing Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
