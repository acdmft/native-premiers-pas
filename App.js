import { StyleSheet, View, Text, ScrollView, Image, Pressable, Button, Alert, ActivityIndicator } from "react-native";
// import { ActivityIndicator } from "react-native-web";

export default function App() {
  const handlePressBtn = () => {
    alert("You just pressed");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={(styles.text, styles.first_text)}>hello</Text>
        <Text style={(styles.text, styles.second_text)}>hello 2</Text>
        <Text style={(styles.text, styles.third_text)}>hello 3</Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
        }}
      />
      <Image
        style={styles.img}
        source={require("./images/konexio-logo_1.png")}
      />
      <Pressable >
        <Button onPress={handlePressBtn} title={"Press me"} /> 
        <ActivityIndicator size="large" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  inner_container: {
    backgroundColor: "white",
  },
  text: {
    marginBottom: 80,
    marginTop: 80,
  },
  first_text: {
    fontSize: 30,
  },
  second_text: {
    textAlign: "center",
  },
  third_text: {
    color: "grey",
  },
  img: {
    height: "50px",
    width: "200px",
    margin: 5,
    backgroundColor: "white",
  },
  btn: {
    fontSize: 24,
    color: "yellow",
    fontStyle: "bold",
    flex: 1,
    width: 70,
    border: "1px solid yellow", 
    padding: 2,
  }
});
