import React from 'react'

class ArtistCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImages = () => {
        var imageDivs = [];
        for (const image of this.props.images) {
            imageDivs.push(
                <div>
                    <div class="card-image">
                        <img src={"/images/" + image} />
                    </div>
                </div>
            )
        }
        return imageDivs;
    }
    render() {
        return (
            <div className="card">
                {this.renderImages()}
                <div className="card-content">
                    <div className="row">
                        <div className="col s3">
                            <img src="images/harry.jpg" alt="" className="circle responsive-img" />
                        </div>
                        <div className ="col s9">
                            <span>boss name</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ArtistCard;
