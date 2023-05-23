import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlashCardsViewCon } from "../FlashCardsView/FlashCardsViewCon";
import { FlashCardsListCon } from "./FlashCardsListCon";
import StackParamList from "../../StackParamList";

export const FlashCardsListNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#79BC6E", // ヘッダーの背景色を指定
        },
        headerTintColor: "white", // ヘッダーのテキスト色を指定
      })}
    >
      <Stack.Screen
        name="FlashCardsList"
        component={FlashCardsListCon}
        options={{ title: "単語帳一覧" }}
      />
      <Stack.Screen
  name="FlashCardsView"
  component={FlashCardsViewCon}
  options={({ route }) => ({
    title: (route.params as StackParamList['FlashCardsView']).title || '',
  })}
/>

    </Stack.Navigator>
  );
};
