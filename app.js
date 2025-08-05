// Gestione del menu a tendina delle impostazioni
function openSettingsMenu() {
    const menu = document.getElementById("settingsMenu");
    menu.classList.toggle("hidden");
}

// Salvataggio del profilo
function saveProfile() {
    const bio = document.getElementById("bio").value;
    const profilePic = document.getElementById("profilePicUpload").files[0];

    // Qui dovrai inviare i dati al server per salvarli nel database
    console.log("Salvando profilo con descrizione:", bio);
    console.log("Foto profilo:", profilePic);
}
