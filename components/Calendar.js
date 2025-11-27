function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const getDaysInMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
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
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <div className="flex space-x-2">
            <button onClick={previousMonth} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-left text-sm"></div>
            </button>
            <button onClick={today} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Hoy</button>
            <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-right text-sm"></div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map(day => (
            <div key={day} className="text-center p-2 hover:bg-blue-100 rounded cursor-pointer">
              {day}
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