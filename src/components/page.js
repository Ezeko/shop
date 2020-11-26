import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import NavBar from './NavBar'

class Page extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(res => {
            //console.log(res)
            this.setState({products: res})
        })
        .catch(err => console.log(err))
    }

    render(){
       const products = this.state.products && this.state.products.map((product)=>{
            return(
                
                    <Link to={`product/${product.id}`} key={product.id}>
                    <div className="col s12 m6 l3" >
                    <div className="card hoverable medium">
                        <div className="card-image">
                        <img alt='product' src={product.image} height='200rem' />
                        <div>
                        <span className="card-title grey-text text-darken-4 z3"><h6>{product.title}</h6></span>
                        
                        <span className='center'><h5>${product.price}</h5></span>
                        </div>
                        
                        </div>
                        <div className="card-content center truncate">
                        <p>{product.description}</p>
                        </div>
                    </div>
                    </div>
                    </Link>
                
            )
        })
        return(
            <React.Fragment>
            <NavBar />
                <div className='container'>
                <div className="row" >
                    {products.length > 1 ? products : <Loading />}
                </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Page;