function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };
    
    const previousMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };
    
    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };
    
    const today = () => {
      setCurrentDate(new Date());
    };
    
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const monthName = currentDate.toLocaleString('es', { month: 'long', year: 'numeric' });
    
    return (
      <div className="bg-gray-200 rounded-lg p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 capitalize">{monthName}</h2>
          <div className="flex gap-2">
            <button onClick={previousMonth} className="p-2 bg-white rounded hover:bg-gray-100">
              <div className="icon-chevron-left text-lg"></div>
            </button>
            <button onClick={today} className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:opacity-90">
              Hoy
            </button>
            <button onClick={nextMonth} className="p-2 bg-white rounded hover:bg-gray-100">
              <div className="icon-chevron-right text-lg"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map(day => (
            <div key={day} className="text-center font-bold text-gray-600 py-2">{day}</div>
          ))}
          
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="p-2"></div>
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => (
            <div key={i + 1} className="bg-white p-2 rounded text-center hover:bg-[var(--primary-color)] hover:text-white cursor-pointer">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}