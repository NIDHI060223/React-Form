import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Data from './Data';
import { useState } from 'react';

function App() {

  const [formDataList, setFormDataList] = useState([]);

  const addFormData = (newData) => {
      setFormDataList((prevData) => [...prevData, newData])
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form addFormData={addFormData}/>}/>
        <Route path='/data' element={<Data formDataList={formDataList}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
