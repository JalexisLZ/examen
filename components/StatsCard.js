function StatsCard({ title, value, icon }) {
  try {
    return (
      <div 
        className="bg-[var(--primary-color)] rounded-lg p-6 shadow-lg text-white"
        data-name="stats-card" 
        data-file="components/StatsCard.js"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-1">{title}</p>
            <h3 className="text-3xl font-bold">{value}</h3>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <div className={`icon-${icon} text-2xl`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}