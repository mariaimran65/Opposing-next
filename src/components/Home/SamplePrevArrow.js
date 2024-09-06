import { useState } from 'react';
import right from '../../../public/assets/tr.png';
import NextImage from '../NextImage';

function SamplePrevArrow(props) {
  const { style, onClick, width } = props;
  const [color, setColor] = useState('#ffff');

  return (
    <div
      role="presentation"
      onMouseEnter={() => setColor('rgba(112, 60, 193, 0.08)')}
      onMouseLeave={() => setColor('#ffff')}
      className="bg-[secondaryColor]"
      style={{
        ...style,
        cursor: 'pointer',
        position: 'absolute',
        border: '1px solid #56289F',
        borderRadius: '50%',
        width: width > 1200 ? '60px' : '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: width > 1200 ? '60px' : '40px',
        top: '100%',
        left: '51vw',
        backgroundColor: color,
        marginTop: '10px'
      }}
      onClick={onClick}
    >
      <NextImage src={right} alt="A purple arrow pointing to the right" />
    </div>
  );
}

export default SamplePrevArrow;
