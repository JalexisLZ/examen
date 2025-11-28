const defaultUsers = [
  {
    id: 1,
    username: 'fundador',
    password: 'fundador123',
    role: 'fundador',
    name: 'Francisco Fundador',
    avatar: 'F'
  },
  {
    id: 2,
    username: 'admin',
    password: 'admin123',
    role: 'administrador',
    name: 'Ana Administradora',
    avatar: 'A'
  },
  {
    id: 3,
    username: 'usuario',
    password: 'usuario123',
    role: 'usuario',
    name: 'Carlos Usuario',
    avatar: 'U'
  }
];

async function authenticateUser(username, password) {
  const user = defaultUsers.find(u => u.username === username && u.password === password);
  
  if (user) {
    return {
      success: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        name: user.name,
        avatar: user.avatar
      }
    };
  }
  
  return { success: false };
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}