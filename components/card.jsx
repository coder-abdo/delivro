import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { urlFor } from "../sanity";
export const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  dished,
  description,
  lang,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white shadow-sm round-sm">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="p-2 flex gap-2">
        <Text className="font-bold text-lg  capitalize">{title}</Text>
        <View className="flex-row items-center">
          <AntDesign
            name="star"
            size={24}
            color="green"
            className="opacity-50"
          />
          <Text className="text-green-500 text-xs capitalize">{rating}. </Text>
          <Text className="text-gray-500 text-xs capitalize">{genre}</Text>
        </View>
        <View className="flex-row items-center">
          <EvilIcons
            name="location"
            size={24}
            color="black"
            className="opacity-50"
          />
          <Text className="text-xs text-gray-500 capitalize">
            near by {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
