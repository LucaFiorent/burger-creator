import axios from "axios";

const getIngredients = async (token) => {
  const url = "https://react-interview.xm.com/ingredients";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    return err;
  }
};

const databaseService = {
  getIngredients, // place for other db calls
};

export default databaseService;
