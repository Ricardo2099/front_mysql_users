// URL base de tu API, configurable por variable de entorno si quieres
const API_BASE = window.__API_URL__ || 'https://mysql-restapi-wjqc.onrender.com/api/users';
console.log('API_BASE:', API_BASE);

// obtiene todos
export async function getUsers() {
  const res = await fetch(API_BASE);
  const data = await res.json();
  return data;
}

// crea uno
export async function createUser(user) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
}

// borra por id
export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  return res.ok;
}
