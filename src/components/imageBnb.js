import React, { Component } from 'react';
import { ReactBnbGallery } from 'react-bnb-gallery';

const photos = [...];

export default class Example extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      galleryOpened: false
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return(
      <button onClick={this.toggleGallery}>
        Open gallery
      </button>
      <ReactBnbGallery
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery}
      />
    );
  }
}