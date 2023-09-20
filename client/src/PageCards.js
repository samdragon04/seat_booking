import React from 'react';
import './PageCards.css';

const pages = [
  { title: '本社・設計室' },
  { title: 'テクニカム' }, 
  { title: '木津川' },
  { title: '出張' },
  { title: '在宅' },
  { title: ['休暇', '休暇 AM', '休暇 PM'] },  
];

function PageCards() {
  return (
    <div className="page-cards">
      {pages.map((page, index) => (
        <div key={index} className="page-card">
          {Array.isArray(page.title) ? page.title.map((title, i) => (
            <div key={i} className="half-card">
              <h2>{title}</h2>
            </div>
          )) : (
            <h2>{page.title}</h2>
          )}
        </div>
      ))}
    </div>
  );
}

export default PageCards;