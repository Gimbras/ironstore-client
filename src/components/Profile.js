import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";



function Profile(props) {
  let { user } = props;
  if (!user) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2> {user.email} </h2>
      <img src="https://lh3.googleusercontent.com/ogw/ADea4I53IZ54wvTnQaHVKZEGEx7Knjw3Hko7wLfS-8oDGQ=s83-c-mo"/>
      {/* <h2> {user.location} </h2> */}
      {/* <h2> {user.skills}</h2> */}
      {/* link to events */}
      <button>
        <Link to={`/editprofile`}> EDIT YOUR PROFILE </Link>
      </button>
      
    </div>
  );
}
export default Profile;


// import { UserContext } from "./context/app.context"
// import {useState, useEffect} from 'react'
// import {axios} from 'axios'


// function Profile(props){
  
  
//   const {user} = props

// //     const {id} = useParams()
// // const [user, setUser] = useState([])

// // useEffect(() => {
// // async function getData(){
// //     let response= await axios.get(`https://localhost/5005/api/${id}`)
// //     setCountryInfo(response.data)
            
// //         }

// //         getData()

// //     }, [id])

// //     if (!user) {
// //         return <img src ='https://tenor.com/bbmjX.gif'/>
// //     }
    
//     return(
//         <main>
//   <div class="card">
//     <div class="left">
//           <img src="https://lh3.googleusercontent.com/ogw/ADea4I53IZ54wvTnQaHVKZEGEx7Knjw3Hko7wLfS-8oDGQ=s83-c-mo"/>
//       <div class="img-border">
//         <div class="img-border">
//         </div>
//       </div>
//       <div class="card-info">
//         <h2>NAME</h2>
//         <p>{user.email}</p>
//       </div>
//       <div class="card-btn">

//       </div>
//     </div>
//     <div class="right">
//       <div>
//         <h3>e-mail</h3>
//         <p>email</p>
//         </div>
//           <div>
//         </div>
//           <div>
//         </div>
//     </div>
//   </div>
// </main>
//     )
// }
// export default Profile