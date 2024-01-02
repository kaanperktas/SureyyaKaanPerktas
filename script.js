document.addEventListener("DOMContentLoaded", function () {
    // Sosyal medya ikonlarına tıklanınca belirli URL'ye gitme
    document.querySelectorAll(".social-icons i").forEach(function (icon) {
        icon.addEventListener("click", function () {
            var socialMediaUrl = "";
    
            // Sosyal medya ikonuna tıklandığında ilgili URL'yi belirleme
            if (this.classList.contains("fa-github")) {
                socialMediaUrl = "https://github.com/kaanperktas";
            } else if (this.classList.contains("fa-medium")) {
                socialMediaUrl = "https://medium.com/@sureyyakaanperktas";
            } else if (this.classList.contains("fa-linkedin")) {
                socialMediaUrl = "https://www.linkedin.com/in/kaanperktas";
            }
    
            // Belirlenen URL'ye gitme
            window.location.href = socialMediaUrl;
        });
    });

    // Tüm CV indirme butonlarına tıklanınca CV'yi indirme
document.querySelectorAll(".cv-btn").forEach(function(button) {
    button.addEventListener("click", function () {
        window.location.href = "https://drive.google.com/file/d/1PShlTwUygL5NGv-gxhlspqd6GKYWZ7BN/view?usp=drivesdk"; // CV dosya bağlantısını ekleyin
    });
});


    // Benimle iletişime geçin butonuna tıklanınca iletişim bölümüne gitme
document.querySelector(".contact-btn").addEventListener("click", function () {
    // İletişim bölümünün en üstüne gitmek için scrollIntoView metodunu kullanın
    document.getElementById("İletişim").scrollIntoView({ behavior: 'smooth' });
});


    // Navbar bağlantılarına tıklanınca sayfayı ilgili bölüme götürme
    document.addEventListener("DOMContentLoaded", function () {
        // Navbar bağlantılarına tıklanınca sayfayı ilgili bölüme götürme
        document.querySelectorAll(".navbar .navlink").forEach(function (navlink) {
            navlink.addEventListener("click", function (event) {
                event.preventDefault();
                var targetId = this.getAttribute("href").substring(1); 
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    });

    // Mesaj gönder butonuna tıklanınca e-posta istemcisini açma
document.querySelector(".contact-btn").addEventListener("click", function () {
    var subject = "Konu"; // E-posta konusu
    var body = "Mesajınızı buraya yazabilirsiniz."; // E-posta gövdesi

    // E-posta linkini oluştur
    var mailtoLink = "mailto:sureyyakaanperktas@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Yeni bir sekme veya pencerede e-posta linkini aç
    window.open(mailtoLink, "_blank");
});

    
});
