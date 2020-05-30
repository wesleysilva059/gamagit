import React from 'react';

function App(props) {
  return (
    <>
      <h1>{props.title} {props.name}</h1>
      <input name="usuario" id="usuario" className="usuarioinput" placeholder="Usuário" />
    </>
  );
}

export default App;
