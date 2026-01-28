const btnSalam = document.getElementById("btnSalam");
const btnTema = document.getElementById("btnTema");
const nama = document.getElementById("nama");

btnSalam.addEventListener("click", function () {
  alert("Halo! Terima kasih sudah mengunjungi web aku 😄");
  nama.textContent = "Mood Days 🚀";
});

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("light");
});
