import { useEffect, useState } from "react";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--tqdjfphdjc9k.code.run/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <CharactersCard data={data} />
    </div>
  );
};

export default Home;
