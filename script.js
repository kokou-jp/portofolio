
// affiche de la date de le footer 
const dateElement = document.getElementById('date');
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = currentDate.toLocaleDateString('fr-FR', options);
dateElement.innerHTML= 'aujourd\'hui, nous sommes le ' + dateElement.textContent;
dateElement.style.fontSize = '14px';
dateElement.style.textAlign = 'center';

//gestion du mode sombre
const button = document.getElementById('theme-btn');
    const body = document.body;

    // Vérifie si l'utilisateur a déjà un mode enregistré
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }

    button.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Sauvegarde le mode choisi dans le navigateur
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
     if (body.classList.contains('dark-mode')) {
        button.textContent = 'Mode sombre';
      } else {
        button.textContent = 'Mode clair';
      }
      