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
      return <div className="p-4 text-red-600">Error: {this.state.error?.message}</div>;
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
      <div className="dashboard-bg min-h-screen" data-name="dashboard" data-file="dashboard-app.js">
        <Topbar user={currentUser} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatsCard title="Usuarios Activos" value="156" color="bg-red-200" icon="users" />
              <StatsCard title="Documentos" value="89" color="bg-blue-200" icon="file-text" />
              <StatsCard title="Notificaciones" value="24" color="bg-green-200" icon="bell" />
              <StatsCard title="Tareas" value="42" color="bg-yellow-200" icon="check-square" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Calendar />
              <ActivityChart />
            </div>
            
            <DocumentsPanel />
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);