import {useState, useEffect, useContext} from 'react'
import { Routes, Route } from  "react-router-dom";
import AddForm from "./components/AddForm"
import Products from "./components/Products/Products"
import { API_URL } from './config';

// import { UserContext } from './components/context/app.context';
import axios from "axios"



export default function App() {
  const [allProducts, setallProducts] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()

    //first upload the image to cloudinary
    console.log(event)
     
     // Create the form data with the key 'imageUrl' because our server expects the formdata with they key 'imageUrl'
     let imageForm = new FormData()
     imageForm.append('imageUrl', event.target.myImage.files[0])
     console.log("event", event.target.myImage.files[0])
     console.log(imageForm)
     let imgResponse = await axios.post(`${API_URL}/upload`, imageForm)
     console.log(imgResponse.data)

    console.log(event.target)

    let newProduct = {
      title: event.target.title.value,
      desc: event.target.desc.value,
      price: event.target.price.value,
      categories: event.target.categories.value,
      img: imgResponse.data.image,
      completed: false,
    }
    // Pass an object as a 2nd param in POST requests
    let response = await axios.post(`${API_URL}/create`, newProduct, {withCredentials: true})
    setallProducts([response.data, ...allProducts])
}

  return (
    <div className="App">
   <Routes>
     <Route path="/" element={<Products products={allProducts} /> } />
     <Route path="/add-form" element={<AddForm btnSubmit={handleSubmit}/> } />

   </Routes>

    </div>
  );
}
