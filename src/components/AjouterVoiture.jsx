// AjouterVoiture.jsx
import React, { useState } from 'react';

const AjouterVoiture = ({ onAjouterVoiture }) => {
  const [id, setId] = useState('');
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [image, setImage] = useState(null); // Store image file
  const [preview, setPreview] = useState(''); // Preview URL for the image
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store the file
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouvelleVoiture = {
      id,
      Marque: marque,
      TypeCarburant: typeCarburant,
      PrixLocation: parseFloat(prixLocation),
      image: preview, // Use the preview URL temporarily
    };

    onAjouterVoiture(nouvelleVoiture);

    // Clear form fields
    setId('');
    setMarque('');
    setTypeCarburant('');
    setPrixLocation('');
    setImage(null);
    setPreview('');
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="container mt-4">
      <button 
        className="btn btn-success mb-3" 
        onClick={() => setShowForm(!showForm)} // Toggle form visibility
      >
        {showForm ? 'Masquer le Formulaire' : 'Ajouter une Voiture'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="border p-4 rounded bg-light shadow">
          <h3 className="mb-4">Ajouter une Nouvelle Voiture</h3>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Marque" 
              value={marque} 
              onChange={(e) => setMarque(e.target.value)} 
              required 
              className="form-control" 
            />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Type de Carburant" 
              value={typeCarburant} 
              onChange={(e) => setTypeCarburant(e.target.value)} 
              required 
              className="form-control" 
            />
          </div>
          <div className="mb-3">
            <input 
              type="number" 
              placeholder="Prix de Location" 
              value={prixLocation} 
              onChange={(e) => setPrixLocation(e.target.value)} 
              required 
              className="form-control" 
            />
          </div>
          <div className="mb-3">
            <input 
              type="file" 
              onChange={handleImageChange} 
              required 
              className="form-control" 
            />
          </div>

          {/* Preview Image */}
          {preview && <img src={preview} alt="Aperçu de l'image" width="100" className="mb-3" />}

          <button type="submit" className="btn btn-primary">Ajouter Voiture</button>
        </form>
      )}
    </div>
  );
};

export default AjouterVoiture;
