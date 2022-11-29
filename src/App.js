import React, {useState} from 'react';
import './App.css';
import Hero from './Components/Hero';
import FirstOutput from './Components/OutPuts/FirstOutput'
import NewForm from './Components/NewForm';




const App = (props)=> {


  const [info, setInfo ] = useState([])

 

  const lastDataHandler  = (data)=>{

    setInfo((prevInfo)=>{

      return[data, ...prevInfo]

    })

  }


  return (
    <div>

      <Hero></Hero>
      <NewForm savedDataHandler={lastDataHandler}></NewForm>
      <FirstOutput items={info} />
   
    </div>
  );
}

export default App;


