import { FC } from "react";
import { Button, Text } from "react-native";
import Core from "../components/native/Core";

const HomeScreen: FC = ({ navigation }: any) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Core />
      <Button
        title="Go to Button Screen"
        onPress={() => navigation.navigate("Button")}
      />
    </>
  );
};

export default HomeScreen;
