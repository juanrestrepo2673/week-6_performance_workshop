import { useState } from 'react';

// Componente ineficiente que realiza un cálculo costoso en cada renderizado
function OperacionIneficiente({ numero }) {
   const resultado = calcularResultado(numero);

   return (
      <div>
         <p>Resultado: {resultado}</p>
      </div>
   );
}

// Función de cálculo costoso
function calcularResultado(numero) {
   console.log('Cálculo costoso realizado');
   // Simulamos un cálculo que consume tiempo
   let resultado = 0;
   for (let i = 1; i <= numero; i++) {
      resultado += i;
   }
   return resultado;
}

function InefficientCalcApp() {
   const [numero, setNumero] = useState(5);

   const handleIncrement = () => {
      setNumero(numero + 1);
   };

   return (
      <div>
         <p>Número: {numero}</p>
         <button onClick={handleIncrement}>Incrementar Número</button>
         <OperacionIneficiente numero={numero} />
      </div>
   );
}

export default InefficientCalcApp;
