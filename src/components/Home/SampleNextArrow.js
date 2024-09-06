import { useState } from 'react';
import right from '../../../public/assets/tl.png';
import NextImage from '../NextImage';

function SampleNextArrow(props) {
  const { style, onClick, width } = props;
  const [color, setColor] = useState('#ffff');

  return (
    <div
      role="presentation"
      onMouseEnter={() => setColor('rgba(112, 60, 193, 0.08)')}
      onMouseLeave={() => setColor('#ffff')}
      style={{
        ...style,
        cursor: 'pointer',
        position: 'absolute',
        top: '100%',
        border: '1px solid #56289F',
        borderRadius: '50%',
        width: width > 1200 ? '60px' : '40px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: color,
        alignItems: 'center',
        height: width > 1200 ? '60px' : '40px',
        right: '51vw',
        marginTop: '10px'
      }}
      onClick={onClick}
    >
      <NextImage
        src={right}
        width={16}
        height={16}
        alt="A grey arrow pointing to the left"
      />
    </div>
  );
}

export default SampleNextArrow;
