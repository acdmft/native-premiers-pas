import { StyleSheet, View, Text } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.text, styles.first_text}>hello</Text>
        <Text style={styles.text, styles.second_text}>hello 2</Text>
        <Text style={styles.text, styles.third_text}>hello 3</Text>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    border: "1px solid red",
    flex: 1,
  }, 
  inner_container: {
    backgroundColor: "white",
    border: "1px solid blue" ,
  },
  text: {
    marginBottom: 80,
    marginTop: 80,
    border: "1px solid green",
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
});