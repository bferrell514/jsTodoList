var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {

        var allTodos = this.todos.length;
        var completedTodos = 0;

        for (var i=0; i<allTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === allTodos) {
            for (i=0; i < allTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i=0; i<allTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

var handlers = {

    addTodo: function() {
        var addTodoInputText = document.getElementById('addTodoInputText');
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = '';
        view.displayTodos();

    },

    changeTodo: function() {
        var changeTodoInputNumber = document.getElementById('changeTodoInputNumber');
        var changeTodoInputText = document.getElementById('changeTodoInputText');
        todoList.changeTodo(changeTodoInputNumber.valueAsNumber, changeTodoInputText.value);
        changeTodoInputNumber.value = '';
        changeTodoInputText.value = '';
        view.displayTodos();
    },

    deleteTodo: function() {
        var deleteTodoInputNumber = document.getElementById('deleteTodoInputNumber');
        todoList.deleteTodo(deleteTodoInputNumber.valueAsNumber);
        deleteTodoInputNumber.value = '';
        view.displayTodos();
    },

    toggleCompleted: function() {
        var toggleCompletedInputNumber = document.getElementById('toggleCompletedInputNumber');
        todoList.toggleCompleted(toggleCompletedInputNumber.valueAsNumber);
        toggleCompletedInputNumber = '';
        view.displayTodos();
    },

    toggleAll: function() {
        debugger;
        // button is connected via onclick
        // run toggleAll from Model
        todoList.toggleAll();
        // display
        view.displayTodos();
    }

};

var view = {

    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';]
        for (i=0; i<todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
