class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      
      const result = await authenticateUser(username, password);
      
      if (result.success) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Credenciales inválidas');
      }
    };

    return (
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        data-name="app" 
        data-file="app.js"
      >
        <div className="bg-white bg-opacity-90 p-10 rounded-lg border-8 border-gray-800 shadow-2xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <ShieldLogo />
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Sistema de Gestión</h1>
          <h2 className="text-lg text-center mb-6 text-gray-600">Control de Versiones y Roles</h2>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            <button type="submit" className="w-full btn-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);