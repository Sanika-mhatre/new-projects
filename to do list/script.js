document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskText} 
            <button class="complete-task">✔</button> 
            <button class="delete-task">✖</button>`;

        taskList.appendChild(taskItem);
        taskInput.value = "";

        // Mark task as completed
        taskItem.querySelector(".complete-task").addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Delete task
        taskItem.querySelector(".delete-task").addEventListener("click", () => {
            taskItem.remove();
        });
    });
});
