import { Routes, Route } from  "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import ProductList from "./components/TodoList";
// import ProductDetail from "./components/TodoDetail";

import axios from "axios";
// import AddProduct from "./components/AddForm";
// import EditForm from "./components/EditForm"
import {useNavigate } from 'react-router-dom'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {API_URL} from "./config";
import ProductList from "./components/ProductList";
import {useState, useEffect} from 'react'
import AddForm from "./components/AddForm"
import Products from "./components/Products/Products"
import Profile from "./components/Profile"

function App(){

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [err, setErr] = useState(null)
  const [allProducts, setallProducts] = useState([])

// handle display profile
  async function handleLogIn  (event){
    event.preventDefault()
    try{
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
   
    let response = await axios.post(`${API_URL}/signin`,user,{withCredentials: true}); 
    console.log(response.data)

    setUser(response.data)
    
    navigate("/")
  } 
    catch(error){
      setErr(error.response.data)
    }
  };

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
    ;
  
  async function handleLogOut(){
    await axios.post(`${API_URL}/logout`,{},{withCredentials: true});
    setUser(null)
    navigate("/signin")

  }

	return (
		<div>
      <Navbar handleLogOut={handleLogOut} user={user}/>
			
      <Routes>
          <Route path="/signin" element={<SignIn handleLogIn={handleLogIn}/>} />
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/" element={<ProductList/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Products products={allProducts} /> } />
     <Route path="/add-form" element={<AddForm btnSubmit={handleSubmit}/> } />
          {/* <Route path="/" element={<ProductList todos={todos} /> } />
          <Route path="/add-form" element={<AddProduct btnSubmit={handleSubmit}/> } />
          <Route path="/todo/:todoId" element={<ProductDetail btnDelete={handleDelete} />} />
          <Route path="/todo/:todoId/edit" element={<EditProduct btnEdit={handleEdit}/>} /> */}
      </Routes>
		</div>
  );
}

export  default App;
