import { useEffect, useState } from 'react';
import { getCatImages } from '../../../utils/api';
import Buttons from '../../atoms/buttons/Buttons';

interface CatGalleryProps {
  limit?: number;
}

const CatGallery = ({ limit = 5 }: CatGalleryProps) => {
  const [catImages, setCatImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const images = await getCatImages(limit);
        setCatImages(images);
      } catch (error) {
        console.error('Erro ao obter imagens de gatos:', error);
      }
    };

    fetchCatImages();
  }, [limit]);

  return (
    <div>
      <Buttons onClick={() => console.log('Button clicked')} label="Click me" />
      {catImages.map((image, index) => (
        <img key={index} src={image} alt={`Cat ${index + 1}`} style={{ maxWidth: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default CatGallery;
