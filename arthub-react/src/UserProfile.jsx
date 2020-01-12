import React from 'react'
import Gallery from 'react-grid-gallery';
import Navbar from './Navbar'
import { render } from 'react-dom';
//import AvatarEditor from 'react-avatar-editor'


const IMAGES =
    [{
        src: "https://i.pinimg.com/originals/d5/1e/cf/d51ecfa2a7b520fbc503e4739985ae0e.jpg",
        thumbnail: "https://i.pinimg.com/originals/d5/1e/cf/d51ecfa2a7b520fbc503e4739985ae0e.jpg",
        thumbnailWidth: 674,
        thumbnailHeight: 960,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/109754959/original/6ceb082aeb372a59867d8379ef07a7238f2f7cf9/draw-beautiful-realistic-pencil-portrait.jpg",
        thumbnail: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/109754959/original/6ceb082aeb372a59867d8379ef07a7238f2f7cf9/draw-beautiful-realistic-pencil-portrait.jpg",
        thumbnailWidth: 674,
        thumbnailHeight: 960,
        isSelected: true
    },
    {
        src: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190228142405-kevin-hart-pencil-drawing.jpg",
        thumbnail: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190228142405-kevin-hart-pencil-drawing.jpg",
        thumbnailWidth: 674,
        thumbnailHeight: 960,
        isSelected: true
    },
    {
        src: "https://images.saatchiart.com/saatchi/1130983/art/5137329/4207149-KNSWLJRV-7.jpg",
        thumbnail: "https://images.saatchiart.com/saatchi/1130983/art/5137329/4207149-KNSWLJRV-7.jpg",
        thumbnailWidth: 674,
        thumbnailHeight: 960,
        isSelected: true
    }
    ]


class Profile extends React.Component {


    render() {

        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s3">
                            <img src="https://files.slack.com/files-pri/TR1B2MEHL-FSJPC4L0Y/220px-wikimania_2016_-_press_conference_with_jimmy_wales_and_katherine_maher_01__centred_crop_.jpg" alt="" class="circle responsive-img" />
                        </div>
                        <div className="col s10 "></div>
                        <div className="section">
                            <h6>SMITH FOLK </h6>
                            <a class="waves-effect waves-light btn-small"><i class="material-icons right">favorite</i>follow</a>
                            <i className="material-icons">star star star star_half star_border </i>

                        </div>
                        <div className="chip">
                            sketchs
             </div>

                        <div className="chip">
                            pencil
             </div>
                        <div className="chip">
                            portrait
             </div>

                    </div>
                    <div className="row" ></div>
                    <div className="row" ></div>
                    <div className="row" >
                        <div className="col s4">
                            <Gallery images={IMAGES} />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col s4">
                            <a class="waves-effect waves-light btn col s2">Buy</a>
                            <a class="waves-effect waves-light btn col s2">Buy</a>
                            <a class="waves-effect waves-light btn col s2">Buy</a>
                        </div>
                    </div>
                    <div className="row left-align">
                        <div className="col s0.5">

                            <h5>Description</h5>
                        </div>
                    </div>
                    <div className="row left-align">
                        <div className="col s0.5">

                            <h6>I’m a big fan of short sentences. I love them because people can understand them easily. There's an insane amount of value in short sentences that are readable, digestible, and punchy.</h6>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;