import { useEffect, useState } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--tqdjfphdjc9k.code.run/comics"
        );
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
      <ComicsCard data={data} />
    </div>
  );
};

export default Comics;
