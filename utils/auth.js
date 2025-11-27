const USERS_DATABASE = [
  { id: 1, username: 'super1', password: 'pass123', role: 'superusuario', name: 'Super Usuario 1' },
  { id: 2, username: 'super2', password: 'pass123', role: 'superusuario', name: 'Super Usuario 2' },
  { id: 3, username: 'admin1', password: 'pass123', role: 'admin', name: 'Administrador 1' },
  { id: 4, username: 'admin2', password: 'pass123', role: 'admin', name: 'Administrador 2' },
  { id: 5, username: 'user1', password: 'pass123', role: 'usuario', name: 'Usuario Regular 1' },
  { id: 6, username: 'user2', password: 'pass123', role: 'usuario', name: 'Usuario Regular 2' }
];

async function authenticateUser(username, password) {
  const user = USERS_DATABASE.find(u => u.username === username && u.password === password);
  return user || null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}