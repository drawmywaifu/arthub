import React from 'react'

class Navbar extends React.Component {
    render() {
        return(
        <nav style={{ backgroundColor: "transparent", boxShadow: "none" }}> 
        <div className="container nav-wrapper" >
            <div className="row">
                <img src="/images/logo.png" width="65"></img>
                <a id="top_title" href="home" className="brand-logo center black-text">A Community for Art Lovers</a>
        
                <i className="right material-icons black-text">account_circle</i>
                <span className="black-text right">Bobby Chan</span>
            </div>
        </div>
        </nav>
        )
    }
}

export default Navbar;
