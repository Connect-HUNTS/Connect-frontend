import axios from "axios";

export const fetchPartner = () => {
  return axios
    .get(
      "http://104.207.130.38:3000/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
