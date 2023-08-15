document.querySelector("#todo-list form").addEventListener("submit", function(event) {
    event.preventDefault();

    var taskText = document.querySelector("#todo-list input[type='text']").value;

    // Create a new list item
    var li = document.createElement("li");

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        // Move the task to the completed section if checked, or back to the to-do list if unchecked
        if (checkbox.checked) {
            document.querySelector("#completed-tasks ul").appendChild(li);
        } else {
            document.querySelector("#todo-list ul").appendChild(li);
        }
    });

    // Create a text node with the task text
    var textNode = document.createTextNode(" " + taskText);

    // Append the checkbox and text node to the list item
    li.appendChild(checkbox);
    li.appendChild(textNode);

    // Append the list item to the unordered list
    document.querySelector("#todo-list ul").appendChild(li);

    // Clear the input field
    document.querySelector("#todo-list input[type='text']").value = "";
});
