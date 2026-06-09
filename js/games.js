document.addEventListener('DOMContentLoaded', function () {

    let player1 = JSON.parse(sessionStorage.getItem('player1'));
    let player2 = JSON.parse(sessionStorage.getItem('player2'));

    console.log(player1);
    console.log(player2);

    document.getElementById('player1-name').textContent = player1.Name;
    document.getElementById('player2-name').textContent = player2.Name;
});

document.getElementById("logout-btn").addEventListener("click", function () {
    let playerToDelete = prompt("Which player would you like to sign out? (player1 or player2)");

    if (playerToDelete === "player1" || playerToDelete === "player2") {
        let storedPlayer = JSON.parse(sessionStorage.getItem(playerToDelete));

        if (storedPlayer) {
            let email = storedPlayer.Email;
            sessionStorage.removeItem(playerToDelete);
            sessionStorage.removeItem(email);
            if (email) {
                localStorage.removeItem(email);
                alert(`${playerToDelete} and the associated user with email ${email} have been deleted!`);
            } else {
                alert("No valid email found for this player.");
            }
        } else {
            alert("Player data not found.");
        }
        window.location.href = "home-page.html";  
    } else {
        alert("Invalid player selected. Please choose either 'player1' or 'player2'.");
    }
});
