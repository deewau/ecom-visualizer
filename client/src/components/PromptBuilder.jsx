// client/src/components/PromptBuilder.jsx
import React from 'react';

const PromptBuilder = ({ value, onChange }) => {
  return (
    <div className="component-card prompt">
      <h3>3. Детали (необязательно)</h3>
      <textarea
        placeholder="Например: современный стиль, мягкий свет, дерево..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="3"
      />
    </div>
  );
};

export default PromptBuilder;