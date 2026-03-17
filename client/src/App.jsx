// client/src/App.jsx
import { useEffect, useState } from 'react';
import { init } from '@telegram-apps/sdk-react';
import ImageUploader from './components/ImageUploader';
import ContextSelector from './components/ContextSelector';
import PromptBuilder from './components/PromptBuilder';
import ResultViewer from './components/ResultViewer';
import './App.css';

function App() {
  useEffect(() => {
    // Инициализируем Telegram SDK
    init();
  }, []);

  // Состояние приложения (пока просто локальное, потом можно вынести в контекст)
  const [selectedImage, setSelectedImage] = useState(null);
  const [contextType, setContextType] = useState('interior');
  const [customPrompt, setCustomPrompt] = useState('');
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!selectedImage) return alert('Загрузите фото товара!');
    
    setLoading(true);
    setResultImage(null);

    const formData = new FormData();
    formData.append('productImage', selectedImage);
    formData.append('contextType', contextType);
    formData.append('prompt', customPrompt);

    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      if (data.success) {
        setResultImage(data.imageUrl);
      } else {
        alert('Ошибка: ' + data.error);
      }
    } catch (err) {
      alert('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>E-com Visualizer 🛍️</h1>
      
      <ImageUploader onImageSelect={setSelectedImage} />
      
      <ContextSelector value={contextType} onChange={setContextType} />
      
      <PromptBuilder value={customPrompt} onChange={setCustomPrompt} />
      
      <button 
        className="generate-btn" 
        onClick={handleGenerate} 
        disabled={loading || !selectedImage}
      >
        {loading ? 'Генерируем...' : 'Создать визуализацию'}
      </button>

      {resultImage && <ResultViewer imageUrl={resultImage} />}
    </div>
  );
}

export default App;