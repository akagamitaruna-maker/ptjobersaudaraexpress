const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

document.getElementById("quoteForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const nama=form.querySelector('input[placeholder*="Nama Anda"]').value.trim();
  const wa=form.querySelector('input[type="tel"]').value.trim();
  const rute=form.querySelector('input[placeholder*="Jakarta"]').value.trim();
  const jenis=form.querySelector("select").value;
  const detail=form.querySelector("textarea").value.trim();

  const pesan=`Halo PT Jo Bersaudara Express,

Saya ingin meminta informasi/penawaran pengiriman.

Nama / Perusahaan: ${nama}
WhatsApp: ${wa}
Rute Pengiriman: ${rute}
Jenis Cargo: ${jenis}
Detail Kebutuhan: ${detail || "-"}

Mohon informasinya. Terima kasih.`;

  const tujuan="6281319476439";
  const url=`https://wa.me/${tujuan}?text=${encodeURIComponent(pesan)}`;
  window.open(url,"_blank");

  const msg=document.getElementById("formMsg");
  if(msg) msg.textContent="Membuka WhatsApp Manager Marketing...";
});
