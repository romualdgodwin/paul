
const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

console.log("forms:", forms);
console.log("pwShowHide:", pwShowHide);
console.log("links:", links);

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        console.log("Click sur eyeIcon");

        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    
        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach(link => {
    link.addEventListener("click", e => {
        console.log("Click sur link");

        e.preventDefault(); // Prévenir la soumission du formulaire
        forms.classList.toggle("show-signup");
    });
});

console.log("Fin du script");

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".form.login form");
  
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const emailInput = document.querySelector(".form.login .input");
      const passwordInput = document.querySelector(".form.login .password");
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // La connexion est réussie, vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
          console.log("Connexion réussie !");
        } else {
          // La connexion a échoué, gérer les erreurs
          const responseData = await response.json();
          console.error("Erreur lors de la connexion:", responseData.message);
        }
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        // Gérer les erreurs si nécessaire
      }
    });
  });
  