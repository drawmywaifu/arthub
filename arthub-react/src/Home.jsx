import React from 'react'
import ArtistCard from './ArtistCard'

class Home extends React.Component {
    render() {
        return (

            <div className="content">
                <nav style={{backgroundColor:"transparent"}}>
                    <div class="container nav-wrapper" >
                        <i className="material-icons left black-text">brush</i>
                        <i className="material-icons right black-text">person</i>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input type="text"
                                placeholder="Search..." />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                           <ArtistCard
                            images={["jojo.jpg", "onepiece.jpg"]}
                           />
                        </div>
                        <div className="col s6">
                        <ArtistCard
                            images={["deathnote.jpg"]}
                           />
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Home;