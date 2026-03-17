// client/src/components/ImageUploader.jsx
import React, { useRef, useState } from 'react';
import './ImageUploader.css';

const ImageUploader = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageSelect(file);
      
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="component-card uploader">
      <h3>1. Загрузи товар</h3>
      <p className="hint">Фото на белом фоне работает лучше всего</p>
      
      {previewUrl && (
        <>
          <div className="preview-container" onClick={openModal}>
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="preview-image"
            />
            {/* Иконка лупы для подсказки, что можно нажать */}
            <div className="zoom-icon">🔍</div>
          </div>

          {/* Модальное окно (показывается только если isModalOpen === true) */}
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={previewUrl} alt="Full Preview" className="modal-image" />
                <button className="close-btn" onClick={closeModal}>Закрыть</button>
              </div>
            </div>
          )}
        </>
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