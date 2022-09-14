console.log('SCRIPT OK!');

const app = new Vue(
    {
        el: "#app",
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            completedTodos: []
        },
        methods: {
            todoCheck: function (todoPosition) {
                this.todos[todoPosition].done = !this.todos[todoPosition].done;
                console.log(this.todos[todoPosition].done)
            },
            addTodo: function () {
                const todoToInsert = {
                    text: this.newTodo.trim(),
                    done: false
                };
                if (this.isDoppione()) {
                    console.log('Questo elemento è già presente!')
                } else {
                    if (todoToInsert.text.length > 0) {
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