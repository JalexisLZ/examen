function DocumentsPanel() {
  try {
    const [documents] = React.useState([
      { id: 1, name: 'Reporte Anual 2024.pdf', status: 'Completado', date: '2024-11-15' },
      { id: 2, name: 'Propuesta Proyecto.docx', status: 'En Revisión', date: '2024-11-20' },
      { id: 3, name: 'Presupuesto Q4.xlsx', status: 'Pendiente', date: '2024-11-25' },
      { id: 4, name: 'Manual Usuario.pdf', status: 'Completado', date: '2024-11-10' }
    ]);

    const getStatusColor = (status) => {
      switch (status) {
        case 'Completado': return 'bg-green-500';
        case 'En Revisión': return 'bg-yellow-500';
        case 'Pendiente': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <div className="bg-gray-200 rounded-lg p-6 shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Panel de Documentos</h2>
        <div className="space-y-3">
          {documents.map(doc => (
            <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center flex-1">
                <div className="icon-file-text text-2xl text-gray-600 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">{doc.name}</h3>
                  <p className="text-sm text-gray-500">Última modificación: {doc.date}</p>
                </div>
              </div>
              <div className={`${getStatusColor(doc.status)} text-white px-4 py-2 rounded-lg text-sm font-semibold`}>
                {doc.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}
