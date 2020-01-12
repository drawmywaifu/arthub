import React from 'react'
import Navbar from './Navbar'
import ArtistCard from './ArtistCard'
import M from 'materialize-css';


const tags = { "anime": null, "portraits": null, "fantasy": null }
const artists = {
    1: {
        "email": "hitormi@example.com",
        "password": "test2",
        "description": "I am a passionate anime lover who loves making peoples anime dreams come true.",
        "name": "Hitomi Tanaka",
        "rating": 5,
        "experience": "17",
        "tags": [
            "anime",
            "cartoon"
        ],
        icon: {
            src: "/images/harry.jpg"
        },
        artworks:
        [
            {
                src: "/images/portrait1.jpeg",
                width: 203, height: 249 
            },
            {
                src: "/images/portrait2.jpeg",
                width: 203, height: 249 
            },
            {
                src: "/images/portrait3.jpeg",
                width: 203, height: 249 
            }
        ]
    },
    30:
    {
        "email": "leo@example.com",
        "password": "test2",
        "description": "I am a skilled portrait artist who has been drawing realistic portraits for years.",
        "name": "Leo Goldberg",
        "rating": 5,
        "experience": "17",
        "tags": [
            "portrait"
        ],
        icon: {
            src: "/images/joanna.jpg"
        },
        artworks:
        [
            {
                src: "/images/portrait3.jpeg",
                width: 203, height: 249 
            },
            {
                src: "/images/portrait2.jpeg",
                width: 203, height: 249 
            },
            {
                src: "/images/portrait1.jpeg",
                width: 203, height: 249 
            }
        ]
    },
    31:
    {
        "email": "leo@example.com",
        "password": "test2",
        "description": "I am a skilled portrait artist who has been drawing realistic portraits for years.",
        "name": "Oula Yakoub",
        "rating": 5,
        "experience": "17",
        "tags": [
            "portrait"
        ],
        icon: {
            src: "/images/trinity.jpg"
        },
        artworks:
        [
            {
                src: "/images/waifu.jpeg",
                width: 227, height: 222
            },
            {
                src: "/images/waifu2.jpeg",
                width: 211, height: 239
            }
        ]
    },
    32:
    {
        "email": "leo@example.com",
        "password": "test2",
        "description": "I am a skilled portrait artist who has been drawing realistic portraits for years.",
        "name": "Joanna Hoo",
        "rating": 5,
        "experience": "17",
        "tags": [
            "portrait"
        ],
        icon: {
            src: "/images/joanna.jpg"
        },
        artworks:
        [
            {
                src: "/images/husbando.jpeg",
                width: 225, height: 225 
            },
            {
                src: "/images/waifu2.jpeg",
                width: 211, height: 239 
            }
        ]
    },
    33:
    {
        "email": "leo@example.com",
        "password": "test2",
        "description": "I am a skilled portrait artist who has been drawing realistic portraits for years.",
        "name": "Max Zhang",
        "rating": 5,
        "experience": "17",
        "tags": [
            "portrait"
        ],
        icon: {
            src: "/images/harry.jpg"
        }
    }
}

