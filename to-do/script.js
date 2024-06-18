document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;

    addTask(taskName, taskDate, taskTime);
});

function addTask(name, date, time) {
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');

    listItem.innerHTML = `
        ${name} - ${date} ${time}
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(listItem);

    document.getElementById('task-name').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';

    listItem.querySelector('.complete-btn').addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
}
