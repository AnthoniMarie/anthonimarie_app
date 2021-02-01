import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert, ScrollView, FlatList, Button, ActivityIndicator, RefreshControl} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, SocialBlogBar } from '../components/Themed';

export default function TabBlogDetailsScreen({route, navigation }) {
  const { title, thumbnail_url } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.cardImage} source={{ uri: thumbnail_url }} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabContactScreen.tsx" /> */}
    </View>
  );
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