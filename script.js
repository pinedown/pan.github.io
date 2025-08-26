function init() {
  // Smoke animation
  const smokeEl = document.getElementById("smoke");
  const patterns = [
    "o . o . o . o . o .",
    ". o . o . o . o . o",
  ];
  let index = 0;
  setInterval(() => {
    smokeEl.textContent = patterns[index];
    index = (index + 1) % patterns.length; 
  }, 900);

  // Blog age
  const created = new Date("2025-07-19");
  const now = new Date();
  const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
  document.getElementById("blog-age").textContent = `${diffDays} days old`;

  // Favorite UM
  const favoriteUmPhrases = [
    "like: 🍙 🍙 🍙",
    "like: broken links",
    "habit: slamming revolving doors",
    "favorite place: seven deadly inns",
    "favorite place: lonely bus stops",
    "favorite place: empty forum thread",
    "favorite place: draft folder",
    "favorite place: abandoned chatroom",
    "favorite place: loading screen",
    "favorite place: collapsed FAQ section",
    "habit: eating homeworks",
    "habit: random acts of silence"
  ];
  const randomIndex = Math.floor(Math.random() * favoriteUmPhrases.length);
  document.getElementById("favorite-um").textContent = favoriteUmPhrases[randomIndex];

  // About UM placeholder
  document.getElementById("about-um").textContent = "exploring the internet dog world";
}
