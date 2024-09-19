import React from 'react';
import Card from './Card';
import Button from './Button';

function App() {
  return (
    <div>
      <Card 
        image="https://via.placeholder.com/300"
        title="Card 1"
        description="Descrição"
      />
      <Card 
        image="https://via.placeholder.com/300"
        title="Card 2"
        description="Descrição 2"
      />
      <Button text="Botão" />
    </div>
  );
}

export default App;
