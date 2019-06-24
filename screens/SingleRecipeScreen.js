import * as WebBrowser from "expo-web-browser";
import React from "react";
import SingleRecipe from '../components/SingleRecipeComp'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";

import {
  Header,
  CheckBox,
  Card,
  ListItem,
  Button,
  Icon
} from "react-native-elements";

import { MonoText } from "../components/StyledText";
import { requireNativeViewManager } from "@unimodules/core";

export default class SingleRecipeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeToSend: this.props.navigation.getParam('recipe'),
      ingredientSearch: this.props.navigation.getParam('specialIngredient'),
      recipesFound: []
    };
  }
  componentDidMount() {
    // this.fetchRecipes();
    console.log("this.props",this.props.navigation.getParam('recipe'))
  }

  // fetchRecipes() {
  //   fetch("http://localhost:1337/api/recipes/" + this.state.ingredientSearch)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         recipesFound: response.recipes
  //       });
  //     });
  // }

  render() {
    const { navigate } = this.props.navigation.navigate;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            statusBarProps={{ barStyle: "light-content" }}
            barStyle="dark-content" // or directly
            centerComponent={{ text: "WANT NOT", style: { color: "#fff" } }}
            containerStyle={{
              backgroundColor: "#191970",
              justifyContent: "space-around"
            }}
          />
        </View>

        <View style={styles.body}>
        < SingleRecipe recipe={this.state.recipeToSend}/>
        </View>
        <View />

      </View>
    );
  }
}

SingleRecipeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold'
  },
  description: {
    color: 'grey'
  },
  user: {
    borderWidth: 3
  },
  card: {
    width: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f0fff0"
  },
  body: {
    alignItems: "center"
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    height: "50%"
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#f0fff0"
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 2
  },
  backgroundPic: {
    width: 380,
    height: 710,
    alignItems: "center",
    justifyContent: "center"
  },

  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  }
});
