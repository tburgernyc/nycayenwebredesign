// Instagram Graph API integration
// Requires environment variables:
// - INSTAGRAM_ACCESS_TOKEN
// - INSTAGRAM_USER_ID

export interface InstagramPost {
    id: string;
    caption?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url: string;
    permalink: string;
    timestamp: string;
    thumbnail_url?: string;
}

export interface InstagramProfile {
    id: string;
    username: string;
    media_count: number;
    followers_count?: number;
}

const INSTAGRAM_GRAPH_API = "https://graph.instagram.com";

/**
 * Fetch user's Instagram media
 */
export async function getInstagramMedia(limit: number = 12): Promise<InstagramPost[]> {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
        console.error("Instagram credentials not configured");
        return [];
    }

    try {
        const fields = "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url";
        const url = `${INSTAGRAM_GRAPH_API}/${userId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

        const response = await fetch(url, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`Instagram API error: ${response.status}`);
        }

        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error("Error fetching Instagram media:", error);
        return [];
    }
}

/**
 * Fetch user's Instagram profile info
 */
export async function getInstagramProfile(): Promise<InstagramProfile | null> {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
        console.error("Instagram credentials not configured");
        return null;
    }

    try {
        const fields = "id,username,media_count";
        const url = `${INSTAGRAM_GRAPH_API}/${userId}?fields=${fields}&access_token=${accessToken}`;

        const response = await fetch(url, {
            next: { revalidate: 86400 }, // Cache for 24 hours
        });

        if (!response.ok) {
            throw new Error(`Instagram API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching Instagram profile:", error);
        return null;
    }
}

/**
 * Refresh long-lived access token
 * Should be called periodically (before 60 days expiration)
 */
export async function refreshAccessToken(): Promise<string | null> {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
        return null;
    }

    try {
        const url = `${INSTAGRAM_GRAPH_API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Token refresh error: ${response.status}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error refreshing access token:", error);
        return null;
    }
}
