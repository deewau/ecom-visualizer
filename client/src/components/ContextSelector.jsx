// client/src/components/ContextSelector.jsx
import React from 'react';

const contexts = [
  { id: 'interior', label: '🏠 Интерьер', desc: 'Мебель, декор в комнате' },
  { id: 'model', label: '👗 Модель', desc: 'Одежда на человеке' },
  { id: 'outdoor', label: '🌳 Улица', desc: 'Товар на природе' },
  { id: 'studio', label: '🎬 Студия', desc: 'Профессиональный свет' },
];

const ContextSelector = ({ value, onChange }) => {
  return (
    <div className="component-card selector">
      <h3>2. Выбери контекст</h3>
      <div className="options-grid">
        {contexts.map((ctx) => (
          <div 
            key={ctx.id}
            className={`option-card ${value === ctx.id ? 'active' : ''}`}
            onClick={() => onChange(ctx.id)}
          >
            <div className="icon">{ctx.label.split(' ')[0]}</div>
            <div className="label">{ctx.label.split(' ').slice(1).join(' ')}</div>
            <div className="desc">{ctx.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContextSelector;