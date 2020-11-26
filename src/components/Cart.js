import React, { Component } from 'react'
import NavBar from './NavBar'


class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    
    render(){
        
        return(
            <React.Fragment>
            <NavBar />
            <ul className='container'>
                <li className='collection' >
                    <span className='badge' ><button>+</button>1 <button>-</button></span>data[0]
                </li>
            </ul>
            </React.Fragment>
        )
    }
}

export default Cart