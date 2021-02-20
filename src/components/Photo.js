import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

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
	}

	componentDidMount() {
		this.setState({
			photoSrc: this.props.srcUrl,
			photoCaption: this.props.caption,
			isOpen: this.props.open
		});
	}

	render() {
		var singleImage = null;
		if(this.state.isOpen) {
			//Enlarged Image
			singleImage = (
				<Modal isOpen={this.state.isOpen}>
					<ModalBody>
						<Card inverse>
							<CardImg width="100%" src={this.state.photoSrc} alt={this.props.altText} />
							<CardImgOverlay>
								<CardText>
									<small className="text-muted">{this.state.photoCaption}</small>
								</CardText>
							</CardImgOverlay>
						</Card>
					</ModalBody>
				</Modal>
			);
		} else {
			//Collapsed Image
			singleImage = (
				<div>
					<Card inverse>
						<CardImg width="100%" src={this.state.photoSrc} alt={this.props.altText} />
						<CardImgOverlay>
							<CardText>
								<small className="text-muted">{this.state.photoCaption}</small>
							</CardText>
						</CardImgOverlay>
					</Card>
			  </div>
			);
		}

		return (
			<div>{singleImage}</div>
		);
	}

}

Photo.propTypes = {
	isPrevious: PropTypes.bool.isRequired,
	isNextExist: PropTypes.bool.isRequired,
	open: PropTypes.bool.isRequired,
	caption: PropTypes.string,
	altText: PropTypes.string
};

export default Photo;