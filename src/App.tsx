import { useState } from 'react';
import Map from './Map';

function App() {
  return (
    <div
      className='App'
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Map />
    </div>
  );
}

export default App;
