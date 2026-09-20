function openLogin() {
    window.location.href = "login.html";
}

function openRegister() {
    window.location.href = "login.html";
}


// LOGIN
function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    // Demo login
    if (email === "student@gmail.com" && password === "1234") {

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password.");

    }
}


// REGISTER
function register() {
    alert("Registration feature will be added later.");
}


// DOCUMENT UPLOAD
function uploadDocument() {

    const file =
        document.getElementById("documentFile").files[0];

    const category =
        document.getElementById("documentCategory").value;

    if (!file) {
        alert("Please select a document.");
        return;
    }

    if (!category) {
        alert("Please select a category.");
        return;
    }

    alert(file.name + " uploaded successfully!");
}


// SEARCH DOCUMENTS
function searchDocuments() {

    const search =
        document.getElementById("search").value.toLowerCase();

    const documents =
        document.querySelectorAll(".document");

    documents.forEach(function(document) {

        const text =
            document.textContent.toLowerCase();

        if (text.includes(search)) {
            document.style.display = "flex";
        } else {
            document.style.display = "none";
        }

    });
}


// LOGOUT
function logout() {
    window.location.href = "index.html";
}