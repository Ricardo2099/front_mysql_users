// URL base de tu API, configurable por variable de entorno si quieres
const API_BASE = window.__API_URL__ || 'https://mysql-restapi-wjqc.onrender.com/api/users';

// obtiene todos
export async function getUsers() {
  try {
    const res = await fetch(API_BASE);
    return res.json();
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
}

// crea uno
export async function createUser(user) {
  try {
    const res = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return res.json();
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
}

// borra por id
export async function deleteUser(id) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    return res.ok;
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
  }
}

