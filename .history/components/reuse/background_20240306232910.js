'use client'
import React, { useEffect } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

class Blob {
  constructor(el) {
    this.el = el;
    this.size = 50; // Initial size set to 50 (you can adjust this as needed)
    this.updateBoundingBox();
    this.initialX = randomNumber(0, this.boundingBox.width - this.size);
    this.initialY = randomNumber(0, this.boundingBox.height - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  updateBoundingBox() {
    this.boundingBox = this.el.parentElement.getBoundingClientRect();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 || this.x >= this.boundingBox.width - this.size) {
      this.vx *= -1;
    }
    if (this.y <= 0 || this.y >= this.boundingBox.height - this.size) {
      this.vy *= -1;
    }

    this.x = Math.max(0, Math.min(this.boundingBox.width - this.size, this.x));
    this.y = Math.max(0, Math.min(this.boundingBox.height - this.size, this.y));
  }

  move() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

function Background() {
  useEffect(() => {
    const blobEls = document.querySelectorAll('.bouncing-blob');
    const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

    function update() {
      blobs.forEach((blob) => {
        blob.update();
        blob.move();
      });

      requestAnimationFrame(update);
    }

    update();

    // Update blob bounding boxes on window resize
    window.addEventListener('resize', () => {
      blobs.forEach((blob) => blob.updateBoundingBox());
    });

    return () => window.removeEventListener('resize', () => {});
  }, []);

  return (
    <div className="bouncing-blobs-container">
      <div className="bouncing-blobs-glass"></div>
      <div className="bouncing-blobs">
        <div className="bouncing-blob bouncing-blob--blue"></div>
        <div className="bouncing-blob bouncing-blob--blue"></div>
        <div className="bouncing-blob bouncing-blob--blue"></div>
        <div className="bouncing-blob bouncing-blob--white"></div>
        <div className="bouncing-blob bouncing-blob--purple"></div>
        <div className="bouncing-blob bouncing-blob--purple"></div>
        <div className="bouncing-blob bouncing-blob--pink"></div>
      </div>
    </div>
  );
}

export default Background;
