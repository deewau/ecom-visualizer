// client/src/components/ImageUploader.jsx
import React, { useRef, useState } from 'react';

const ImageUploader = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Передаем файл родителю (в App.jsx)
      onImageSelect(file);
      
      // Создаем URL для предпросмотра
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  return (
    <div className="component-card uploader">
      <h3>1. Загрузи товар</h3>
      <p className="hint">Фото на белом фоне работает лучше всего</p>
      
      {/* Блок предпросмотра: показывается, если есть previewUrl */}
      {previewUrl && (
        <div style={{ 
          marginBottom: '12px', 
          textAlign: 'center',
          overflow: 'hidden',
          borderRadius: '8px',
          border: '1px solid var(--border-color)'
        }}>
          <img 
            src={previewUrl} 
            alt="Preview" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '200px', 
              display: 'block',
              margin: '0 auto'
            }} 
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