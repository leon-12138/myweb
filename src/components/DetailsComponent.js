import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';

// import pic1 from '../assets/1.jpg';
// import pic2 from '../assets/2.jpg';


// const images = [
//     pic1,
//     pic2,
//     '//placekitten.com/800/1200',
//     '//placekitten.com/1500/1500',
// ];

// const captions = [ "caption one", "caption two", "caption three", "last caption"]


class Details extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
    
    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
            <button type="button"  className="btn btn-dark mt-2" onClick={() => this.setState({ isOpen: true })}>
                View More
            </button>

            {isOpen && (
                <Lightbox
                mainSrc={this.props.images[photoIndex]}
                nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
                prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + 1) % this.props.images.length,
                    })
                }
                imageCaption={this.props.captions[photoIndex]}
                />
            )}
            </div>
        );
    }
}

export default Details;
