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

function ContactosApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [contacts] = React.useState([
      { id: 1, name: 'María López', email: 'maria.lopez@email.com', phone: '+34 612 345 678', company: 'Tech Solutions' },
      { id: 2, name: 'Juan Pérez', email: 'juan.perez@email.com', phone: '+34 623 456 789', company: 'Digital Corp' },
      { id: 3, name: 'Laura García', email: 'laura.garcia@email.com', phone: '+34 634 567 890', company: 'Innovation Ltd' },
      { id: 4, name: 'Pedro Martínez', email: 'pedro.martinez@email.com', phone: '+34 645 678 901', company: 'StartUp Inc' }
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
              <h1 className="text-3xl font-bold text-white mb-6">Contactos</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map(contact => (
                  <div key={contact.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-[var(--accent-color)]">{contact.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{contact.name}</h3>
                        <p className="text-sm text-gray-500">{contact.company}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <div className="icon-mail text-lg mr-2 text-[var(--primary-color)]"></div>
                        <span className="text-sm">{contact.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="icon-phone text-lg mr-2 text-[var(--primary-color)]"></div>
                        <span className="text-sm">{contact.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ContactosApp /></ErrorBoundary>);