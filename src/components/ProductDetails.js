import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from "../config"
import "./ProductDetails.css"



function ProductDetail() {
    // We get this 'todoId' from the <Route path="/todo/:todoId "> we defined in App.js
    const {productId} = useParams()

    const [productDetail, setProductDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`${API_URL}/${productId}`, {withCredentials: true})
           console.log(response.data)
           setProductDetail(response.data)
        }
        getData()
    }, [])

    // // Ensuring only logged in users see the page
    // if (!props.user) {
    //     return <Navigate to="/signin" />
    // }

    if(!productDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

   

    return (
        <><div><img class="image1" style={{ width: "1200px", height: "560px" }} src={productDetail.img} /></div><div>

            <h1 class="title1">{productDetail.title}</h1>
            <h4 class="prices">€{productDetail.price}</h4>
            <h2 class="detail"> Categories: </h2>
            <h4 class="categories1">{productDetail.categories}</h4>
            <h2 claas="head"> Description: </h2>
            <h4 class="description1">{productDetail.desc}</h4>



        </div></>
        
    )
}

export default ProductDetail


