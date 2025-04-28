// URL base de tu API, configurable por variable de entorno si quieres
const API_BASE = window.__API_URL__ || 'https://mysql-restapi-wjqc.onrender.com/api/users';
console.log('API_BASE:', API_BASE);  // Confirmar que se está utilizando correctamente la URL

// obtiene todos
export async function getUsers() {
  const res = await fetch(API_BASE);
  return res.json();
}

// crea uno
export async function createUser(user) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user)
  });
  return res.json();
}

// borra por id
export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.ok;
}
