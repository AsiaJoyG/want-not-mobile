import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
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

export default class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeToMake: this.props.recipe,
      // ingredientSearch: this.props.ingredient,
      recipeToDisplay: [],
      recipesFound: []
    };
  }
  componentDidMount() {
    this.fetchRecipes();
    console.log('this is the recipetomake:', this.state.recipeToMake)
  }

  fetchRecipes() {
    fetch("http://localhost:1337/api/recipes/index/" + this.state.recipeToMake)
      .then(response => response.json())
      .then(response => {
        console.log("this is the res",response)
        this.setState({
          recipeToDisplay: [response]
        });
      });
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
       <Card title="Let's Make:">
  {
    this.state.recipeToDisplay.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          {/* <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          /> */}
          <Text style={styles.name}>{u.name}</Text>
          <Text style={styles.name}>{u.description}</Text>
        </View>
      );
    })
  }
</Card>
<Text>........................................................................</Text>
      </View>
    );
  }
}
SingleRecipe.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold"
  },
  description: {
    color: "grey"
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
  }
})
