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

function ArchivosApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [files, setFiles] = React.useState([
      { id: 1, name: 'Informe_2024.pdf', size: '2.5 MB', date: '2025-01-15', type: 'PDF' },
      { id: 2, name: 'Presentacion.pptx', size: '5.8 MB', date: '2025-01-10', type: 'PPT' },
      { id: 3, name: 'Datos.xlsx', size: '1.2 MB', date: '2025-01-08', type: 'Excel' }
    ]);

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
      }
    }, []);

    const handleUpload = () => {
      alert('Funcionalidad de carga de archivos');
    };

    const handleDownload = (fileName) => {
      alert(`Descargando: ${fileName}`);
    };

    if (!currentUser) return null;

    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
        <TopBar user={currentUser} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">Gestión de Archivos</h1>
                <button onClick={handleUpload} className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 flex items-center">
                  <div className="icon-upload text-xl mr-2"></div>
                  Subir Archivo
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-3">
                  {files.map(file => (
                    <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center flex-1">
                        <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                          <div className="icon-file text-xl text-white"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{file.name}</h3>
                          <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                        </div>
                      </div>
                      <button onClick={() => handleDownload(file.name)} className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:opacity-90 flex items-center">
                        <div className="icon-download text-lg mr-2"></div>
                        Descargar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ArchivosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ArchivosApp /></ErrorBoundary>);