import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className = "input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text"
                        placeholder="Search..." />
                      
                    </div>     
                </div>  
            </div>
        );
    }
}

export default Home;