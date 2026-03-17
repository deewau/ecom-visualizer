// client/src/components/ImageUploader.jsx
import React, { useRef } from 'react';

const ImageUploader = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="component-card uploader">
      <h3>1. Загрузи товар</h3>
      <p className="hint">Фото на белом фоне работает лучше всего</p>
      <button onClick={() => fileInputRef.current.click()}>
        📷 Выбрать фото
      </button>
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploader;