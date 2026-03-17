// client/src/components/ImageUploader.jsx
import React, { useRef, useState } from 'react';
import './ImageUploader.css'; // Подключаем отдельный файл стилей для этого компонента

const ImageUploader = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
      
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  return (
    <div className="component-card uploader">
      <h3>1. Загрузи товар</h3>
      <p className="hint">Фото на белом фоне работает лучше всего</p>
      
      {previewUrl && (
        <div className="preview-container">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="preview-image"
          />
        </div>
      )}

      <button onClick={() => fileInputRef.current.click()}>
        📷 {previewUrl ? 'Изменить фото' : 'Выбрать фото'}
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