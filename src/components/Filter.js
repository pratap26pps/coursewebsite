import React from 'react'
 
 const Filter = (props) => {

    const FilterData=props.FilterData;
    let category=props.category;
    let setcatogry=props.setcatogry;

  function cardchange(title){
    setcatogry(title);
  }



  return (
    <div className=' text-center  flex-wrap bg-slate-300  '>

        { 
         FilterData.map((data)=>{     
         return <button key={data.id }   onClick={()=>cardchange(data.title)}
          className='m-4 rounded-md text-white bg-black p-3 hover:bg-opacity-50 border-2'>
            {data.title}</button>
         })
        }
    

    </div>
  )
}
export default Filter;