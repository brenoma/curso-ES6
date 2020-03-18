class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.user = 'Breno';
    }

    showUser() {
        console.log(this.user);
    }
}

var MyList = new TodoList();

document.getElementById('btnNewtodo').onclick = function () {
    MyList.add('Novo Todo');
}

document.getElementById('btnShowUser').onclick = function () {
    MyList.showUser();
}