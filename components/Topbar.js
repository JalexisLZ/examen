function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);

    return (
      <div className="bg-black text-white h-16 flex items-center justify-end px-6 shadow-lg" data-name="topbar" data-file="components/Topbar.js">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="hover:opacity-80 transition"
            >
              <div className="icon-bell text-xl"></div>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl p-4 z-50">
                <h3 className="font-bold mb-2">Notificaciones</h3>
                <p className="text-sm text-gray-600">No hay nuevas notificaciones</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <img
              src="https://ui-avatars.com/api/?name={user.name}&background=2563eb&color=fff"
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-bold">{user.name}</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}