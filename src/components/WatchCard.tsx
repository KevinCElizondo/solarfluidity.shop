import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WatchCardProps {
  title: string;
  imageUrl: string;
  description: string;
  features: string[];
  price: string;
  affiliateLink: string;
}

const WatchCard: React.FC<WatchCardProps> = ({
  title,
  imageUrl,
  description,
  features,
  price,
  affiliateLink
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-md shadow-xl rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-blue-500/5">
      <div className="relative h-64 bg-gradient-to-tr from-black to-blue-900">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain object-center p-6"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-blue-100 mb-4">{description}</p>
        
        <h3 className="text-lg font-semibold text-blue-300 mb-2">Características:</h3>
        <ul className="space-y-1 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-blue-100">
              <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-blue-300">Precio actual:</span>
            <div className="text-xl font-bold text-white">{price}</div>
            <div className="text-xs text-blue-300 mt-1">(puede variar)</div>
          </div>
          <Link
            href={affiliateLink}
            target="_blank" 
            rel="nofollow noopener"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
          >
            Comprar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
