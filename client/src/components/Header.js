import { Component } from "react";
import { NavLink } from 'react-router-dom'



class Header extends Component {
    

   render () {
        return (
            <div className="headerBody">
                
                
                <div className="navigation">
                    <h1>Book Barn</h1>
                    <div><NavLink to = "/">Home</NavLink></div>
                    <div><NavLink to = "/add-book">Add Book</NavLink></div>
                </div>
                <div className="userInfo">
                    <h1>Welcome back {this.props.username}!</h1>
                    <div className="userNavButtons">
                        <div className="navButton"><NavLink to='/registration'>Register</NavLink></div>
                        <div className="navButton"><NavLink to='/login'>Login</NavLink></div>
                    </div>
                </div>
            </div>
        )
   }
}

export default Header;