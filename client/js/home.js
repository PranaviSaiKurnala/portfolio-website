async function loadProfile() {
    try {
        const profile = await getProfile();

        document.getElementById("name").textContent =
            profile.name;

        document.getElementById("bio").textContent =
            profile.bio;

    } catch (error) {
        console.error("Error loading profile:", error);
    }
}

loadProfile();