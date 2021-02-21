import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, Card, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagesAndCaption from '../utils/ImagesAndCaptions.js';
import { faExpand, faInfoCircle, faCompress, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Component for a single photo and Modal Array
 */
const houses = imagesAndCaption;
var index = 0;
class Photo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photoSrc: props.srcUrl ? props.srcUrl: '',
			photoCaption: props.caption ? props.caption: '',
			modalDisplay: null,
			isOpen: false
		};
		this.enlargeImage = this.enlargeImage.bind(this);
		this.collapseAll = this.collapseAll.bind(this);
		this.goPrevious = this.goPrevious.bind(this);
        this.goNext = this.goNext.bind(this);
		this.modalDisplay = this.modalDisplay.bind(this);
	}

	componentDidMount() {
		this.setState({
			photoSrc: this.props.srcUrl,
			photoCaption: this.props.caption,
			modalDisplay: null,
			isOpen: false
		});
	}

	componentDidUpdate(prevState, prevProps) {

	}

	collapseAll() {
		index = 0;
		this.enlargeImage(null, false);
	}

	enlargeImage(source, isOpen) {
		if(isOpen) {
			var imgSrc = null;
			var imgCap = null;
			if(houses.length > 0) {
				for(let i = index; i < houses.length; i++) {
					var eachHouse = houses[i];
					if(source) {
						if(source === eachHouse.src) {
							index = i;
							imgSrc = eachHouse.src;
							imgCap = eachHouse.caption;		
							break;				
						}
					} else {
						imgSrc = houses[index].src;
						imgCap = houses[index].caption;
						break;
					}
				}
			}
			this.modalDisplay(imgSrc, imgCap, isOpen);
		} else {
			this.modalDisplay(null, null, false);
		}

	}

	goPrevious() {
		if(index > 0) {
			index--;
			this.enlargeImage(null, true);
		}
    }

	goNext() {
		if(index < (houses.length - 1)) {
			index++;
			this.enlargeImage(null, true);
		}
	}

	modalDisplay(source, caption, isOpen) {
		var display = null;
		if(isOpen) {
			display = (
				<Modal isOpen={isOpen}>
					<ModalBody>
						<Card>
							<CardImg width="100%" src={source} alt={caption} />
							<CardImgOverlay>
								<div>
									<Button id="prevButton" className="goPrev" disabled={index === 0} color="secondary" onClick={this.goPrevious}><FontAwesomeIcon icon={faChevronLeft} /></Button>
									<Button id="nextButton" className="goNext" disabled={index === (houses.length - 1)} color="secondary" onClick={this.goNext}><FontAwesomeIcon icon={faChevronRight} /></Button>
								</div>							
								<CardText className="caption">
									<FontAwesomeIcon icon={faInfoCircle} /> {caption}
								</CardText>
								<Button id="minimize" className="captionButton" color="primary" onClick={this.collapseAll}><FontAwesomeIcon icon={faCompress} /></Button>
							</CardImgOverlay>
						</Card>
					</ModalBody>
				</Modal>
			);
		}
		this.setState({ modalDisplay: display });
	}

	render() {
		var modalImage = null;
		if(this.state.modalDisplay) {
			//Enlarged Image
			modalImage = this.state.modalDisplay;
		}

		var singleImage = (
			<Card inverse>
				<CardImg width="100%" src={this.state.photoSrc} alt={this.state.photoCaption} />
				<CardImgOverlay>
					<CardText className="caption">
						<FontAwesomeIcon icon={faInfoCircle} /> {this.state.photoCaption}
					</CardText>
					<Button id="maximize" className="captionButton" color="primary" onClick={() => this.enlargeImage(this.state.photoSrc, true)}><FontAwesomeIcon icon={faExpand} /></Button>
				</CardImgOverlay>
			</Card>
		);

		return (
			<div>
				{singleImage}
				{modalImage}
			</div>
		);
	}

}

Photo.propTypes = {
	caption: PropTypes.string,
	srcUrl: PropTypes.string.isRequired
};

export default Photo;