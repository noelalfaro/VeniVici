import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_NASA_KEY;
import APIform from './Components/APIform';
import PreviousGallery from './Components/PreviousGallery';
import BanList from './Components/BanList';

function App() {
  const [count, setCount] = useState(0);



  const submitForm = () => {
    console.log('button pressed');

  }


  return (
    <div className="whole-page">

      <PreviousGallery>

      </PreviousGallery>



      <APIform onSubmit={submitForm}></APIform>


      <BanList></BanList>





    </div >



  )
}

export default App
