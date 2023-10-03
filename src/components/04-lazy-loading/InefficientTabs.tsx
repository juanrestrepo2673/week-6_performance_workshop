import  { useState } from 'react';
import ComponenteA from './ComponenteA';
import ComponenteB from './ComponenteB';

function InefficientTabs() {
  const [tab, setTab] = useState('A');

  return (
    <div>
      <div>
        <button onClick={() => setTab('A')}>Pestaña A</button>
        <button onClick={() => setTab('B')}>Pestaña B</button>
      </div>
      {tab === 'A' ? <ComponenteA /> : <ComponenteB />}
    </div>
  );
}

export default InefficientTabs;
