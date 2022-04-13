import React from 'react'
import './App.css';
// import Translator from './components/Translator';
import TranslatorNew from './components/TranslatorNew';

function App() {
  return (
    <div className ="App">
      <TranslatorNew initialText="salutations" />
    </div>
  );
}

export default App;
