import axios from "axios";
import ScrollContainer from "../../shared/ScrollContainer";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getPartners = async (): Promise<any[]> => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Investors = async () => {
  const investors = await getPartners();

  return (
    <ScrollContainer>
      {investors.map((investor: any) => (
        <p key={investor.id}>{investor.id}</p>
      ))}
      {investors.map((investor: any) => (
        <p key={investor.id}>{investor.id}</p>
      ))}
      {investors.map((investor: any) => (
        <p key={investor.id}>{investor.id}</p>
      ))}
      {investors.map((investor: any) => (
        <p key={investor.id}>{investor.id}</p>
      ))}
    </ScrollContainer>
  );
};

export default Investors;
