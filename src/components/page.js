import React, {Component} from 'react'
import { Link } from 'react-router-dom'

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
            console.log(res)
            this.setState({products: res})
        })
        .catch(err => console.log(err))
    }

    render(){
       const products = this.state.products && this.state.products.map((product)=>{
            return(

                    <div className="col s12 m6 l3" key={product.id}>
                    <div className="card hoverable medium">
                        <div className="card-image">
                        <img alt='product' src={product.image} height='200rem' />
                        <span className="card-title blue-text text-darken-0">{product.title}</span>
                        <Link className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </Link>
                        </div>
                        <div className="card-content truncate">
                        <p>{product.description}</p>
                        </div>
                    </div>
                    </div>
                
            )
        })
        return(
            <React.Fragment>
                <div className='container'>
                <div className="row" >
                    {products}
                </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Page;