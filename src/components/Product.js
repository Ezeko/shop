import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import NavBar from './NavBar'

class Product extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: {}
        }
    }

    componentDidMount(){
        //console.log('props', this.props)
        fetch(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(res => {
            //console.log(res)
            this.setState({products: res})
            //console.log(this.state.products)
        })
        .catch(err => console.log(err))
    }

    render(){
        let product = this.state.products ? this.state.products : {};
            
        return(
            <React.Fragment>
            <NavBar />
                <div className='container'>
                <div className="row" >
                {console.log('products length:' , Object.keys(product).length)}
                    {Object.keys(product).length > 1 && this.state.products !== undefined  ? 

                    <div className="col s12" >
                    <div className="card" >
                        <div className="card-image">
                        <img alt='product' src={product.image} />
                        <div>
                        <span className="card-title grey-text text-darken-4 z3">{product.title}</span>
                        <Link to ='/add' className="btn-floating right waves-effect waves-light green">
                            <i className="material-icons">add</i>
                        </Link>
                        <span className='float'><h5> ${product.price}</h5></span>
                        </div>
                        
                        </div>
                        <div className="card-content">
                        <p>{product.description}</p>
                        </div>
                    </div>
                    </div>
                : <Loading />}
                </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Product;