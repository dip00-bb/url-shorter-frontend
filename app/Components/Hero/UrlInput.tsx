"use client"

import { useState } from "react";
import Button from "../CommonButton/CommonButton";

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleGenerate = () => {
    if (url) {
      alert(`Generating short URL for: ${url}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your long URL here..."
          className="flex-1 px-4 py-3 rounded-md bg-transparent outline-none focus:ring-2 transition-all duration-200"
          style={{ 
            border: '2px solid var(--surface-border)',
            color: 'var(--primary)'
          }}

        />
        <Button onClick={handleGenerate}>Generate</Button>
      </div>
    </div>
  );
};

export default UrlInput