import React, {useState} from 'react';
import {Styles} from '../styles/product-categories.styles';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderBackButton from '../../../core-components/atoms/headerBackButton/HeaderBackButton.component';
import {
  allCategories,
  productCategories,
} from '../../../core-constants/product-categories';
import {productDetails} from '../../../core-constants/product-details';
import ItemList from '../../../core-components/atoms/itemList/ItemList.component';
import {LocalSvg} from 'react-native-svg/css';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface ProductCategoriesProps {
  navigation?: NavigationProp<ParamListBase>;
}

const ProductCategories = (props: ProductCategoriesProps) => {
  const [listData, setListData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [active, setActive] = useState(0);
  const [title, setTitle] = useState('Product Categories');
  return (
    <View style={Styles.mainView}>
      <HeaderBackButton
        title={listData?.length > 0 ? title : 'Product Categories'}
        onPressSearch={() => {
          props?.navigation?.navigate('search');
        }}
      />
      <View>
        {listData?.length <= 0 &&
          productCategories.map((itemProduct, index) => {
            return (
              <View key={index}>
                <View style={Styles.titleView}>
                  <Text style={Styles.title}>
                    {itemProduct?.categoryName?.toLocaleUpperCase()}
                  </Text>
                  <View style={Styles.lineView} />
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  directionalLockEnabled={true}
                  alwaysBounceVertical={false}>
                  <FlatList
                    numColumns={Math.ceil(
                      itemProduct?.subCategories?.length / 2,
                    )}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={itemProduct?.subCategories}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setTitle(itemProduct?.categoryName);
                            let filterListData = productDetails.filter(
                              itemListData =>
                                itemListData?.category === item?.title,
                            );
                            setSelectedItem(item?.title);
                            setListData(filterListData[0]?.listOfItems ?? []);
                          }}
                          style={Styles.cardView}
                          key={index}>
                          <View style={Styles.cardShadow}>
                            <Image
                              style={Styles.imageView}
                              source={item?.icon}
                            />
                          </View>
                          <Text style={Styles.cardText}>{item?.title}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </ScrollView>
              </View>
            );
          })}
      </View>
      {listData?.length > 0 && (
        <View>
          <ScrollView
            onScroll={event => {
              const slide = Math.ceil(
                event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width,
              );
              if (slide > 0) {
                setActive(slide);
              } else {
                setActive(0);
              }
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            <FlatList
              numColumns={Math.ceil(allCategories?.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={allCategories}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (item?.title === selectedItem) {
                        setTitle('Product Categories');
                        setListData([]);
                        setSelectedItem('');
                      } else {
                        let filterListData = productDetails.filter(
                          itemListData =>
                            itemListData?.category === item?.title,
                        );
                        setSelectedItem(item?.title);
                        setTitle(item?.categoryName);
                        setListData(filterListData[0]?.listOfItems ?? []);
                      }
                    }}
                    style={Styles.cardView}
                    key={index}>
                    {item?.title === selectedItem ? (
                      <>
                        <View style={Styles.cardShadow}>
                          <Text style={Styles.viewCard}>{'View All'}</Text>
                        </View>
                      </>
                    ) : (
                      <>
                        <View style={Styles.cardShadow}>
                          <LocalSvg
                            width={64}
                            height={64}
                            style={Styles.imageView}
                            asset={item?.icon}
                          />
                        </View>
                        <Text style={Styles.cardText}>{item?.title}</Text>
                      </>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      )}
      {listData?.length > 0 && (
        <ScrollView
          style={{alignContent: 'center', alignSelf: 'center', marginTop: 10}}
          horizontal>
          {allCategories.map((item, index) => {
            if (
              index < allCategories.length / 8 &&
              allCategories.length / 8 > 1
            ) {
              return (
                <View key={index} style={{paddingHorizontal: 2}}>
                  <LocalSvg
                    asset={
                      index === active
                        ? require('../../../../assets/yellowDot.svg')
                        : require('../../../../assets/grayDot.svg')
                    }
                  />
                </View>
              );
            }
          })}
        </ScrollView>
      )}
      {listData?.length > 0 ? <ItemList itemListData={listData} /> : null}
    </View>
  );
};

export default ProductCategories;
