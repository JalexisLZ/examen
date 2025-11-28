class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
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
            <button onClick={() => window.location.reload()} className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function UsuariosApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [users] = React.useState([
      { id: 1, username: 'fundador', role: 'Fundador', name: 'Francisco Fundador', email: 'fundador@sistema.com', status: 'Activo' },
      { id: 2, username: 'admin', role: 'Administrador', name: 'Ana Administradora', email: 'admin@sistema.com', status: 'Activo' },
      { id: 3, username: 'usuario', role: 'Usuario', name: 'Carlos Usuario', email: 'usuario@sistema.com', status: 'Activo' }
    ]);

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
      }
    }, []);

    if (!currentUser) return null;

    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <TopBar user={currentUser} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-6">Gestión de Usuarios</h1>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">Usuario</th>
                        <th className="text-left py-3 px-4 font-semibold">Rol</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-md flex items-center justify-center mr-3">
                                <span className="text-lg font-bold text-[var(--accent-color)]">{user.name.charAt(0)}</span>
                              </div>
                              <span className="font-semibold">{user.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] rounded-full text-sm font-semibold">
                              {user.role}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{user.email}</td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsuariosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><UsuariosApp /></ErrorBoundary>);