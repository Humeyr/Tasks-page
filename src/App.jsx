import './App.css';
import Header from './components/Header';
import CounterPage from './pages/counterPage';
import CrudPage from './pages/crudPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<CrudPage/>} />
        <Route path="/counter" element={<CounterPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
