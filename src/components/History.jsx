import React from 'react';

function History() {
  // Replace this with localStorage or backend call
  const mockHistory = ['AI202', '6E111', 'SG101'];

  return (
    <div className="history">
      <h3>Past Searches</h3>
      <ul>
        {mockHistory.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
