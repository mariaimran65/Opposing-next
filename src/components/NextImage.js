import Image from 'next/image';

export default function NextImage({
  src,
  alt,
  layout,
  objectFit = 'contain',
  placeholder,
  blurDataURL,
  className,
  width,
  height,
  loading,
  priority,
  sizes
}) {
  return (
    <Image
      style={{ objectFit }}
      className={className}
      src={src}
      alt={alt}
      fill={layout === 'fill'}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      width={width}
      height={height}
      sizes={sizes}
      loading={loading}
      priority={priority && true}
      quality={100}
      draggable={false}
    />
  );
}
