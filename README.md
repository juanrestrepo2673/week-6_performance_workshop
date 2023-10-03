# Performance Workshop

execute `npm run dev` to visualize the workshop

## 00- React.Memo

- El componente InefficientList se vuelve a renderizar cada vez que el estado de items cambia, incluso si los elementos en la lista siguen siendo los mismos. Esto puede provocar re-renderizaciones innecesarias y afectar el rendimiento
- Mejora el componente utilizando React.memo para evitar re-renderizaciones innecesarias

## 01- UseMemo

- El siguiente componente calcula una operación costosa en cada renderizado, incluso si la entrada no ha cambiado
- Mejora el componente utilizando useMemo para evitar calculos innecesarias


## 02- UseCallback

- Tienes un componente funcional que define una función callback en cada renderizado, incluso si esa función no cambia.
- Utiliza useCallback para evitar este comportamiento ineficiente.

## 03- InefficientuseEffect

- El useEffect se ejecuta en cada renderizado, lo que significa que actualizará el título de la página en cada cambio de estado
- Modifica el useEffect para evitar actualizarlo solo cuando sea necesario.

## 04- Lazy Loading

- Al cargar por primera vez la pagina se cargan ambas Tabs, aunque el usuario no esté visualizando una de ellas
- Utiliza React.lazy y Suspense para cargar los componentes usando lazy loading.
