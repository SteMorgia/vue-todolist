var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        myClass: 'done',
        todos:  [
                    {
                        testo: 'Ripassare CSS',
                        done: false
                    },
                    {
                        testo: 'Studiare JS',
                        done: false
                    },
                    {
                        testo: 'Approfondire Vue',
                        done: false
                    },
                    
                ]
    },
    methods: {
        eliminaTodo(indice) {
            this.todos.splice(indice, 1);
        },
        addTodo(){
            this.todos.push({testo:this.newTodo,done:false});
            this.newTodo = '';
        },
        checkDone(indice){
            this.todos[indice].done == true;
        }
        

        
    }
})


