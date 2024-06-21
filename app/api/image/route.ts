import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

type Data = {
  error?: string;
};

export async function GET(req: NextRequest) {
    const url = new URL(req.url).searchParams.get("url")

    if (!url || typeof url !== "string") {
        return NextResponse.json(
            { error: "Invalid or missing URL parameter" },
            {
                status: 400,
            },
        )
    }

    try {
        const response = await axios.get(`https://connector.ai/${url}`, {
            responseType: "arraybuffer",
        })

        const contentType = response.headers["content-type"]
        if (!contentType || !contentType.startsWith("image/")) {
            return NextResponse.json(
                { error: "URL does not point to an image" },
                {
                    status: 400,
                },
            )
        }

        const imageBuffer = Buffer.from(response.data, "binary")

        return NextResponse.json(imageBuffer, {
            headers: {
                "Content-Type": contentType,
                "Content-Length": imageBuffer.length.toString(),
            },
            status: 200,
        })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            {
                status: 500,
            },
        )
    }
}
