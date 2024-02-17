let users = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' }
];

let products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' }
];

let tasks = [
    { id: 1, description: 'Tarea 1' },
    { id: 2, description: 'Tarea 2' }
];



function addUser() {
    let newName = prompt('Ingrese el nombre del usuario:');
    if (newName === null) {

        return;
    }
    if (newName.trim() === "") {
        alert("Por favor ingrese un nombre válido.");
        return;
    }

    let newUser = { id: users.length + 1, name: newName };
    users.push(newUser);
    displayUsers();
}

function editUser(id) {
    let newName = prompt('Ingrese el nuevo nombre del usuario:');
    let index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index].name = newName;
        displayUsers();
    } else {
        alert('Usuario no encontrado.');
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

function displayUsers() {
    let userBody = document.getElementById('userBody');
    userBody.innerHTML = '';
    users.forEach(user => {
        let row = `<tr>
                       <td>${user.id}</td>
                       <td>${user.name}</td>
                       <td>
                           <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Editar</button>
                           <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Eliminar</button>
                       </td>
                   </tr>`;
        userBody.innerHTML += row;
    });
}


function addProduct() {
    let newName = prompt('Ingrese el nombre del producto:');
    if (newName === null) {

        return;
    }
    if (newName.trim() === "") {
        alert("Por favor ingrese un nombre válido.");
        return;
    }
    let newProduct = { id: products.length + 1, name: newName };
    products.push(newProduct);
    displayProducts();
}

function editProduct(id) {
    let newName = prompt('Ingrese el nuevo nombre del producto:');
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index].name = newName;
        displayProducts();
    } else {
        alert('Producto no encontrado.');
    }
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

function displayProducts() {
    let productBody = document.getElementById('productBody');
    productBody.innerHTML = '';
    products.forEach(product => {
        let row = `<tr>
                       <td>${product.id}</td>
                       <td>${product.name}</td>
                       <td>
                           <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Editar</button>
                           <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
                       </td>
                   </tr>`;
        productBody.innerHTML += row;
    });
}


function addTask() {
    let newDescription = prompt('Ingrese la descripción de la tarea:');
    if (newDescription === null) {

        return;
    }
    if (newDescription.trim() === "") {
        alert("Por favor ingrese un nombre válido.");
        return;
    }
    let newTask = { id: tasks.length + 1, description: newDescription };
    tasks.push(newTask);
    displayTasks();
}

function editTask(id) {
    let newDescription = prompt('Ingrese la nueva descripción de la tarea:');
    let index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index].description = newDescription;
        displayTasks();
    } else {
        alert('Tarea no encontrada.');
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

function displayTasks() {
    let taskBody = document.getElementById('taskBody');
    taskBody.innerHTML = '';
    tasks.forEach(task => {
        let row = `<tr>
                       <td>${task.id}</td>
                       <td>${task.description}</td>
                       <td>
                           <button class="btn btn-warning btn-sm" onclick="editTask(${task.id})">Editar</button>
                           <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
                       </td>
                   </tr>`;
        taskBody.innerHTML += row;
    });
}


function searchTask() {
    let searchText = document.getElementById('searchTaskInput').value.toLowerCase();
    let filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(searchText));
    displayFilteredTasks(filteredTasks);
}


function displayFilteredTasks(filteredTasks) {
    let taskBody = document.getElementById('taskBody');
    taskBody.innerHTML = '';
    filteredTasks.forEach(task => {
        let row = `<tr>
                       <td>${task.id}</td>
                       <td>${task.description}</td>
                       <td>
                           <button class="btn btn-warning btn-sm" onclick="editTask(${task.id})">Editar</button>
                           <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
                       </td>
                   </tr>`;
        taskBody.innerHTML += row;
    });
}


displayUsers();
displayProducts();
displayTasks();