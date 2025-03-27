document.addEventListener("DOMContentLoaded", function() {
    function formatDate() {
        const today = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[today.getDay()];
        const date = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = today.getFullYear();

        document.getElementById("dateDisplay").textContent = `${day} | ${date}/${month}/${year}`;
    }

    formatDate(); // Call the function to update the date
});

function submitAttendance() {
    const selectedRolls = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
        selectedRolls.push(checkbox.value);
    });

    if (selectedRolls.length === 0) {
        alert("No students selected!");
        return;
    }

    // Show count of selected students
    alert(`Selected Students: ${selectedRolls.length}`);

    // Copy roll numbers to clipboard
    navigator.clipboard.writeText(selectedRolls.join(", ")).then(() => {
        alert("Roll numbers copied to clipboard!");
    });

    // Send to Discord Webhook
    fetch("https://discord.com/api/webhooks/1354895906641678447/d5Hw0usD2b6CDfavBrbNg3TCdn8DFdfcoXquVwqJx2kcmQAIEhyVUUOAze3gJ2dkGvdi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: selectedRolls.join(", ") })
    }).then(response => {
        if (response.ok) alert("Attendance sent to Discord!");
        else alert("Failed to send attendance.");
    }).catch(error => console.error("Error:", error));
}
