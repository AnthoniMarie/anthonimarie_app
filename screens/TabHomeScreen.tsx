import * as React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import * as StoreReview from 'expo-store-review';
import { WebView } from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");
export default class Home extends React.Component<any, any> {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar />
        <Block flex center>
        <ImageBackground
            source={require('../assets/images/bg_home.jpg')} style={{ height, width, zIndex: 1 }}/>
        </Block>
        <Block center>
          <Image source={require('../assets/images/logo_anthonimarie_transparent.png')} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="white" size={60}>
                    Bienvenue !
                  </Text>
              </Block>
                <Block style={styles.subTitle}>
                  <Text color="white" size={16}>
                    Profitez de mon site web sur mobile :)
                  </Text>
                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  onPress={() => alert("bisous")}
                >
                Découvrir
                </Button>
                <Button
                style={styles.button_second}
                onPress={() => this.props.navigation.navigate('TabBlogScreen')}
                >
                  Voir mes derniers posts
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padded: {
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: '#e58711'
  },
  button_second: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: '#272622'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    zIndex: 2,
    position: 'relative',
    marginTop: '-55%'
  },
  title: {
    marginTop: '-5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});