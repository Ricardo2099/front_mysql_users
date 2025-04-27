// GET request - Obtener todos los usuarios
function fetchUsers() {
    fetch('http://localhost:8080/api/users')  // Cambia localhost a la URL del servidor remoto si es necesario
        .then(response => response.json())
        .then(data => {
            const usersDiv = document.getElementById('users');
            usersDiv.innerHTML = "";  // Limpiar el contenido previo

            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <p><strong>${user.name}</strong> - ${user.email} - ${user.age} años - ${user.comments}</p>
                    <button onclick="deleteUser(${user.id})">Eliminar</button>
                `;
                usersDiv.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.log('Error al obtener los usuarios:', error);
        });
}

// POST request - Agregar un nuevo usuario
function addUser(event) {
    event.preventDefault();  // Evitar que el formulario se envíe por defecto

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const comments = document.getElementById('comments').value;

    const userData = {
        name: name,
        email: email,
        age: age,
        comments: comments
    };

    fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario agregado:', data);
        fetchUsers();  // Actualizar la lista de usuarios después de agregar uno nuevo
    })
    .catch(error => {
        console.log('Error al agregar el usuario:', error);
    });
}

// DELETE request - Eliminar un usuario
function deleteUser(userId) {
    fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario eliminado:', data);
        fetchUsers();  // Actualizar la lista de usuarios después de eliminar uno
    })
    .catch(error => {
        console.log('Error al eliminar el usuario:', error);
    });
}

// Llamar a fetchUsers al cargar la página para mostrar los usuarios existentes
window.onload = fetchUsers;

// Agregar el evento al formulario de agregar usuario
document.getElementById('userForm').addEventListener('submit', addUser);
