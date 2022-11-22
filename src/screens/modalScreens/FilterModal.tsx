import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import {useSelector } from 'react-redux';
const {height, width} = Dimensions.get('screen');
const FilterModal = ({callback, modalOpen, setModalOpen}: any) => {
    const {SearchData} = useSelector((store: any) => store.SearchReducer);
    console.log("=====>>",SearchData);
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={()=>{
            callback('sort_by_name')
            setModalOpen(!modalOpen)
        }}>
          <Text style={styles.textFont}>Sort By Name</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.touch} onPress={()=>{
            callback('sort_by_Low')
            setModalOpen(!modalOpen)
        }}>
          <Text style={styles.textFont}>Low To High Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={()=>{
            callback('sort_by_High')
            setModalOpen(!modalOpen)
        }}>
          <Text style={styles.textFont}>High to Low Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} >
          <Text style={styles.textFont}>Sort By Rating</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: width,
    height: height / 4.6,
    marginTop: 150,
    borderColor: 'black',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textFont: {
    fontSize: 26,
  },
  touch: {
    borderBottomWidth: 1,
    width: width,
    alignItems: 'center',
    height: 45,
  },
});
