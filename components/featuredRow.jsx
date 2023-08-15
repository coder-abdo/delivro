import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RestaurantCard } from "./card";
import sanityClient from "../sanity";
export const FeaturedRow = ({ id, title, description, featuredCategories }) => {
  const [restaurants, setRestaurants] = useState([]);
  const fetchRestaurants = async (id) => {
    const res = await sanityClient.fetch(
      `
        *[_type == 'featured']{
          ...,
          restaurant[]->{
            ...,
            dishes[]->{
              name
            }
          }
        }[0] 
    `,
      { id }
    );
    setRestaurants(res.restaurant);
  };
  useEffect(() => {
    fetchRestaurants(id);
  }, [id]);
  return (
    <View>
      <View className="flex-row justify-between px-4 items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#0cb" />
      </View>
      <Text className="text-sm text-gray-500 pl-4 mb-2">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 8,
        }}
      >
        {restaurants.length > 0 ? (
          restaurants.map(
            ({
              _id,
              address,
              description,
              name,
              rating,
              dish,
              image,
              lat,
              long,
            }) => (
              <RestaurantCard
                id={_id}
                key={_id}
                address={address}
                imgUrl={image}
                description={description}
                rating={rating}
                title={name}
                dished={dish}
                long={long}
                lat={lat}
                genre={"egyptian"}
              />
            )
          )
        ) : (
          <Text>loading!!!</Text>
        )}
      </ScrollView>
    </View>
  );
};
