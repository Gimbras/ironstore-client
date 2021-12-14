import { Routes, Route } from  "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import ProductList from "./components/TodoList";
// import ProductDetail from "./components/TodoDetail";
import "./App.css"
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
import ProductDetail from "./components/ProductDetails";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile"

function App(){
  
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [err, setErr] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [fetchingUser, setFetchingUser] = useState(true)

  useEffect(() => {

    const getData = async () => {

        // -----------------------------------------------
        // we make the user requst here to know if the user is logged in or not
        try {
          let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
          setFetchingUser(false)
          setUser(userResponse.data)
        }
        catch(err){
          // the request will fail if the user is not logged in 
          setFetchingUser(false)
        }
        // -----------------------------------------------

    }

    getData()

}, [])

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



  useEffect(() => {
    async function getProducts() {
  const response = await axios.get(`${API_URL}/products`, {withCredentials: true})
  //console.log(response.data)
  setAllProducts(response.data)
}

getProducts()
}, [])

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
       console.log("image response",imgResponse.data)
  
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
      setAllProducts([response.data, ...allProducts])

      navigate('/')
  }
    ;
  
  async function handleLogOut(){
    await axios.post(`${API_URL}/logout`,{},{withCredentials: true});
    setUser(null)
    navigate("/signin")

  }

  if (fetchingUser) {
    return <p>Loading user info. . . </p>
  }

  //handle edit profile
  const handleEdit = async (event) => {
    event.preventDefault()
    console.log(event.target.name.value)
    let editedProfile = {
      name: event.target.name.value,
      country: event.target.country.value,
      age: event.target.age.value,
      //image: event.target.img.value,
     
    }
    console.log(editedProfile)
    // Pass an object as a 2nd param in POST requests
    let response = await axios.patch(`${API_URL}/editProfile`, editedProfile, {withCredential:true})
    // Update our state ‘todos’ with the edited todo so that the user see the upadted info without refrshing the page
    // We have the updated todo here
    console.log(response.data)
    setUser(response.data)
    //navigate("/profile")
}


  //accepted both routes might cause drama!!!!ALERT comited mine out

	return (
		<div >
      <Navbar handleLogOut={handleLogOut} user={user}/>
			
      <Routes>
          <Route path="/signin" element={<SignIn handleLogIn={handleLogIn}/>} />
          <Route path="/signup" element={<SignUp/>}/> 
          {/* <Route path="/" element={<ProductList/>}/>*/}
          <Route path="/profile" element={<Profile user={user}/>}/>
          {/*  <Route path="/" element={<Products products={allProducts} /> } /> */}
          <Route path="/" element={<ProductList products={allProducts} /> } />
          <Route path="/add-form" element={<AddForm btnSubmit={handleSubmit}/> } />
          <Route path="/:productId" element={<ProductDetail  /> } />
          {/* <Route path="/" element={<ProductList todos={todos} /> } />
          <Route path="/add-form" element={<AddProduct btnSubmit={handleSubmit}/> } />
  <Route path="/todo/:todoId" element={<ProductDetail btnDelete={handleDelete} />} />*/}
          <Route path="/editprofile" element={<EditProfile btnEdit={handleEdit} user={user}/>} /> 
      </Routes>
		</div>
  );
}

export  default App;
