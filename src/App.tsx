import './App.css'
import InefficientListApp from './components/00-react-memo/InefficientList'
import InefficientCalcApp from './components/01-use-memo/InefficientCalc'
import InefficienIncrementApp from './components/02-use-callback/InefficienIncrement'
import InefficientuseEffect from './components/03-use-effect/Inefficient-useEffect'
import InefficientTabs from './components/04-lazy-loading/InefficientTabs'

function App() {

  return (
    <>
      <div>
        <h2>00- React.Memo</h2>
        <p>El componente InefficientList se vuelve a renderizar cada vez que el estado de items cambia, incluso si los elementos en la lista siguen siendo los mismos. Esto puede provocar re-renderizaciones innecesarias y afectar el rendimiento</p>
        <p>Mejora el componente utilizando <strong>React.memo</strong> para evitar re-renderizaciones innecesarias</p>
        <InefficientListApp />
        <hr />
      </div>

      <div>
        <h2>01- UseMemo</h2>
        <p>El siguiente componente calcula una operación costosa en cada renderizado, incluso si la entrada no ha cambiado</p>
        <p>Mejora el componente utilizando <strong>useMemo</strong> para evitar calculos innecesarias</p>
        <InefficientCalcApp />
        <hr />
      </div>

      <div>
        <h2>02- UseCallback</h2>
        <p>Tienes un componente funcional que define una función callback en cada renderizado, incluso si esa función no cambia.</p>
        <p>Utiliza <strong>useCallback</strong> para evitar este comportamiento ineficiente.</p>
        <InefficienIncrementApp />
        <hr />
      </div>

      <div>
        <h2>03- InefficientuseEffect</h2>
        <p>El useEffect se ejecuta en cada renderizado, lo que significa que actualizará el título de la página en cada cambio de estado</p>
        <p>Modifica el useEffect para evitar actualizarlo solo cuando sea necesario.</p>
        <InefficientuseEffect />
        <hr />
      </div>

      <div>
        <h2>04- Lazy Loading</h2>
        <p>Al cargar por primera vez la pagina se cargan ambas Tabs, aunque el usuario no esté visualizando una de ellas</p>
        <p>Utiliza React.lazy y Suspense para cargar los componentes usando lazy loading.</p>
        <InefficientTabs />
        <hr />
      </div>
    </>
  )
}

export default App
