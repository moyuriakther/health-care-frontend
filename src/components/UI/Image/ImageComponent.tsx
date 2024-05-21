import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const ImageComponent = ({ src, alt, height, width }: ImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default ImageComponent;
