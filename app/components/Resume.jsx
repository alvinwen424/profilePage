import React, { Component } from 'react';

import { Document, Page } from 'react-pdf'
import resume from '../../public/AlvinWen_Resume.pdf'

class Resume extends Component {
    constructor(){
        super()
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }
 
  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }
 
  render() {
      const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Document
          file="resume"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
export default Resume;
