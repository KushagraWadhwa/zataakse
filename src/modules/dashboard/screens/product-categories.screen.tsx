import React from 'react';
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
import {productCategories} from '../../../core-constants/product-categories';

const ProductCategories = () => {
  return (
    <View style={Styles.mainView}>
      <HeaderBackButton />
      <View>
        {productCategories.map((item, index) => {
          return (
            <View key={index}>
              <View style={Styles.titleView}>
                <Text style={Styles.title}>
                  {item?.categoryName?.toLocaleUpperCase()}
                </Text>
                <View style={Styles.lineView} />
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}>
                <FlatList
                  numColumns={Math.ceil(item?.subCategories?.length / 2)}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={item?.subCategories}
                  directionalLockEnabled={true}
                  alwaysBounceVertical={false}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity style={Styles.cardView} key={index}>
                        <View style={Styles.cardShadow}>
                          <Image style={Styles.imageView} source={item?.icon} />
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
    </View>
  );
};

export default ProductCategories;
