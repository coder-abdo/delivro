import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Categories } from "../components/categories";
import { FeaturedRow } from "../components/featuredRow";
import sanityCleint from "../sanity";
const Home = () => {
  const [featuredRows, setFeaturedRows] = React.useState([]);
  const fetchFeaturedRows = async () => {
    const res = await sanityCleint.fetch(
      `
      *[_type == 'featured']{
  ...,
    restaurants[]->{
      ...,
      dishes[]->{
        
      }
    }
}
      `
    );
    setFeaturedRows(res);
  };
  React.useEffect(() => {
    fetchFeaturedRows();
  }, []);
  return (
    <ScrollView>
      <View className="bg-gray-200 ">
        <Categories />
        {featuredRows.length > 0 ? (
          featuredRows.map(({ _id, description, name }) => (
            <FeaturedRow
              key={_id}
              id={_id}
              description={description}
              title={name}
            />
          ))
        ) : (
          <Text>loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};
export default Home;
