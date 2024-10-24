"use server";

export async function getAllUserPosts(userId: string) {
    try {
        const endpoint = `${process.env.BACKEND_URL}/news/${userId}`;

        const request = await fetch(endpoint, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const response = await request.json();

        return response?.data?.posts;

    } catch (error) {
        console.log((error as Error).message);
    }
}