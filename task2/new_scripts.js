document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');
    const taskList = document.getElementById('taskList');

    const taskValue = taskInput.value.trim();
    const dateValue = dateInput.value;

    if (taskValue && dateValue) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskText = document.createElement('p');
        taskText.textContent = `${taskValue} - ${dateValue}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dateInput.value = '';
    } else {
        alert('Please enter both a task and a date.');
    }
});
