import React, { Component } from 'react';

class FileUpload extends Component {
  handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" onChange={this.handleFileUpload} />
      </div>
    );
  }
}

export default FileUpload;
