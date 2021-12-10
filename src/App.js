import { Routes, Route } from  "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import ProductList from "./components/TodoList";
// import ProductDetail from "./components/TodoDetail";
import {useState, useEffect} from 'react'
import axios from "axios";
// import AddProduct from "./components/AddForm";
// import EditForm from "./components/EditForm"
import {useNavigate } from 'react-router-dom'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {API_URL} from "./config";
import ProductList from "./components/ProductList";


function App(){

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [err, setErr] = useState(null)

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
  
  async function handleLogOut(){
    await axios.post(`${API_URL}/logout`,{},{withCredentials: true});
    setUser(null)
    navigate("/signin")

  }
  // const [products, setProducts] = useState([])
  
  // // This hook is for us to redirect users to different urls
  // const navigate = useNavigate()
  // // This runs only --ONCE-- when the component is mounted
  // useEffect(() => {

  //     const getData = async () => {
  //         let response  = await axios.get('http://localhost:5005/api/todos')
  //         setTodos(response.data)
  //     }

  //     getData()

  // }, [])

  // // Runs everytime 'todos' gets updates - a conditional did update
  // useEffect(() => {
  //   navigate('/')
  // }, [todos])

  // const handleSubmit = async (event) => {
  //     event.preventDefault()
  //     let newTodo = {
  //       name: event.target.name.value,
  //       description: event.target.description.value,
  //       completed: false,
  //     }
  //     // Pass an object as a 2nd param in POST requests
  //     let response = await axios.post('http://localhost:5005/api/create', newTodo)
  //     setTodos([response.data, ...todos])
  // }

  // const handleEdit = async (event, id) => {
  //     event.preventDefault()
  //     let editedTodo = {
  //       name: event.target.name.value,
  //       description: event.target.description.value,
  //       completed: false,
  //     }
  //     // Pass an object as a 2nd param in POST requests
  //     let response = await axios.patch(`http://localhost:5005/api/todos/${id}`, editedTodo)
  //     // Update our state 'todos' with the edited todo so that the user see the upadted info without refrshing the page

  //     // We have the updated todo here
  //     console.log(response.data)

  //     let updatedTodos = todos.map((elem) => {
  //         if (elem._id == id) {
  //             elem.name = response.data.name
  //             elem.description = response.data.description
  //         }
  //         return elem
  //     })

  //     setTodos(updatedTodos)
      
  // }

  // const handleDelete = async (id) => {
  //   // make a request to the server to delete it from the database
  //   await axios.delete(`http://localhost:5005/api/todos/${id}`)

  //   // Update your state 'todos' and remove the todo that was deleted
  //   let filteredTodos = todos.filter((elem) => {
  //     return elem._id !== id
  //   })

  //   setTodos(filteredTodos)
  // }

	return (
		<div>
      <Navbar handleLogOut={handleLogOut} user={user}/>
			
      <Routes>
          <Route path="/signin" element={<SignIn handleLogIn={handleLogIn}/>} />
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/" element={<ProductList/>}/>
          {/* <Route path="/" element={<ProductList todos={todos} /> } />
          <Route path="/add-form" element={<AddProduct btnSubmit={handleSubmit}/> } />
          <Route path="/todo/:todoId" element={<ProductDetail btnDelete={handleDelete} />} />
          <Route path="/todo/:todoId/edit" element={<EditProduct btnEdit={handleEdit}/>} /> */}
      </Routes>
		</div>
	);
}

export  default App;

// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import LoadingComponent from "./components/Loading";
// import Navbar from "./components/Navbar/Navbar";
// import { getLoggedIn, logout } from "./services/auth";
// import routes from "./config/routes";
// import * as USER_HELPERS from "./utils/userToken";


// export default function App() {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const accessToken = USER_HELPERS.getUserToken();
//     if (!accessToken) {
//       return setIsLoading(false);
//     }
//     getLoggedIn(accessToken).then((res) => {
//       if (!res.status) {
//         return setIsLoading(false);
//       }
//       setUser(res.data.user);
//       setIsLoading(false);
//     });
//   }, []);

//   function handleLogout() {
//     const accessToken = USER_HELPERS.getUserToken();
//     if (!accessToken) {
//       setUser(null);
//       return setIsLoading(false);
//     }
//     setIsLoading(true);
//     logout(accessToken).then((res) => {
//       if (!res.status) {
//         // deal with error here
//         console.error("Logout was unsuccessful: ", res);
//       }
//       USER_HELPERS.removeUserToken();
//       setIsLoading(false);
//       return setUser(null);
//     });
//   }

//   function authenticate(user) {
//     setUser(user);
//   }

//   if (isLoading) {
//     return <LoadingComponent />;
//   }
//   return (
//     <div className="App">
//       <Navbar handleLogout={handleLogout} user={user} /> 
//       <Routes>
//       <Route  path="/signin" element={<SignIn />}/>
//         <Route  path="/signup" element={<SignUp />}/> 
//         {routes({ user, authenticate, handleLogout }).map((route) => (
//           <Route key={route.path} path={route.path} element={route.element} />
//         ))}
//       </Routes>
//     </div>
//   );
// }
