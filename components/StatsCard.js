function StatsCard({ title, value, color, icon }) {
  try {
    return (
      <div className={`${color} rounded-lg p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
          </div>
          <div className="icon-{icon} text-4xl text-gray-700"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}