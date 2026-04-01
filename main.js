const btnPesan = document.querySelector(".banner-btn");

btnPesan.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Promo aktif! Ongkir gratis untuk pesanan pertama Anda.");
});

const judulBanner = document.querySelector(".promo-banner");

judulBanner.innerText = "🎉 Promo Spesial Hari Ini!";

const cards = document.querySelectorAll(".restaurant-card");

let total = 0;
for (let i = 1; i <= cards.length; i++) {
  total++;
}

console.log("Jumlah restoran: " + total);

const kategori = document.querySelectorAll(".category-item");
kategori.forEach((category) => {
  category.addEventListener("click", () => {
    kategori.forEach((item) => {
      item.classList.remove("active");
    });
    category.classList.add("active");
  });
});

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  cards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(keyword)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

const namaInput = document.getElementById("nama-reviewer");
const ulasanInput = document.getElementById("isi-ulasan");
const tombolKirim = document.getElementById("btn-kirim-ulasan");
const pesan = document.getElementById("pesan-ulasan");

tombolKirim.addEventListener("click", () => {
  const nama = namaInput.value.trim();
  const ulasan = ulasanInput.value.trim();

  if (nama === "") {
    pesan.textContent = "Nama tidak boleh kosong!";
    pesan.style.color = "#ef4444";
    return;
  }

  if (ulasan.length < 10) {
    pesan.textContent = "Ulasan terlalu singkat. Minimal 10 karakter.";
    pesan.style.color = "#22c55e";
    return;
  }

  pesan.textContent = "Terima kasih, ${nama}! Ulasanmu telah dikirim.";
  pesan.style.color = "#22c55e";

  namaInput.value = "";
  ulasanInput.value = "";
});
