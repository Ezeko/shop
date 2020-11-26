import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

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
                <div className='container'>
                <div className="row" >
                {console.log('products length:' , product.image)}
                    {this.state.products  ? 

                    <div className="col s12" >
                    <div className="card hoverable ">
                        <div className="card-image">
                        <img alt='product' src={product.image} height='200rem' />
                        <div>
                        <span className="card-title grey-text text-darken-4 z3"><h6>{product.title}</h6></span>
                        <Link to ='/add' className="btn-floating right waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </Link>
                        <span><h5>${product.price}</h5></span>
                        </div>
                        
                        </div>
                        <div className="card-content truncate">
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