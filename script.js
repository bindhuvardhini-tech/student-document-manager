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

    const fileInput = document.getElementById("documentFile");
    const category = document.getElementById("documentCategory").value;
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a document.");
        return;
    }

    if (!category) {
        alert("Please select a category.");
        return;
    }

    const documentDiv = document.createElement("div");
    documentDiv.className = "document";

    documentDiv.innerHTML = `
        <span>📄 ${file.name} - ${category}</span>
        <button onclick="downloadDocument('${file.name}')">
            Download
        </button>
    `;

    document.getElementById("documentList").appendChild(documentDiv);

    alert(file.name + " uploaded successfully!");

    fileInput.value = "";
    document.getElementById("documentCategory").value = "";
}


// DOWNLOAD
function downloadDocument(fileName) {
    alert("Download requested for: " + fileName);
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