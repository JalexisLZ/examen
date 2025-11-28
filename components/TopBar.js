function TopBar({ user }) {
  try {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      console.log('Buscando:', searchQuery);
    };

    return (
      <div 
        className="bg-white shadow-lg border-b-4 border-[var(--primary-color)] px-6 py-4"
        data-name="topbar" 
        data-file="components/TopBar.js"
      >
        <div className="flex items-center justify-between">
          <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Búsqueda global..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)]"
              />
              <div className="icon-search absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></div>
            </div>
          </form>
          
          <div className="flex items-center ml-6">
            <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-md flex items-center justify-center">
              <span className="text-3xl font-bold text-[var(--accent-color)]">{user.avatar}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TopBar component error:', error);
    return null;
  }
}