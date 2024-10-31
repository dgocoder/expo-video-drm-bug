import { useRouter } from "expo-router";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function HomeScreen() {
  const { navigate } = useRouter();

  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View style={styles.stepContainer}>
          <View style={styles.titleContainer}>
            <Button onPress={() => navigate("/video")} title="Watch Video" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
