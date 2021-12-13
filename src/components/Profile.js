import { UserContext } from "./context/app.context"
import {useState, useEffect} from 'react'
function Profile(){
    
    const {id} = useParams()
const [user, setUser] = useState([])

useEffect(() => {
async function getData(){
    let response= await axios.get(`https://localhost/5005/api/${id}`)
    setCountryInfo(response.data)
            
        }

        getData()

    }, [id])

    if (!user) {
        return <img src ='https://tenor.com/bbmjX.gif'/>
    }
    
    return(
        <main>
  <div class="card">
    <div class="left">
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I53IZ54wvTnQaHVKZEGEx7Knjw3Hko7wLfS-8oDGQ=s83-c-mo"/>
      <div class="img-border">
        <div class="img-border">
        </div>
      </div>
      <div class="card-info">
        <h2>NAME</h2>
        <p>{user.name}</p>
      </div>
      <div class="card-btn">

      </div>
    </div>
    <div class="right">
      <div>
        <h3>e-mail</h3>
        <p>{user.email}</p>
        </div>
          <div>
        </div>
          <div>
        </div>
    </div>
  </div>
</main>
    )
}
export default Profile