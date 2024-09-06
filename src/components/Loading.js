import logoLoading from '../../public/assets/favicon.png';
import NextImage from './NextImage';

export default function Loading({ height, width }) {
  return (
    <div
      style={{
        height: height || '100vh',
        width: width || '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="loaderImage">
        <NextImage
          alt="logo"
          src={logoLoading.src}
          height={40}
          width={73}
          priority
        />
      </div>
      <div className="loaderInnerCircle" />
      <div className="loaderOuterCircle" />
    </div>
  );
}
