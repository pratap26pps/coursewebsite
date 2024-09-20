
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

import {apiUrl,FilterData} from './data';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {

const [courses,setcourses]=useState();
const [loading,setloading]=useState(true);
const [category,setcatogry]=useState(FilterData[0].title);


async function fetchData (){
  setloading(true);
  try{
    let response=  await fetch(apiUrl);
   let output= await response.json();
    setcourses(output.data);
  }

  catch(error){
   console.log("data did not fetch from urlapi, sorry please correct it");
  }
  setloading(false);
}

useEffect(()=>{
 fetchData();
},[])



  return (
   <div>
    <div>  <Navbar></Navbar>  </div>
    <div> <Filter FilterData={FilterData} category={category} 
    setcatogry={setcatogry}></Filter> </div>
   
  
    <div>
      {
      loading ?(<Spinner/>):(<Cards courses={courses}
         category={category}
         />)
      }
    </div>
   
  
   </div>
   
      )
    }

export default App;
