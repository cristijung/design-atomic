import { useEffect, useState } from 'react';
import { getCatImages } from '../../../utils/api';
import Buttons from '../../atoms/buttons/Buttons';
import styles from './CatsGallery.module.scss';

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

  //button é somente um exemplo de como passar as props, não está 
  //estilizado, nem funcional para este componente - só está importado
  return (
    <div> 
      <div className={styles.texto}>Este é a importação do componente átomo botão no arquivo</div>     
      <br/>
      <Buttons onClick={() => console.log('Button clicked')} label="Clicar" />
      <hr/>
      {catImages.map((image, index) => (
        <img key={index} src={image} alt={`Cat ${index + 1}`} style={{ maxWidth: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default CatGallery;
