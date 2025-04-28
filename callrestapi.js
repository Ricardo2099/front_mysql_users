// URL base de tu API, configurable por variable de entorno si quieres
const API_BASE = window.__API_URL__ || 'https://mysql-restapi-wjqc.onrender.com/api/users';

// obtiene todos los usuarios
export async function getUsers() {
  const res = await fetch(API_BASE);
  return res.json();
}

// crea un nuevo usuario
export async function createUser(user) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user)
  });
  return res.json();
}

// elimina un usuario por id
export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.ok;
}
