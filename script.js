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
