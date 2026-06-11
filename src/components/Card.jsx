import AssetImage from './AssetImage';

export default function Card({ image, alt, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <AssetImage src={image} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}