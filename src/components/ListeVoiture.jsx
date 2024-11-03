// ListeVoitures.jsx
import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
  const [voitures, setVoitures] = useState([
    { id: 'v1', Marque: 'Dacia Logan', TypeCarburant: 'Diesel', PrixLocation: 250, image: '/images/1.jpg' },
    { id: 'v2', Marque: 'Peugeot 208', TypeCarburant: 'Essence', PrixLocation: 400, image: '/images/2.jpg' },
    { id: 'v3', Marque: 'Peugeot 308', TypeCarburant: 'Diesel', PrixLocation: 600, image: '/images/3.jpg' },
    { id: 'v4', Marque: 'Mercedes G class', TypeCarburant: 'Essence', PrixLocation: 400, image: '/images/4.jpg' },
    { id: 'v5', Marque: 'Jeep', TypeCarburant: 'Diesel', PrixLocation: 1000, image: '/images/5.jpg' },
    { id: 'v6', Marque: 'Audi', TypeCarburant: 'Essence', PrixLocation: 900, image: '/images/6.jpg' },
  ]);

  const ajouterVoiture = (nouvelleVoiture) => {
    setVoitures([...voitures, nouvelleVoiture]);
  };

  const supprimerVoiture = (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      setVoitures(voitures.filter((voiture) => voiture.id !== id));
    }
  };

  return (
    <div className="container my-4">
      
      <AjouterVoiture onAjouterVoiture={ajouterVoiture} />
      <h2 className="text-center mb-4">Liste des Voitures de Location</h2>
      <table className="table table-striped table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Marque</th>
            <th scope="col">Type Carburant</th>
            <th scope="col">Prix de Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture) => (
            <Voiture key={voiture.id} voiture={voiture} onSupprimer={supprimerVoiture} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeVoitures;
