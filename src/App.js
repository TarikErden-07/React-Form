import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    maas: '', // Yeni bir input ekledik
  });

  const [entries, setEntries] = useState([]); // Yeni bir state ekliyoruz

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini kullanarak yapmak istediğiniz işlemleri burada yapabilirsiniz.
    console.log('Form verileri gönderildi:', formData);

    // Yeni bir giriş oluşturup listeye ekliyoruz
    setEntries((prevEntries) => [...prevEntries, formData]);

    // Form verilerini sıfırlıyoruz
    setFormData({
      name: '',
      email: '',
      maas: '', // maas bilgisini de sıfırlıyoruz
    });
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>Çalışan Bilgileri</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ad:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="maas">Maaş:</label>
          <input
            type="number"
            id="maas"
            name="maas"
            value={formData.maas}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Gönder</button>
      </form>

      {/* Kaydedilen girişleri ekrana yazdır */}
      <div className='kayıt'>
        <h2>Kaydedilen Girişler:</h2>
        {entries.map((entry, index) => (
          <div key={index}>
            <p>Ad: {entry.name}</p>
            <p>E-posta: {entry.email}</p>
            <p>Maaş: {entry.maas}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
