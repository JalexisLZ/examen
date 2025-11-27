function LoginForm() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      
      const user = await authenticateUser(username, password);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

    return (
      <div className="login-container rounded-lg shadow-2xl p-8 w-full max-w-md" data-name="login-form" data-file="components/LoginForm.js">
        <div className="flex justify-center mb-6">
          <div className="eagle-logo w-16 h-16"></div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sistema de Login</h1>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar Sesión
          </button>
        </form>
        
        <div className="mt-6 text-sm text-gray-600">
          <p className="font-bold mb-2">Usuarios de prueba:</p>
          <p>Superusuario: super1 / pass123</p>
          <p>Admin: admin1 / pass123</p>
          <p>Usuario: user1 / pass123</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}