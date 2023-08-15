import { Image, Text, View } from "react-native";

export const Category = ({ url, title }) => {
  return (
    <View>
      <Image source={{ uri: url }} className="w-20 h-20 rounded-sm mr-4" />

      <Text className="text-[#0cb] font-bold capitaliz">{title}</Text>
    </View>
  );
};
