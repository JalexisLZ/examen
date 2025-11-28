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

function PerfilApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
        setName(user.name);
        setEmail(user.username + '@sistema.com');
      }
    }, []);

    const handleSave = (e) => {
      e.preventDefault();
      alert('Perfil actualizado correctamente');
    };

    const handleChangePhoto = () => {
      alert('Funcionalidad para cambiar foto de perfil');
    };

    if (!currentUser) return null;

    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <TopBar user={currentUser} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-6">Mi Perfil</h1>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="w-32 h-32 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-6">
                    <span className="text-6xl font-bold text-[var(--accent-color)]">{currentUser.avatar}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentUser.name}</h2>
                    <p className="text-gray-600 mb-4">Rol: {currentUser.role}</p>
                    <button onClick={handleChangePhoto} className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:opacity-90">
                      Cambiar Foto
                    </button>
                  </div>
                </div>
                
                <form onSubmit={handleSave}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
                    />
                  </div>
                  
                  <button type="submit" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PerfilApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><PerfilApp /></ErrorBoundary>);