var filters = []

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredArtists : []
        }
    }

    componentDidMount() {
        this.filterArtists()
        var self = this
        M.AutoInit();

        var tagOptions = {
            data: tags,
            onAutocomplete: this.handleComplete
        }

        var chipOptions = {
            onChipDelete: this.handleChipDelete
        }

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.chips');
            var instances = M.Chips.init(elems, chipOptions);
          });

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.autocomplete');
            var instances = M.Autocomplete.init(elems, tagOptions);
        });

        document.getElementById("search")
            .addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    self.handleComplete()
                }
            });
    }

    filterArtists = () => {
        var filteredArtists = []
        if (filters.length === 0) {
            Object.keys(artists).forEach(
                artistid => {
                    filteredArtists.push(artists[artistid])
                }
            )
        }
        else {
            //filter artists by current filters
            Object.keys(artists).forEach(
                artistid => {
                    if (filters.some(r => artists[artistid].tags.indexOf(r) >= 0)) {
                        filteredArtists.push(artists[artistid])
                    }
                }
            )
        }

        this.setState({
            filteredArtists: filteredArtists
        })
    }
    renderArtistGrid = () => {
        return ([
            <div className="row" style={{ marginBottom: 0 }}>
                <div className="col s6" style={{ paddingRight: 1, borderRightStyle: "solid", borderBottomStyle: "solid", borderWidth: "1px" }}>
                    <ArtistCard
                        {...this.props}
                        artist={this.state.filteredArtists[0]}
                    />
                </div>
                <div className="col s6" style={{ paddingLeft: 1, borderLeftStyle: "solid", borderBottomStyle: "solid", borderWidth: "1px" }}>
                    <ArtistCard
                        {...this.props}
                        artist={this.state.filteredArtists[1]}
                    />
                </div>
            </div>,
            <div className="row" >
                <div className="col s6 container" style={{ paddingRight: 1, borderRightStyle: "solid", borderTopStyle: "solid", borderWidth: "1px" }}>
                    <ArtistCard
                        {...this.props}
                        artist={this.state.filteredArtists[2]}
                    />
                </div>
                <div className="col s6 container" style={{ paddingLeft: 1, borderLeftStyle: "solid", borderTopStyle: "solid", borderWidth: "1px" }}>
                    <ArtistCard
                        {...this.props}
                        artist={this.state.filteredArtists[3]}
                    />
                </div>
            </div>]
        )
    }
    handleChipDelete = (e, chip) => {
        console.log("i got called")
        console.log("chip is " + chip)
        var filterIndex = filters.indexOf(chip.el.innerHTML)
        if(filterIndex > -1)
        {
            filters.splice(filterIndex, 1)
            this.filterArtists()
        }
    }
    handleComplete = () => {

        var input = document.getElementById("search")

        var tagtext = input.value
        if (tagtext != "") {
            var tagrow = document.getElementById("tagrow")

            var tag = document.createElement("div")
            tag.className = "col s2 chip center"
            tag.innerHTML = tagtext

            var close = document.createElement("i")
            close.className = "close material-icons"
            close.innerHTML = "close"
            tag.appendChild(close)
            tagrow.appendChild(tag)

            // add tag to filters
            filters.push(tagtext)

            //should trigger re render
            this.filterArtists()

            input.value = ""
        }

    }

    render() {
        return (
            <div className="content">
               <Navbar>

               </Navbar>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input type="text" id="search" className="autocomplete" data={tags}
                                placeholder="Search Tags..." />
                        </div>

                    </div>
                    <div className="row">
                        <a className='dropdown-trigger btn white black-text' href='#' data-target='dropdown1'>
                            <i className="material-icons">sort</i><span>Sort By</span>
                        </a>

                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!">Price</a></li>
                            <li><a href="#!">Date</a></li>
                        </ul>

                    </div>
                    <div className="row" id="tagrow">

                        <div className="col s2 chip center">
                            Tag
                        </div>

                    </div>
                    {this.renderArtistGrid()}
                    {/* <div className="row" style={{ marginBottom: 0 }}>
                        <div className="col s6" style={{ paddingRight: 1, borderRightStyle: "solid", borderBottomStyle: "solid", borderWidth: "1px" }}>
                            <ArtistCard
                                {...this.props}
                                artist={artists["1"]}
                            />
                        </div>
                        <div className="col s6" style={{ paddingLeft: 1, borderLeftStyle: "solid", borderBottomStyle: "solid", borderWidth: "1px" }}>
                            <ArtistCard
                                {...this.props}
                                artist={artists["30"]}
                            />
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col s6 container" style={{ paddingRight: 1, borderRightStyle: "solid", borderTopStyle: "solid", borderWidth: "1px" }}>
                            <ArtistCard
                                {...this.props}
                                artist={artists["31"]}
                            />
                        </div>
                        <div className="col s6 container" style={{ paddingLeft: 1, borderLeftStyle: "solid", borderTopStyle: "solid", borderWidth: "1px" }}>
                            <ArtistCard
                                {...this.props}
                                artist={artists["33"]}
                            />
                        </div>
                    </div> */}

                </div>
            </div>


        );
    }
}

export default Home;