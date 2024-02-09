import { useState,useEffect } from 'react'
import ImageCard from './Components/ImageCard';
const apiUrl = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${apiUrl}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  },[]);
   
  
  return (
    <div className='container mx-auto'>
        {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading....</h1>  : <div className='grid grid-cols-3 gap-4'>
             {images.map(image =>(<ImageCard key={image.id} image={image} />))}
        </div>}
    </div>
  )
}

export default App
