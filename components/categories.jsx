import { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { Category } from "./category";
import sanityClient, { urlFor } from "../sanity";
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await sanityClient.fetch(`
        *[_type == 'category']
        `);
    setCategories(res);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <Category
            key={category._id}
            title={category.name}
            url={urlFor(category.image).url()}
          />
        ))
      ) : (
        <Text>loading!!!</Text>
      )}
    </ScrollView>
  );
};
