import React, { Component } from 'react';
import { StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class Blog extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      //data: []
      data: [
        { id: 1, title: "test1", time: "2018-08-01 12:15 pm", image: "https://anthonimarie-static-thumbs.s3.amazonaws.com/27/conversions/anthominiature-thumb.jpg", description: "desc1" },
        { id: 2, title: "test2", time: "2018-08-12 12:00 pm", image: "https://anthonimarie-static-thumbs.s3.amazonaws.com/23/conversions/dunouveauetpointsurmesserivces-thumb.jpg", description: "desc2" },
      ]
    };
  }

  componentDidMount() {
    this.getBlog();
  }

  getBlog = async () => {
    try {
      const response = await fetch("https://anthoni-marie.fr/dolcevita/posts/");
      if (response.ok) {
        const data = await response.json();
        this.setState({ blogList: data.results });
      } else { this.setState({ error: true }) }
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Blog</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabBlogScreen.tsx" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});