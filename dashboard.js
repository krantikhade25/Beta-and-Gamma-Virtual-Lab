// ================= PAGE REDIRECTION =================

function goToPage(page){

    window.location.href = page;
}

// ================= LOGOUT FUNCTION =================

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {

    alert("Logout Successful!");

    window.location.href = "index.html";
});