function Sidebar({ isOpen, toggleSidebar }) {
  try {
    return (
      <div
        className={`fixed left-0 top-16 h-full bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0'
        } overflow-hidden z-40`}
        data-name="sidebar"
        data-file="components/Sidebar.js"
      >
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-4 bg-gray-900 rounded-full p-1 hover:bg-gray-700"
        >
          <div className={`icon-${isOpen ? 'chevron-left' : 'chevron-right'} text-sm`}></div>
        </button>

        <div className="p-6">
          <div className="eagle-logo w-12 h-12 mb-8 mx-auto"></div>

          <nav className="space-y-4">
            <a href="dashboard.html" className="flex items-center space-x-3 p-3 rounded hover:bg-gray-800">
              <div className="icon-home text-lg"></div>
              <span className="font-bold">Inicio</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-3 rounded hover:bg-gray-800">
              <div className="icon-user text-lg"></div>
              <span className="font-bold">Usuario</span>
            </a>
            
            <button
              onClick={logout}
              className="flex items-center space-x-3 p-3 rounded hover:bg-gray-800 w-full text-left"
            >
              <div className="icon-log-out text-lg"></div>
              <span className="font-bold">Cerrar Sesión</span>
            </button>
          </nav>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}