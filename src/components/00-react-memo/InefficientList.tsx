import { useState, useEffect } from 'react';

// Componente de lista ineficiente
function InefficientList({ items }) {
  console.log('Lista renderizada');
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function InefficientListApp() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulamos una actualización de elementos después de 3 segundos
    setTimeout(() => {
      setItems(['Item 1', 'Item 2', 'Item 3']);
    }, 3000);
  }, []);

  return (
    <div>
      <InefficientList items={items} />
    </div>
  );
}

export default InefficientListApp;
