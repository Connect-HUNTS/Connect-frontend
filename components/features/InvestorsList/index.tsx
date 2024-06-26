import axios from "axios"

import ScrollContainer from "components/shared/ScrollContainer"

import Card from "components/entities/investor/Card"
import { InvestorType } from "types/InvestorType"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ"

const getInvestors = async (): Promise<InvestorType[]> => {
    try {
        const response = await axios.get(
            "http://104.207.130.38:3000/api-backend/users/investors?limit=10&offset=0&sortBy=name&sortOrder=asc",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )

        return response.data
    } catch (error) {
        throw error
    }
}

const Investors = async () => {
    const investors = await getInvestors()

    return (
        <ScrollContainer>
            {investors.map((investor: InvestorType) => (
                <Card investor={investor} key={investor.id} />
            ))}
        </ScrollContainer>
    )
}

export default Investors
