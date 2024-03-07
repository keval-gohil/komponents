'use client'
import React, { Component } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

class Background extends Component {
  constructor(props) {
    super(props);
    this.blobRefs = [];
  }

  componentDidMount() {
    this.initBlobs();
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  updateBlob(blob) {
    blob.x += blob.vx;
    blob.y += blob.vy;

    if (blob.x >= window.innerWidth - blob.size) {
      blob.x = window.innerWidth - blob.size;
      blob.vx *= -1;
    }
    if (blob.y >= window.innerHeight - blob.size) {
      blob.y = window.innerHeight - blob.size;
      blob.vy *= -1;
    }
    if (blob.x <= 0) {
      blob.x = 0;
      blob.vx *= -1;
    }
    if (blob.y <= 0) {
      blob.y = 0;
      blob.vy *= -1;
    }

    blob.el.style.transform = `translate(${blob.x - blob.initialX}px, ${blob.y - blob.initialY}px)`;
  }

  initBlobs() {
    const blobEls = document.querySelectorAll('.bouncing-blob');
    const blobs = Array.from(blobEls).map((blobEl) => {
      const boundingRect = blobEl.getBoundingClientRect();
      const size = boundingRect.width;
      const initialX = this.randomNumber(0, window.innerWidth - size);
      const initialY = this.randomNumber(0, window.innerHeight - size);
      const vx = this.randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      const vy = this.randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      const x = initialX;
      const y = initialY;
      return { el: blobEl, size, initialX, initialY, vx, vy, x, y };
    });

    const update = () => {
      requestAnimationFrame(update);
      blobs.forEach((blob) => this.updateBlob(blob));
    };

    requestAnimationFrame(update);
  }

  render() {
    return (
      <div className="bouncing-blobs-container">
        <div className="bouncing-blobs-glass"></div>
        <div className="bouncing-blobs">
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--blue"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--blue"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--blue"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--white"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--purple"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--purple"></div>
          <div ref={(ref) => this.blobRefs.push(ref)} className="bouncing-blob bouncing-blob--pink"></div>
        </div>
      </div>
    );
  }
}

export default Background;
