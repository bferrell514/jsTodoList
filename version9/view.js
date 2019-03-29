var view = {

    displayTodos: function() {
        // grab the <ul>
        var todosUl = document.querySelector('ul');
        // clear the list to avoid adding same stuff to our list:
        todosUl.innerHTML = '';
        // the loop will check how many items in the list:
        for (i=0; i<todoList.todos.length; i++) {
            //create <li>
            var todoLi = document.createElement('li');
            // gets item from the Model:
            var todo = todoList.todos[i];
            // creates the var for final <li>:
            var todoTextWithCompletion = '';

            //if item completed, display like this:
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else { // otherwise, display like that:
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            // update todoLi using the .textContent property:
            todoLi.textContent = todoTextWithCompletion;
            // append to html:
            todosUl.appendChild(todoLi);
        }
    }
};
