import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert, ScrollView, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, H1 } from 'native-base';
import HTML from "react-native-render-html";

import { Text, View, SocialBlogBar } from '../components/Themed';
export default class BlogDetail extends React.Component<any, any> {
  render() {
    const { title, thumbnail_url, content, posted_at, comments_count } = this.props.route.params;

    return (
      <View style={styles.container}>
      <Container>
          <Content>
            <H1 style={{ flex: 1, alignSelf: 'center' }}>{title + '\n'}</H1>
            <View style={styles.separator_inblog}/>
            <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Image style={styles.iconData} source={{ uri: 'https://img.icons8.com/color/96/3498db/calendar.png' }} />
                <Text style={styles.time}>{posted_at}</Text>
                <Image style={styles.iconData} source={{ uri: 'https://img.icons8.com/color/48/000000/chat--v3.png' }} />
                <Text style={styles.time}>{comments_count}</Text>
                </Button>
              </Left>
              <Body>
              <Image source={{ uri: thumbnail_url }} style={styles.blog_img} />
              <View style={styles.separator_inblog}/>
                <HTML source={{ html: content }} />
              </Body>
        </Content>
        </Container>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  separator_inblog: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  container:{
    flex:1,
    marginTop:0,
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  blog_img: {
    width: 1000,
    height: 200,
    resizeMode: 'contain',
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  card:{
    marginVertical: 8
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
  },
  cardImage:{
    flex: 1,
    height: 150
  },
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