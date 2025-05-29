import React, { useState } from 'react';
import styles from '../styles/Progress.module.css';

export default function Progress() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.progressContainer}>
      <h1>Development Progress</h1>
      <ul className={styles.progressList}>
        <li> Rulebook draft complete</li>
        <li> Card balancing underway</li>
        <li> Prototype board creation</li>
      </ul>

      <h2>Screenshots</h2>  
      <div className={styles.screenshotGallery}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/dev/dex-cards.png`} 
          alt="Dextrous Project" 
          onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/images/dev/dex-cards.png`)}
        />
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </div>
  );
}