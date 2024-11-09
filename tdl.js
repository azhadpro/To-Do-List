// Select elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); // Get task input

    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new list item for the task
        const listItem = document.createElement('li');

        // Create a div container to hold the task text and checkbox
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        // Create the task text element
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        // Create a checkbox for the task
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');

        // Append the task text and checkbox to the task container
        taskContainer.appendChild(taskTextElement);
        taskContainer.appendChild(checkBox);

        // Append the task container to the list item
        listItem.appendChild(taskContainer);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";

        // Event listener for checkbox to delete the task when checked
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                taskList.removeChild(listItem); // Remove the task if checkbox is checked
            }
        });
    }
}

// Event listener for the add task button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
