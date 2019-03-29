
var todoList = {
    todos: [], 
    displayTodos: function() {
        if (this.todos.length === 0){
            console.log('Your todo list is empty!')
        } else {
            for (var i = 0; i < this.todos.length; i++) {
            
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('()', this.todos[i].todoText);
            }
        }
    }
},
    addTodo: function(todoText) {
        this.todos.push({
           todoText: todoText,
           completed: false
        });
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos();
    }
};
