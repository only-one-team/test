import React, { useState, useEffect } from 'react';

function Subsr() {
  const [imageStyle, setImageStyle] = useState({
    backgroundColor: 'E9ECEF',
    width: 'auto',
    display: 'flex', // Flexbox를 사용하여 가운데 정렬
    justifyContent: 'center', // 수평 가운데 정렬
    alignItems: 'center', // 수직 가운데 정렬
  });

  const imageSize = {
    width: '70%',
    height: 'auto',
  };

  return (
    <div style={imageStyle}>
      <img src="images/64154000.png" alt="BigCo Inc. logo" style={imageSize} />
    </div>
  );
}

export default Subsr;
