import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, Card, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faInfoCircle, faCompress } from "@fortawesome/free-solid-svg-icons";

/**
 * Component for a single photo
 */

class Photo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photoSrc: props.srcUrl ? props.srcUrl: '',
			photoCaption: props.caption ? props.caption: '',
			isOpen: false 
		};
		this.enlargeImage = this.enlargeImage.bind(this);
		this.collapseAll = this.collapseAll.bind(this);
	}

	componentDidMount() {
		this.setState({
			photoSrc: this.props.srcUrl,
			photoCaption: this.props.caption,
			isOpen: this.props.open
		});
	}

	componentDidUpdate(prevState, prevProps) {

	}

	collapseAll() {
		this.setState({
			isOpen: false
		});
	}

	enlargeImage() {
		console.log("Enlarge Img");
		this.setState({
			isOpen: true
		});
	}

	render() {
		var singleImage = null;
		if(this.state.isOpen) {
			//Enlarged Image
			singleImage = (
				<Modal isOpen={this.state.isOpen}>
					<ModalBody>
						<Card>
							<CardImg width="100%" src={this.state.photoSrc} alt={this.props.altText} />
							<CardImgOverlay>
								<CardText className="caption">
									<FontAwesomeIcon icon={faInfoCircle} /> {this.state.photoCaption}
								</CardText>
								<Button className="captionButton" color="primary" onClick={this.collapseAll}><FontAwesomeIcon icon={faCompress} /></Button>
							</CardImgOverlay>
						</Card>
					</ModalBody>
				</Modal>
			);
		} else {
			//Collapsed Image
			singleImage = (
				<Card inverse>
					<CardImg width="100%" src={this.state.photoSrc} alt={this.props.altText} />
					<CardImgOverlay>
						<CardText className="caption">
							<FontAwesomeIcon icon={faInfoCircle} /> {this.state.photoCaption}
						</CardText>
						<Button className="captionButton" color="primary" onClick={this.enlargeImage}><FontAwesomeIcon icon={faExpand} /></Button>
					</CardImgOverlay>
				</Card>
			);
		}

		return (
			<div>{singleImage}</div>
		);
	}

}

Photo.propTypes = {
	isPreviousExist: PropTypes.bool.isRequired,
	isNextExist: PropTypes.bool.isRequired,
	open: PropTypes.bool.isRequired,
	caption: PropTypes.string,
	altText: PropTypes.string,
	srcUrl: PropTypes.string.isRequired
};

export default Photo;