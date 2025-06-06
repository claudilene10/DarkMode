function darkMode() {
    const body = document.body;
    const button = document.querySelector("button");
  
    body.classList.toggle("dark");
  
    const isDark = body.classList.contains("dark");
    button.textContent = isDark ? "🌞 Modo Claro" : "🌙 Modo Escuro";
  }