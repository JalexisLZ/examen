function Sidebar({ isOpen, toggleSidebar }) {
  try {
    return (
      <div 
        className={`fixed left-0 top-0 h-full bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50`}
        data-name="sidebar" 
        data-file="components/Sidebar.js"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <svg width="50" height="60" viewBox="0 0 80 100">
              <path 
                d="M40 5 L75 15 L75 45 C75 65 60 85 40 95 C20 85 5 65 5 45 L5 15 Z" 
                fill="var(--secondary-color)"
                stroke="var(--primary-color)"
                strokeWidth="3"
              />
              <text x="40" y="55" fontSize="32" fill="var(--accent-color)" textAnchor="middle" fontWeight="bold">S</text>
            </svg>
            <button onClick={toggleSidebar} className="text-gray-600 hover:text-[var(--primary-color)]">
              <div className="icon-x text-2xl"></div>
            </button>
          </div>
          
          <nav>
            <a href="dashboard.html" className="flex items-center px-4 py-3 mb-2 text-gray-700 bg-[var(--primary-color)] bg-opacity-10 rounded-lg">
              <div className="icon-home text-xl mr-3"></div>
              <span className="font-semibold">Inicio</span>
            </a>
            
            <a href="usuarios.html" className="flex items-center px-4 py-3 mb-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <div className="icon-users text-xl mr-3"></div>
              <span>Usuarios</span>
            </a>
            
            <a href="archivos.html" className="flex items-center px-4 py-3 mb-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <div className="icon-folder text-xl mr-3"></div>
              <span>Archivos</span>
            </a>
            
            <a href="contactos.html" className="flex items-center px-4 py-3 mb-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <div className="icon-contact text-xl mr-3"></div>
              <span>Contactos</span>
            </a>
            
            <a href="perfil.html" className="flex items-center px-4 py-3 mb-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <div className="icon-user-cog text-xl mr-3"></div>
              <span>Mi Perfil</span>
            </a>
            
            <button onClick={() => logout()} className="flex items-center px-4 py-3 w-full text-gray-700 hover:bg-gray-100 rounded-lg mt-4">
              <div className="icon-log-out text-xl mr-3"></div>
              <span>Cerrar Sesión</span>
            </button>
          </nav>
        </div>
        
        <button 
          onClick={toggleSidebar}
          className="absolute -right-12 top-6 bg-white shadow-lg rounded-r-lg p-3 hover:bg-gray-100"
        >
          <div className={`icon-${isOpen ? 'chevron-left' : 'chevron-right'} text-xl text-gray-600`}></div>
        </button>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}