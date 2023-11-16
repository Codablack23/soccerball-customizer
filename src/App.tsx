import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Upload from './views/Upload'
import CustomizerView from './views/Customizer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Upload/> */}
      <CustomizerView/>
    </div>
  )
}

export default App
