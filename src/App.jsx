import { useState,useEffect } from 'react'
const apiUrl = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  // const [term,setTerm] = useState('');

  // useEffect(()=>{
  //   fetch(`https://pixabay.com/api/?key=${apiUrl}&q=${term}&image_type=photo&pretty=true`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // },[]);
   
  
  return (
    <>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
             <img src='https://source.unsplash.com/random' alt='images' className='w-full'/>
        <div className='px-6 py-4'>
           <div className='font-bold text-purple-500 text-xl mb-2'>
               Photo By Ajit Das
           </div>
           <ul>
            <li>
              <strong>Views : </strong>
               4000
            </li>
            <li>
              <strong>Downloads : </strong>
               300
            </li>
            <li>
              <strong>Likes : </strong>
               400
            </li>
           </ul>
        </div>

        <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                  #tag1
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                  #tag2
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                  #tag3
            </span>
        </div>
        </div>  
    </>
  )
}

export default App