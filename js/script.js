console.log('SCRIPT OK!');

const app = new Vue(
    {
        el: "#app",
        data: {
            newTodo: '',
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
            completedTodos: []
        },
        methods: {
            deleteTodo: function (todoPosition) {

                const completedItem = this.todos[todoPosition];

                // implementazione lunga
                // const array = [];
                // for (let i = 0; i < this.todos.length; i++) {
                //     if (i !== todoPosition) {
                //         array.push(this.todos[i])
                //     }
                // }
                // this.todos = array;

                // implementazione corta
                const arrayStart = this.todos.slice(0, todoPosition);
                const arrayEnd = this.todos.slice(todoPosition + 1);

                this.todos = [...arrayStart, ...arrayEnd];
                this.completedTodos.push(completedItem);
            },
            addTodo: function () {
                const todoToInsert = this.newTodo.trim();
                if (this.isDoppione()) {
                    console.log('Questo elemento è già presente!')
                } else {
                    if (todoToInsert.length > 0) {
                        this.todos.push(todoToInsert);
                        this.newTodo = '';
                    } else {
                        console.log('Niente da inserire!');
                    }
                }
            },
            isDoppione: function () {
                const text = this.newTodo.trim();

                return this.todos.includes(text);
            }
        }
    }
)