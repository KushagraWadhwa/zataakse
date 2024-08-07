import {
  battery,
  biscuits,
  breakfast,
  cleaningCard,
  coffeeCard,
  hairCareCard,
  masalaCard,
  milkCard,
  munchies,
  noodles,
  subCategory,
} from '../../assets';

export const productCategories = [
  {
    id: 1,
    categoryName: 'Snacks & Drinks',
    subCategories: [
      {id: 1.1, icon: munchies, title: 'Munchies'},
      {id: 1.2, icon: subCategory, title: 'Sweets'},
      {id: 1.3, icon: biscuits, title: 'Biscuits'},
      {id: 1.4, icon: subCategory, title: 'Cold Drinks'},
      {id: 1.5, icon: noodles, title: 'Noodles, Pasta, Vermi'},
      {id: 1.6, icon: breakfast, title: 'Breakfast & Sauces'},
      {id: 1.7, icon: coffeeCard, title: 'Tea, Coffee & more'},
      {id: 1.8, icon: milkCard, title: 'Dairy, Bread & Eggs'},
    ],
  },
  {
    id: 2,
    categoryName: 'Beauty & Personal Care',
    subCategories: [
      {id: 2.1, icon: hairCareCard, title: 'Hair Care'},
      {id: 2.2, icon: cleaningCard, title: 'Cleaning Essentials'},
      {id: 2.3, icon: battery, title: 'Battery & Power'},
      {id: 2.4, icon: subCategory, title: 'Female Hygiene'},
      {id: 2.5, icon: subCategory, title: 'Baby Care'},
      {id: 2.6, icon: subCategory, title: 'Category X'},
      {id: 2.7, icon: subCategory, title: 'Category Y'},
      {id: 2.8, icon: masalaCard, title: 'Masala'},
    ],
  },
];

export const allCategories = [
  {
    id: 1.1,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/coffee.svg'),
    title: 'Munchies',
  },
  {
    id: 1.2,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/sweets.svg'),
    title: 'Sweets',
  },
  {
    id: 1.3,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/sweets.svg'),
    title: 'Biscuits',
  },
  {
    id: 1.4,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/coffee.svg'),
    title: 'Cold Drinks',
  },
  {
    id: 1.5,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/masala.svg'),
    title: 'Noodles, Pasta, Vermi',
  },
  {
    id: 1.6,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/sweets.svg'),
    title: 'Breakfast & Sauces',
  },
  {
    id: 1.7,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/coffee.svg'),
    title: 'Tea, Coffee & more',
  },
  {
    id: 1.8,
    categoryName: 'Snacks & Drinks',
    icon: require('../../assets/milk.svg'),
    title: 'Dairy, Bread & Eggs',
  },
  {
    id: 2.1,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/coffee.svg'),
    title: 'Hair Care',
  },
  {
    id: 2.2,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/milk.svg'),
    title: 'Cleaning Essentials',
  },
  {
    id: 2.3,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/sweets.svg'),
    title: 'Battery & Power',
  },
  {
    id: 2.4,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/masala.svg'),
    title: 'Female Hygiene',
  },
  {
    id: 2.5,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/milk.svg'),
    title: 'Baby Care',
  },
  {
    id: 2.6,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/sweets.svg'),
    title: 'Sweets',
  },
  {
    id: 2.7,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/masala.svg'),
    title: 'Masala, Dry Fruits & More',
  },
  {
    id: 2.8,
    categoryName: 'Beauty & Personal Care',
    icon: require('../../assets/milk.svg'),
    title: 'Category Z',
  },
];
