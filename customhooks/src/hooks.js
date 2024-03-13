/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import useSWR from "swr";

const useFetchData = () => {
  const url = "https://sum-server.100xdevs.com/todos";
  const fetchData = async () => {
    const response = await axios.get(url);
    return response.data.todos;
  };

  const { isLoading, error, data } = useSWR(url, fetchData);

  return { isLoading, error, data };
};

export default { useFetchData };
