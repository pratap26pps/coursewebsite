import React from 'react'
import {FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify';
export const Card = (props) => {
  let courses=props.courses
  let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
   function clickehandler(){
      // logic
   if(likedcourses.includes(courses.id)){
    // pahale se like wuwa pada hai
    setlikedcourses((prev)=>prev.filter(((cid)=>cid!==courses.id)));
    toast.warning("liked remooved");
   }
    else{
      // pahale se like nahi hai
      if(likedcourses.length===0){
        setlikedcourses([courses.id])
      }
      else{
        // non empty pahale se hai
        setlikedcourses((prev)=>[...prev,courses.id]);
      }
      toast.success("liked successfully");
     }


  }




  return (
    <div className='bg-slate-500'>
         <div className='w-[390px] relative'>
          <img src={courses.image.url}></img>
           <div className='h-[40px] w-[40px] bg-white rounded-full absolte grid place-items-center '>
           <button onClick={clickehandler}  >
            {
            likedcourses.includes(courses.id) ?
            (< FcLike fontSize="1.65rem"/>):(<FcLikePlaceholder fontSize="1.65rem"/>)
            }
           </button> 
            </div>
         </div>

        
        <div>
          <p className='text-center text-xl text-gray-100'>{courses.title}</p>
          <p className='w-[325px] text-center'>
            {
            courses.description.length > 100 ? (courses.description.substr(0,100))+"...." : (courses.description.substr(0,30))
            }
            </p>
        </div>



    </div>
  )
}
export default Card;