import { useState } from 'react';

// Componente ineficiente que define una función callback en cada renderizado
function CallbackIneficiente({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

function InefficienIncrementApp() {
  const [count, setCount] = useState(0);

  // Función de incremento que se define en cada renderizado
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <CallbackIneficiente onIncrement={handleIncrement} />
    </div>
  );
}

export default InefficienIncrementApp;
