import React from 'react';
import imagesAndCaption from '../utils/ImagesAndCaptions.js';
import Photo from './Photo.js';
import { CardGroup } from 'reactstrap';

const houses = imagesAndCaption;
class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var arrayOfPictures = [];
        if(houses.length > 0) {
            houses.forEach(function (eachHouse, i) {
                arrayOfPictures.push((<Photo key={i} caption={eachHouse.caption} srcUrl={eachHouse.src} />));
            });
        }

        var organizeImages = (
            <CardGroup>
                {arrayOfPictures}  
            </CardGroup>

        );

        return (
            <div id='arrayOfImages'>
                {organizeImages}
            </div>
        );
    }
}

export default PhotoGallery;