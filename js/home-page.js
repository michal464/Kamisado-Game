function showLogin() {
    document.querySelector('#registration-form').classList.add('hide');
    document.querySelector('#login-form').classList.remove('hide');
}
function showRegistr() {
    document.querySelector('#registration-form').classList.remove('hide');
    document.querySelector('#login-form').classList.add('hide');
}



let Name = null;
let phone = null;
let password = null;
let email = null;
let user = {
    Name: null,
    Phone: null,
    Password: null,
    Email: null,
    numOfPlayer: null
};
function initializeUserDataAndStore(event) {
    event.preventDefault();
    initializeUserData();
    user.Name = Name;
    user.Phone = phone;
    user.Password = password;
    user.Email = email;

    console.log(user); // כאן נוודא שהאובייקט מאותחל כראוי

    if (checkIfUserExists(email)) {
        alert('User already registered!');
        document.getElementById('registration-form').reset();
        return;
    }
    localStorage.setItem(email, JSON.stringify(user));
    sessionStorage.setItem(email, JSON.stringify(user));

    // הצגת ברכת שלום
    // let welcomeMessage = document.getElementById('welcome-message');
    // welcomeMessage.classList.remove('hidden');
    // welcomeMessage.classList.add('visible');
    alert('Hello, ' + Name + '!')


    assignPlayerRole(user);


    document.getElementById('registration-form').reset();
}

function checkIfUserExists(email) {
    return localStorage.getItem(email) !== null;
}




function initializeUserData() {
    Name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
}


function assignPlayerRole(user) {
    if (!sessionStorage.getItem('player1')) {
        user.numOfPlayer = 'player1';
        sessionStorage.setItem('player1', JSON.stringify(user));
        alert("You're the first player! whom do you want to play with!?");
    }
    else if (!sessionStorage.getItem('player2')) {
        user.numOfPlayer = 'player2';
        sessionStorage.setItem('player2', JSON.stringify(user));
        alert("You're the second player!");
    }
    if (sessionStorage.getItem('player1') && sessionStorage.getItem('player2')) {
        document.querySelector('#next-button').classList.remove('hide');
        document.querySelector('.form-container').classList.add('hide');
    }
}


let flag = true;
function loginUser(event) {
    event.preventDefault();
    flag = true;
    let loginEmail = document.getElementById('login-email').value;
    let loginPassword = document.getElementById('login-password').value;

    let storedUser = JSON.parse(localStorage.getItem(loginEmail));

    if (storedUser && storedUser.Password === loginPassword) {
        sessionStorage.setItem(loginEmail, JSON.stringify(storedUser));

        alert('Welcome back, ' + storedUser.Name + '!');

    } else {
        alert('Invalid email or password');
        flag = false;
    }
    if (flag)
        assignPlayerRole(user);
    let loginForm = document.getElementById('login-form-element');
    if (loginForm) {
        loginForm.reset();
    }
}
