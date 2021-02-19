import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';

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
			singleImage = (<Modal isOpen={this.state.isOpen}>
				<ModalBody><img src={this.state.photoSrc} alt={this.props.altText}><span>{this.state.photoCaption}</span></img></ModalBody></Modal>);
		} else {
			singleImage = (<img src={this.state.photoSrc} alt={this.props.altText}></img>);
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