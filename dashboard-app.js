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

function DashboardApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

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
      <div 
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        data-name="dashboard-app" 
        data-file="dashboard-app.js"
      >
        <TopBar user={currentUser} />
        
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatsCard title="Usuarios" value="124" icon="users" />
                <StatsCard title="Documentos" value="58" icon="file-text" />
                <StatsCard title="Proyectos" value="12" icon="briefcase" />
                <StatsCard title="Tareas" value="89" icon="check-circle" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Calendar />
                <ActivityChart />
              </div>
              
              <DocumentsPanel />
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);