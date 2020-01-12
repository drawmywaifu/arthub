import React from 'react'
import Gallery from 'react-grid-gallery';
import JustifiedGrid from 'react-justified-grid'
import {Link} from 'react-router-dom'

const imageList = [{
    src: 'https://c1.staticflickr.com/9/8387/8638813125_3cac0dc01c_n.jpg', width: 274, height: 182
},
{
    src: '/images/onepiece.jpg', width: 274, height: 182
},
{
    src: '/images/jojo.jpg', width: 300, height: 182
},
{
    src: '/images/jojo.jpg', width: 300, height: 182
}];

class ArtistCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImages = () => {
        var imageDivs = [];
        for (const image of this.props.images) {
            imageDivs.push(
                <img src={"/images/" + image} style={{ width: "300px", height: "300px" }} />
            )
        }
        return imageDivs;
    }

    renderTags = (tags) => {
        var tagString = ""
        if (tags.length != 0) {
            tagString = "#" + tags[0]
        }
        tags.shift()
        for (const tag of tags) {
            tagString = tagString + " #" + tag
        }
        return tagString
    }

    changeRoute = () => {
        this.context.router.push('/profile');
    }
    render() {
        if (this.props.artist === null || this.props.artist === undefined) {
            return (<div></div>)
        }
        return (
            <Link to="profile" style={{ color: 'black' }}>
                <div style={{ padding: 20 }}>
                    <div className="row">
                        <JustifiedGrid
                            images={this.props.artist.artworks}
                            rows={1}
                            maxRowHeight={150}
                            gutter={0}
                            showIncompleteRow={true} />
                    </div>
                    {/* <div className="row">
                    <div className="col s6" style={{padding:"none"}}>
                        <img src="images/harry.jpg" alt="" height="400px" width="200px" className="" />
                    </div>
                    <div className="col s6">
                        <img src="images/harry.jpg" alt="" width="200px" className="responsive-img" />
                    </div>   
                </div>
                <div className="row">
                    <div className="col s6" style={{padding:"none"}}>   
                    </div> 
                    <div className="col s6" style={{padding:"none"}}>
                        <img src="images/harry.jpg" alt="" width="200px" className="responsive-img" />
                    </div> 
                </div> */}
                    <div className="row">
                        <div className="col s3">
                            <img src={this.props.artist.icon.src} alt="" className="circle" height="60" width="60" />
                        </div>
                        <div className="col s9">
                            <div className="row">
                                <p>
                                    <b>{this.props.artist.name}</b> <br /> {this.renderTags(this.props.artist.tags)} <br /> {this.props.artist.experience + "yr experience"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ArtistCard;
