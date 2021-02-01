import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert, ScrollView, FlatList, Button, ActivityIndicator, RefreshControl} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, SocialBlogBar } from '../components/Themed';
import Constants from 'expo-constants';

export default class Blog extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({ isLoaded: false });
    fetch('https://anthoni-marie.fr/dolcevita/posts/')
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
      .then(routines => {
        // console.log(routines);
        this.setState({data: routines.data, isLoaded:true});
      })
    .catch( error => {
        console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container} >
        { this.state.isLoaded ? <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Button onPress={() => this.refreshList()} title="Recharger" accessibilityLabel="Test" />
                <Image style={styles.cardImage} source={{ uri: item.thumbnail_url }} />
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{ uri: 'https://img.icons8.com/color/96/3498db/calendar.png' }} />
                      <Text style={styles.time}>{item.posted_at}</Text>
                    </View>
                  </View>
                </View>
                <SocialBlogBar style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios/72/visible--v1.png' }} />
                        <Text style={styles.socialBarLabel}>0</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios/72/speech-bubble-with-dots.png' }} />
                        <Text style={styles.socialBarLabel}>{item.comments_count}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </SocialBlogBar>
                {/* <Button onPress={() => Alert.alert("Bravo tu as (vu) l'article bg")} title="Voir l'article" accessibilityLabel="Test" /> */}
                <Button title="Voir l'article" onPress={() => { this.props.navigation.navigate('TabBlogDetailsScreen', {title: item.title, thumbnail_url: item.thumbnail_url, otherParam: 'anything you want here',});}}/>
              </View>
            )
          }} /> : <ActivityIndicator size="large" /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  card:{
    // shadowColor: '#00000021',
    // shadowOffset: {
    //   width: 2,
    //   height: 2
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
    marginVertical: 8
    // backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    //backgroundColor: "#EEEEEE",
    //backgroundColor:"orange",
  },
  cardImage:{
    flex: 1,
    height: 150
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});