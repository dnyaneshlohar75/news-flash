"use server";

const endpoint = process.env.BACKEND_URL;

export async function createUser({name, email, password}: {name?: string, email?: string, password?: string}) {

    try {
        const requestEndpoint = await fetch(`${endpoint}/users/signup`, {
            method: "POST",
            body: JSON.stringify({
                name, emailId: email, password
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })

        const response = await requestEndpoint.json();

        return response;

    } catch (error) {
        return (error as Error).message;
    }
}