import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info
} from './styles';

interface ItemProps {
  image: ImageSourcePropType
  title: string
}

import lol from '../../images/category_lol.jpg'
import csgo from '../../images/category_csgo.jpg'
import fallguys from '../../images/category_fallguys.jpg'
import fortnite from '../../images/category_fortnite.jpg'
import valorant from '../../images/category_valorant.jpg'
import apex from '../../images/category_apex.jpg'

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ image, title }) => (
    <CategoryContainer>
      <CategoryImage source={image} />
      <CategoryName numberOfLines={1}>{title}</CategoryName>

      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  )
  return (
    <List>
      <CategoryItem image={lol} title="League Of Legends" />
      <CategoryItem image={csgo} title="Counter-Strike? Global Offensive" />
      <CategoryItem image={fallguys} title="Fall Guys" />
      <CategoryItem image={fortnite} title="Fortnite" />
      <CategoryItem image={valorant} title="Valorant" />
      <CategoryItem image={apex} title="Apex Legends" />
    </List>
  );
};

export default CategoryList;
