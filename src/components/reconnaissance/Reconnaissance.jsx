import React, { useState, useEffect, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const Reconnaissance = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  

  // Charger le modèle MobileNet
  const predictImage = async () => {
    if (!imageRef.current) return;
    setLoading(true);
    const model = await mobilenet.load();
    const predictions = await model.classify(imageRef.current);
    setPredictions(predictions);
    setLoading(false);

    // Synthèse vocale des prédictions
    const results = predictions
      .map((prediction) => `${prediction.className}, avec une précision de ${(prediction.probability * 100).toFixed(2)}%`)
      .join('. ');
    // 
  };

  // Gestion du chargement d'une image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image) {
      predictImage();
    }
  }, [image]);
  

  return (
    <section id="reconnaissance" className="min-h-screen bg-gradient-to-r from-white via-slate-300  to-slate-700 flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full transform transition duration-700 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-10 animate-pulse tracking-wide">
          Reconnaissance d'Image
        </h1>

        <div className="mb-8">
          <label className="block mb-4 text-xl font-semibold text-gray-700">
            Téléchargez une image :
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="block w-full text-gray-800 text-center px-6 py-4 border-4 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white transition-transform duration-500 ease-in-out transform hover:scale-110 hover:bg-gray-100 focus:outline-none"
          />
        </div>

        {image && (
          <div className="mb-6 relative">
            <img
              src={image}
              alt="Uploaded"
              ref={imageRef}
              className="max-w-full h-auto rounded-xl border-4 border-gray-300 shadow-lg transition duration-500 ease-in-out transform hover:rotate-2 hover:scale-105"
            />
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center mt-6 space-x-3">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="text-2xl font-semibold text-white">Analyse en cours...</p>
          </div>
        )}

        {!loading && predictions.length > 0 && (
          <div className="bg-gray-50 shadow-xl rounded-3xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Résultats des prédictions :</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {predictions.map((prediction, index) => (
                <li key={index} className="text-lg font-medium">
                  {prediction.className} - Précision :{' '}
                  <span className="text-green-600 font-semibold">
                    {(prediction.probability * 100).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reconnaissance;
