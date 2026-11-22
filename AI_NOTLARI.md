# Proje Ödevi -DnD Oyununu Hakkında WEB Sitesi


## Dosyalar
- İMG Klasörü
- AI_NOTLARI.md
- etkinlikler.html
- hakkimizda.html
- index.html
- style.css
- README.md
- TEST_NOTLARI.md
- script.js

## KULLANILAN PROMPTLAR
> Dungeons and Dragons oyunu hakkında 18-30 yaş aralığındaki kişiler için üç sayfalık bir site tasarlıyorum. Beş içerik başlığım şunlar:
1. D&D Nedir?
2. Irklar ve Sınıflar
3. Biz Kimiz? (Topluluk Hikâyesi)
4. Oyun Kurallarımız ve Vizyonumuz
5. Yaklaşan Oyunlar ve Maceraya Katıl
HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl
kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma.”

- Bu prompt ile hazırlamış olduğum web sitesi için temel bir fikir ile mimari yapısı hakkında bilgi edindim.

> Dungeons & Dragons tanıtım kulübü için modern, koyu temalı (koyu antrasit arka plan, altın sarısı ve koyu kırmızı vurgular) bir web sitesi yapıyorum.Sadece `index.html` ve ayrı bir `style.css` dosyalarında işlem yap. Navbar'da şu 5 ana başlık linki yer alsın: Ana Sayfa (`index.html`), Sınıflar (`index.html#siniflar`), Hakkımızda (`hakkimizda.html`), Kurallarımız (`hakkimizda.html#kurallar`) ve Etkinlikler (`etkinlikler.html`). `index.html` içinde etkileyici bir Hero bölümü, 'D&D Nedir?' başlıklı 3 sütunlu bilgi kartları (Rol Yapma, d20 Sistemi, Dungeon Master) ve `#siniflar` id'sine sahip 4 popüler D&D sınıfını (Savaşçı, Büyücü, Hırsız, Rahip) tanıtan responsive kartlar yer alsın. Kodlar temiz, yorum satırlı ve semantik HTML5 yapısında olsun.

- Burada ise edinmiş olduğum bilgilerin üzerine web sitesi için ana sayfa ve kendine ait bir tasarım oluşturarak projeye ilk adımı atmış oldum.

> Web sitesini çalıştırabilmem için README.md dosyasının içerisine kullanabilecceğim bir port linki oluşturur musun bu sayede terminalde bu komutu çalıştırdığım zaman web sitesini web üzerinde görebileyim.

- Bu ksıımda ise web sitesini tarayıcı üzerinden çalıştırabilmek için port oluşturdum.

> Oluşturduğun `style.css` ve Navbar/Footer iskeletini birebir kullanarak `hakkimizda.html` sayfasını içinde iki ana bölüm olsun: Birincisi topluluğumuzun amacını ve yeni başlayanlara D&D'yi sevdirme hikâyesini anlatan 'Biz Kimiz?' bölümü; ikincisi ise `#kurallar` id'sine sahip, masa kurallarımızı ve vizyonumuzu 4 maddelik şık kutular halinde sunan 'Oyun Kurallarımız ve Vizyonumuz' bölümü.

- Buradaysa web sitesinin diğer kısımları olan hakkımızda kısmı içerisinde olacak şekilde bilgi ve birkaç yazı ile kısımlar ekledim.

> Aynı `style.css` ve Navbar/Footer yapısını koruyarak `etkinlikler.html` sayfasının içerisine sayfada yaklaşan 6 D&D etkinliğini (örneğin: Yeni Başlayanlar İçin Tanışma Gecesi, Tek Gecelik Macera: Kayıp Maden, Zar Boyama ve Karakter Yaratım Atölyesi vb.) tarih ve kontenjan bilgisiyle gösteren etkinlik kartları olsun. Altında ise kullanıcıların Ad Soyad, Deneyim Seviyesi (Yeni Başlayan / Tecrübeli) ve Oynamak İstediği Sınıfı seçebileceği, gönder butonuna basıldığında ekranda şık bir 'Maceraya kaydınız alındı!' bildirimi gösteren basit JavaScript destekli script.js dosyasının içerisinde kodları bulunan bir kayıt formu yer alsın.

- Buradaki prompt ile de etkinlikler kısmına giriş yaparaktan birkaç tane card yapısı ile kayıt olma kısmını ekledim.

> Projeye script.js isimli dosya üzerinden etkinlik başlıklarını filtreleyen
bir arama özelliği oluşturulacak.
Arama özelliği özellikle şu başlıklar dikkate alınaraktan oluşturulacak;
• Kullanıcı yazdıkça eşleşen etkinlik kartları gösterilmelidir.
• Büyük/küçük harf farkı ile baştaki ve sondaki boşluklar sonucu etkilememelidir.
• Görünen etkinlik sayısı yazılmalı; eşleşme yoksa açıklayıcı mesaj gösterilmelidir.
• “Temizle” düğmesi aramayı sıfırlamalı ve tüm etkinlikleri göstermelidir.
• Arama alanının açıklayıcı bir label öğesi bulunmalıdır. Site, dar ekranda yatay taşma olmadan
kullanılabilmelidir.
Bu değişiklikler eklenirken projenin sahip olduğu tasarım vb gibi şeylere dikkate alınaraktan uygun bir biçimde olacak.

- Bu kısımda ise de etkinlikler sayfasında kullanılması için filtreleme özelliğine sahip bir arama çubuğu ekledim. Böylece kullanıcılar istedikleri kısımları rahat bir şekilde bulabilecekler.

> Projeyi son olaraktan tüm cihazlara uyumlu olacak bir şekilde (responsive) olduğunu kontrol edip eğer bir sıkıntı olacak durum varsa da responsive e uyacak bir biçime getirir misin? Başka hiçbir kısma dokunma.

- Son olarakta projeyi tüm cihazlara uygun olacak bir biçimde çalışmasını sağlamış oldum.