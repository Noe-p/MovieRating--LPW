import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { InputDate, InputSearch } from '.';

export const SearchFilter = (props) => {
  const [note, setNote] = useState('');
  const [titleSearch, setTitleSearch] = useState('');
  const [date, setDate] = useState('');
  const [openFilters, setOpenFilters] = useState(false);

  useEffect(() => {
    const m = [...props.movieList];
    props.movieList.forEach((movie) => {
      if (titleSearch !== '') {
        if (
          movie.title.toLowerCase().slice(0, titleSearch.length) !==
          titleSearch.toLowerCase()
        ) {
          delete m[movie.id];
        }
      }
      if (note !== null) {
        if (note > movie.note) delete m[movie.id];
      }
      if (date !== '') {
        if (date !== movie.date.slice(0, date.length)) delete m[movie.id];
      }
    });
    props.setCurrentMovieList(
      m.filter(function (val) {
        return val !== undefined;
      })
    );
  }, [titleSearch, note, props.movieList, date]);

  const toogleDisplayFilters = () => {
    return {
      display: openFilters ? 'flex' : 'none',
    };
  };

  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
      <InputSearch
        value={titleSearch}
        onChangeText={setTitleSearch}
        placeholder='Trouver un film'
      />
      <View style={[styles.dateAndRate, toogleDisplayFilters()]}>
        <View style={styles.select}>
          <Ionicons
            name='star'
            size={20}
            style={{ paddingLeft: 10 }}
            color={'black'}
          />
          <RNPickerSelect
            onValueChange={setNote}
            selectedValue={note}
            items={[
              { label: '0', value: '0' },
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
              { label: '7', value: '7' },
              { label: '8', value: '8' },
              { label: '9', value: '9' },
              { label: '10', value: '10' },
            ]}
            style={{
              inputIOS: {
                fontSize: 20,
                marginTop: 10,
                marginBottom: 10,
                textAlign: 'center',
                width: 50,
              },
              inputAndroid: {
                fontSize: 20,
                marginTop: 10,
                marginBottom: 10,
                textAlign: 'center',
                width: 50,
              },
            }}
            placeholder={{ label: 'Note' }}
          />
        </View>
        <View style={[styles.date, styles.select]}>
          <Ionicons
            name='calendar-outline'
            size={20}
            style={{ paddingLeft: 10 }}
            color={'black'}
          />
          <InputDate
            value={date}
            setDate={setDate}
            style={{
              fontSize: 20,
              textAlign: 'center',
              width: 180,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.containerMoreFilter}
        onPress={() => setOpenFilters(openFilters ? false : true)}
      >
        <Text style={styles.textMoreFilter}>
          {openFilters ? 'Moins de filtres' : 'Plus de filtres'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    marginTop: 5,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateAndRate: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  date: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
  },
  containerMoreFilter: {
    marginTop: 10,
  },
  textMoreFilter: {
    color: 'grey',
  },
});
