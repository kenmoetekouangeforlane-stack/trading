function openGift(){
    document.getElementById("giftModal").style.display="flex";
  }
  
  function closeGift(){
    document.getElementById("giftModal").style.display="none";
  }
  
function handleReservation(){

const msg = document.getElementById("thankYouMessage");

// 1️⃣ Afficher le message de remerciement immédiatement
msg.classList.add("show");

// 2️⃣ Après 3 secondes, ouvrir WhatsApp
setTimeout(() => {
  window.open("https://chat.whatsapp.com/K6c0oEI9EOTDN6FrDdV7mF", "_blank");
}, 3000);

// 3️⃣ Télécharger le PDF après 4 secondes
setTimeout(() => {
  const link = document.createElement("a");
  link.href = "ebook-trading.docx";
  link.download = "Ebook-Trading-Exclusif.docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}, 4000);

// 4️⃣ Masquer le message après 7 secondes
setTimeout(() => {
  msg.classList.remove("show");
}, 7000);

}
