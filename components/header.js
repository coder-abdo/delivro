import { Image, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export const Header = () => {
  return (
    <>
      <View className="pt-10 pb-3 pl-4 flex-row space-x-2 items-center bg-white">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 p-4 rounded-full bg-gray-400"
        />
        <View>
          <Text className="capitalize text-gray-400 text-sm font-bold">
            deliver now!
          </Text>
          <Text className="capitalize font-bold text-2xl">
            current location
          </Text>
        </View>
        <AntDesign
          name="down"
          size={24}
          color={"#0cb"}
          style={{ alignSelf: "flex-end" }}
        />
        <View className="flex self-end gap-3">
          <FontAwesome name="user-o" size={32} color="#0cb" />
        </View>
      </View>
      <View className="flex-row items-center pb-3 space-x-2">
        <View className="flex-row space-x-2 bg-gray-200 flex-1 pl-3 py-4">
          <AntDesign name="search1" size={24} color="gray" />
          <TextInput
            placeholder="Restraunts and Cuisines"
            keyboardType="default"
          />
        </View>
        <AntDesign name="ellipsis1" size={24} color="#0cb" />
      </View>
    </>
  );
};
