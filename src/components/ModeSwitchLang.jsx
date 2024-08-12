import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ModeSwitchLang() {
  const [language, setLanguage] = useState('en'); // Varsayılan dil
  const [message, setMessage] = useState(null); // Mesaj durumu

  useEffect(() => {
    // Dil değiştiğinde API'den veri çekme
    axios.get('https://reqres.in/api/workintech/${language}')
      .then(response => {
        const data = response.data;
        const currentMessage = data.find(msg => msg.language === language);
        setMessage(currentMessage); // Veriyi duruma kaydet
      })
      .catch(error => {
        console.error("Veri çekilirken bir hata oluştu:", error.message);
      });
  }, [language]); // Dil değiştiğinde tekrar çalışır

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'tr' : 'en'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleLanguage}>
          {language === 'en' ? 'TÜRKÇE’YE GEÇ' : 'Switch to English'}
        </button>
      </header>
      <main>
        {message ? (
          <div>
            <h2>{message.title}</h2>
            <p>{message.description}</p>
          </div>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </main>
    </div>
  );
}

export default ModeSwitchLang;
