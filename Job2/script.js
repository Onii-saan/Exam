function updateDateTime() {
    const now = new Date();

    console.log(now);

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById("Timeanddate").innerHTML =
        "Date: " + date + " Time: " + time;
}
