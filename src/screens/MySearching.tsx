import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getActionSearching from '../redux/Searching/action';
import SearchTextInput from '../components/searchTextInput';
import Modal from 'react-native-modal';
import FilterModal from './modalScreens/FilterModal';
const {height, width} = Dimensions.get('screen');
const MySearching = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [searchtxt, setSearchtxt] = useState('');
  const dispatch = useDispatch<any>();
  const {SearchData} = useSelector((store: any) => store.SearchReducer);
  let filterData = SearchData?.filter((item: any) =>
    item?.title.toLowerCase().includes(searchtxt.toLowerCase()),
  );
  useEffect(() => {
    dispatch(getActionSearching());
  }, []);
  const _renderItem = ({item}: any) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={{uri: item?.image}} style={styles.renderImg} />
          <View>
            <Text numberOfLines={1} style={styles.titleStyle}>
              {item?.title}
            </Text>
            <Text style={styles.descStyle} numberOfLines={1}>
              {item?.description}
            </Text>
            <View style={styles.priceView}>
              <Text style={styles.priceColor}>${item.price}</Text>
              <View style={styles.ratingView}>
                <Text style={styles.ratetxt}>{item.rating.rate}</Text>
                <Image
                  style={styles.rateImg}
                  source={require('../assets/images/star.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const callbackFn = (filterType: string) => {
    if (filterType == 'sort_by_name'){
        filterData = SearchData?.sort((a: any, b: any) =>
          a.title.localeCompare(b.title),
        );
    }
    if(filterType=='sort_by_Low'){
        filterData=SearchData?.sort((a:any,b:any)=>a.price-b.price)
    }
    if(filterType=='sort_by_High'){
        filterData=SearchData?.sort((a:any,b:any)=>b.price-a.price)
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerView}>
        <SearchTextInput
          placeholder="Search Here"
          onChangeText={(text: any) => {
            setSearchtxt(text);
          }}
          icon={require('../assets/images/searchicon.png')}
        />
        <TouchableOpacity style={styles.filterView} onPress={toggleModal}>
          <Image
            style={styles.filtericon}
            source={require('../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>

      <Modal isVisible={modalOpen}>
        <FilterModal
          callback={callbackFn}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Modal>

      <FlatList
        data={filterData}
        renderItem={_renderItem}
        ListEmptyComponent={() => <Text>{'Empty'}</Text>}
      />
    </SafeAreaView>
  );
};

export default MySearching;

const styles = StyleSheet.create({
  renderImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: 'light-grey',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  titleStyle: {
    width: (width * 2) / 3,
    fontSize: 18,
    fontWeight: '600',
  },
  descStyle: {
    width: (width * 2) / 3,
    textAlign: 'justify',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerView: {
    flexDirection: 'row',
  },
  priceColor: {
    color: 'green',
    fontSize:18
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratetxt:{
   fontSize:18
  },
  rateImg: {
    height: 20,
    width: 25,
  },
  searchView: {
    marginHorizontal: 10,
    right: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterView: {
    marginTop: 10,
    marginLeft: 15,
  },
  filtericon: {
    height: 40,
    width: 30,
  },
});
