import logo from './logo.svg';
// import './App.css';                              //uncomment after 
import "../src/comp/Homepage.css"
import List from './comp/List';
import Counter from './comp/Counter';
import Todo from './comp/Todo';
import Todoex from './comp/Todoex';
import Timer from './comp/Timer';
import Randomuser from './comp/Randomuser';
import Card from './comp/Card';
import Table from './comp/Table';
import { useState } from "react";
import Uncontrolled from './comp/Uncontrolled';
import A from './comp/A';
import AA from './comp/AA';
import Styleuseref from './comp/Styleuseref';
import Homepage from './comp/Homepage';
import Navbar from './comp/Navbar';
import { Route, Routes } from 'react-router-dom';
import Electronic from './comp/Electronic';
import Product from './comp/Product';
import Pagenotfound from './comp/Pagenotfound';
// import "../src/comp/portfolio/Portfolio.css"

import Input from './comp/Redux/Input';
import Display from './comp/Redux/Display';
import Navbar1 from './comp/portfolio/Navbar1';
import Home from './comp/portfolio/Home';
import Footer from './comp/portfolio/Footer';
import About from './comp/portfolio/About';
import Resume from './comp/portfolio/Resume';
import Services from './comp/portfolio/Services';
import Contact from './comp/portfolio/Contact';
function App() {
  //  const [state, setState] = useState(true);
  const [editData, setEditData] = useState(null)  // uncoomment in redux todo
  return (
    <div className="App">

      {/* <List/> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Todoex/> */}
      {/* <Timer/> */}
      {/* <Randomuser/> */}
      {/* <Uncontrolled/> */}
      {/* <A/> */}
      {/* <AA/> */}
      {/* <Styleuseref/> */}
      {/* <Homepage/> */}
      <Navbar1/>
      <Home/>
      <About/>
       <Resume/>
       <Services/>
    <Contact/>
       <Footer/>

       
     

      {/* <Input/>             */}
                              {/* //in using redux */}
          {/* <Display/> */}

      {/* <Input editData={editData} setEditData={setEditData} />
      <Display setEditData={setEditData} /> */}
      
      {/* <Navbar/>

      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/Table' element={<Table/>}/>
        <Route path='/Product' element={<Product/>}>            //ex of router
           <Route path='electronic' element={<Electronic/>}/>
        </Route>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes> */}


      
         {/* {
          state ? <Card/> : <Table />             
        }                               
        
      <button onClick={() => setState(true)}>Show Card</button>
      <button onClick={() => setState(false)}>Show Table</button> */}

    </div>
  );
}

export default App;
