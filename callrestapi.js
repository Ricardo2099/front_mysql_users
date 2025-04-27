
// callrestapi.js
const API_BASE = 'https://mysql-restapi-wjqc.onrender.com/api/users';

async function fetchUsers() {
  const res = await fetch(API_BASE);
  const users = await res.json();
  // … pinta la lista en la página …
}

async function addUser(user) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
}

// Ejemplo de hook al formulario:
document.getElementById('userForm').onsubmit = async e => {
  e.preventDefault();
  const user = {
    name:  e.target.name.value,
    email: e.target.email.value,
    age:   Number(e.target.age.value),
    comments: e.target.comments.value
  };
  await addUser(user);
  await fetchUsers();
};
