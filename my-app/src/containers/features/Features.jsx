import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Zupa',
    text: 'Informacje wkrótce.',
  },
  {
    title: 'Danie główne',
    text: 'Informacje wkrótce.',
  },
  {
    title: 'Deser',
    text: 'Informacje wkrótce.',
  },
  {
    title: 'Kolacja I',
    text: 'Informacje wkrótce.',
  },
  {
    title: 'Kolacja II',
    text: 'Informacje wkrótce.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Zapraszamy do skorzystania z wiejskiego stołu i słodkiego kącika</h1>
      <p>Inofrmacje o miejscu wkrótce.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
