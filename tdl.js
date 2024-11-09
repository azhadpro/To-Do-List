const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim(); 

    if (taskText !== "") {
        const listItem = document.createElement('li');

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkbox');

        taskContainer.appendChild(taskTextElement);
        taskContainer.appendChild(checkBox);

        listItem.appendChild(taskContainer);

        taskList.appendChild(listItem);

        taskInput.value = "";

        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                taskList.removeChild(listItem); 
            }
        });
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
