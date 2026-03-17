// client/src/components/ResultViewer.jsx
import React from 'react';

const ResultViewer = ({ imageUrl }) => {
  return (
    <div className="component-card result">
      <h3>✨ Результат</h3>
      <img src={imageUrl} alt="Generated Result" className="result-image" />
      <a href={imageUrl} download="ecom-visual.jpg" target="_blank" rel="noreferrer">
        <button className="download-btn">Скачать</button>
      </a>
    </div>
  );
};

export default ResultViewer;