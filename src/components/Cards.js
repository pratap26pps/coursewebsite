import React, { useState } from 'react'
import Card from './Card';

export const Cards = (props) => {
  let courses=props.courses;
  let category=props.category

 const [likedcourses,setlikedcourses]=useState([]);

function Getallcources(){
  // if(category==="all"){
     let allcourses=[];
 Object.values(courses).forEach(array=>
  {
  
    array.forEach(coursesData=>{
      allcourses.push(coursesData);
    })
  })
  return allcourses;
}
// else{
//   // mai sirf specific category ka data pass karunga
//   return courses[category];
// }
  // }
 


  return (
    <div className='flex flex-wrap  justify-center gap-7  bg-slate-300'>
      {
        Getallcources().map((courses)=>{
        return<Card key={courses.id} courses={courses}
         likedcourses={likedcourses}
         setlikedcourses={setlikedcourses}
        />

        })
      }
    </div>
  )
}
export default Cards;