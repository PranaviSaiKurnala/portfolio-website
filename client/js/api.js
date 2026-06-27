const API_URL = "http://localhost:5000/api";

async function getProfile() {
    const response = await fetch(`${API_URL}/profile`);
    return await response.json();
}

async function getProjects() {
    const response = await fetch(`${API_URL}/projects`);
    return await response.json();
}

async function getSkills() {
    const response = await fetch(`${API_URL}/skills`);
    return await response.json();
}

async function sendContact(data) {
    const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}