import { NextResponse } from "next/server";
import { getInstagramMedia } from "@/lib/instagram";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get("limit") || "12");

        const media = await getInstagramMedia(limit);

        return NextResponse.json({ media }, { status: 200 });
    } catch (error) {
        console.error("Instagram API route error:", error);
        return NextResponse.json(
            { error: "Failed to fetch Instagram media" },
            { status: 500 }
        );
    }
}
