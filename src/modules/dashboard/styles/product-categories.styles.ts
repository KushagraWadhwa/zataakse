import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {backgroundColor: 'white', flex: 1},
  searchShadow: {
    paddingVertical: 13,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  titleView: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 10,
  },
  title: {
    lineHeight: 14.44,
    fontSize: 9.63,
    color: colors.black,
  },
  lineView: {
    backgroundColor: colors.gray,
    height: 1,
    width: 230,
    alignSelf: 'center',
    marginLeft: 10,
  },
  cardView: {
    marginHorizontal: (Dimensions.get('screen').width - 4 * 84) / 8,
    marginTop: 20,
  },
  cardShadow: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  imageView: {width: 64, height: 64},
  cardText: {
    color: colors.black,
    width: 80,
    textAlign: 'center',
    marginLeft: 3,
    marginTop: 10,
  },
  viewCard: {
    color: colors.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: 64,
    paddingVertical: 23,
  },
  viewCardShadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});
