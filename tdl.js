// Select the necessary elements
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
        listItem.textContent = taskText;

        // Create a checkbox for the task
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');

        // Add checkbox to the list item
        listItem.insertBefore(checkBox, listItem.firstChild);

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
