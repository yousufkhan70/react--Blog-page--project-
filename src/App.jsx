




import React from 'react'
import img1 from "./assets/sir 1.PNG"
import img2 from "./assets/sir2.PNG"
import img3 from "./assets/sir3.PNG";
import img4 from "./assets/sir4.PNG";
import img5 from "./assets/sir3.PNG";
import img6 from "./assets/sir3.PNG";
import img7 from "./assets/scan.PNG";

const users =[
  {
    image:img1,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with \n  ICDLprogram Build \n your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },

  {
    image:img2,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with  \n ICDLprogram Build \n your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },


  {
    image:img3,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with \n  ICDLprogram Build \n  your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },


  {
    image:img4,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with \n  ICDLprogram Build \n your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },


  {
    image:img5,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with \n  ICDLprogram Build \n your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },



  {
    image:img6,
    head:"Micorsoft office",
    info:"master Essentail computer skills \n with ICDl program ",
    info2:" Master Essentail computer skills with \n  ICDLprogram Build \n your digital skills in just 6 Moths \n at Upskill Bootcamp",
    info3:"DEC 09,2025",
    btn:"Read more ➡",
  },
];


const boys = [
  {

  }
]
const App = () => {
  
  return (
    <div>
      <nav className='flex gap-2 justify-evenly items-center p-4'>
        <h1 className="text-blue-500 text-3xl font-bold">UP</h1>
        <div className='text-1xl space-x-5.5 font-bold p-1.5 '>
          <a href="#" className=''>Home</a>
           <a href="#">courses </a>
            <a href="#">Testominals</a>
             <a href="#">Scholarship</a>
              <a href="#">About </a>
               <a href="#">Partners</a>
        </div>

        <div className='space-x-5'>
         <button className='border rounded-2xl p-1'>Log in </button>
        <button className='bg-blue-500 text-white p-1.5 rounded-2xl'>Start Learning</button>
        </div>
      </nav>

<section className="bg-blue-100  w-{100%} h-100">
<h1 className='text-center pt-44 font-bold text-5xl'>Our <span className='text-blue-600'> Blog </span> </h1>
<p className='text-center pt-2 '>Explore our latest, News,turtorials and insights  </p>
</section>
 

 < br />
 <br />
 <br />
 <section className='flex flex-wrap gap-20.5 justify-center '>
  

 
  <button className=' bg-blue-500 p-3 w-14 rounded-full text-white'> All</button>
  <p>Accounting & Finance</p>
  <p>AI</p>
  <p> Backend Developement</p>
  <p>cloud computing </p>
  <p> data Science</p>
  <p> Digital Marketing</p>
  <p> Enterpreneurship</p>
  <p> Freelancing</p>
  <p>frontend Developement</p>
  <p>Game Development</p>
  <p> Graphic Design</p>
  <p> microsoft office</p>
  <p>Mobile APP Developent</p>
  <p>UI UX design </p>
  <p>video Editing</p>
  <p>Web Developent </p>

  
 </section>
 
  <br /> 
  <br />
  <br />

 <section className='flex flex-wrap justify-center items-center gap-39 space-x-1 '>
  
  {
users.map((data) => {
  return (
    <div className="card-data  border p-5">
      <img src={data.image} alt=""  className='w-70'/>
      <p>{data.head}</p>
      <p className='whitespace-pre-line'>{data.info}</p>
      <p className='whitespace-pre-line'>{data.info2}</p>
      <div className='flex gap-3'>
      <p>{data.info3}</p>
      <p className='bg-blue-400 rounded-sm p-1  text-white items-center justify-evenly gap-3'>{data.btn}</p>

      </div>

    </div>
  )
})
  }
 </section>
 <br />
 <br />
 <br />

<section>
  <div className='bg-blue-400 w-300 rounded-sm p-10 ml-40 text-white'>
   <h3>Dont Talk - take the next step Toward your Brighter future </h3> 
    <p> Your Journey begins with one simple action today </p>
    <button> start Learning </button>
     </div>
</section>
<div className='flex gap-21  justify-center items-center'>



  <div>
    <p> Empowring Afghan Youth with skill <br /> for a Digital future </p>
    <img src={img7} alt="" />
    <span>💬</span>
    <span> 📝</span>
    <span>🛒</span>
  </div>



  <div >
   <h1 className='font-bold'>Services</h1>
    <span> Tech services </span> <br />
    <span> online course</span> <br /> 
    <span>  scholarship</span> <br />
    <span> student Project</span> <br />
  <span> partners</span>
  </div>



  <div>
    <h1 className='font-bold'>Helpful Links </h1>
    <span> Tech services </span> <br />
    <span> online course</span> <br /> 
    <span>  scholarship</span> <br />
    <span> student Project</span> <br />
  <span> partners</span>
  </div>



  <div>
   <h1 className='font-bold'>Information </h1>
    <span> About us  </span> <br />
    <span> Our Instructor </span> <br /> 
    <span>  success stories </span> <br />
    <span> Blog </span> <br />
  <span> 078909043 </span>
  </div>


  


</div>
<section>


</section>




    </div>
  )
}

export default App

