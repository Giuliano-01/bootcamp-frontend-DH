import React from 'react';
import './App.css';
import useHover from './useHover';

function App() {
  const [hoverRef, isHovered] = useHover();
  return (
    <main>
      <h3>Pasa el mouse 👇</h3>
      <div ref={hoverRef} className="hoverable" data-testid="hoverable">
        {isHovered ? "✅" : "❎"}
		  </div>
    </main>
  );
}

export default App;
