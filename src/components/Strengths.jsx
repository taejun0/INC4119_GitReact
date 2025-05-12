import React from 'react';

const Strengths = ({ strengths }) => {
  return (
    <div className="strengths">
      <h3>나의 강점</h3>
      <ul>
        {strengths.map((item, idx) => (
          <li key={idx}>💡 {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Strengths;
