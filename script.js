var itemlist = [{
        text: 'Learn Vue Js',
        completed: false
    },
    {
        text: 'Code a todo list',
        completed: false
    },
    {
        text: 'Learn something else',
        completed: false
    }
]

var vm = new Vue({
    el: '#vue-todolist',
    data: {
        items: itemlist,
        inputVaule: ""
    },

    methods: {
        add: function () {
            if (this.inputVaule.length == 0) {
                alert("Input is require，please enter again");
            } else {
                this.items.push({
                    text: this.inputVaule,
                    completed: false
                });
                this.inputVaule = "";
            }
        },
        removeTodo: function (todo) {
            this.items.splice(this.items.indexOf(todo), 1)
        },
        gernerateId: function (index) {
            return "ID_" + index
        },
    },
})