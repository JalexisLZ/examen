function DocumentsPanel() {
  try {
    const documents = [
      { id: 1, name: 'Reporte Mensual.pdf', status: 'Completado', date: '2025-11-20' },
      { id: 2, name: 'Proyecto Q4.docx', status: 'En Progreso', date: '2025-11-25' },
      { id: 3, name: 'Análisis de Datos.xlsx', status: 'Pendiente', date: '2025-11-15' },
      { id: 4, name: 'Presentación Anual.pptx', status: 'Completado', date: '2025-11-22' }
    ];

    const getStatusColor = (status) => {
      switch (status) {
        case 'Completado': return 'text-green-600';
        case 'En Progreso': return 'text-blue-600';
        case 'Pendiente': return 'text-yellow-600';
        default: return 'text-gray-600';
      }
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h2 className="text-xl font-bold mb-4">Panel de Documentos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-bold">Documento</th>
                <th className="text-left p-3 font-bold">Estatus</th>
                <th className="text-left p-3 font-bold">Última Modificación</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{doc.name}</td>
                  <td className={`p-3 font-bold ${getStatusColor(doc.status)}`}>{doc.status}</td>
                  <td className="p-3">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}