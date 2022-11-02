# NOTES

## CMD

- echo %cd% bulunduğun klasörü görmek
- dir klasörde bulunan dosya ve klasörleri görmek
- mkdir klasör oluşturmak makedirectory
- cd "klasör ismi" klasöre girmek
- cd .. önceki klasöre dönmek

## MultiCursor

- ctrl+d aynı ifadeleri seçebilmemizi ve tek seferde değiştirmemizi sağlar
- alt+LMB multicursor için
- shift+alt+LMB çoklu multicursor kullanmak için

## Keyboard shortcuts

- alt+aşağı/yukarı ile yapıyı istediğimiz yere taşıyabiliriz
- shift+aşağı ile yapıyı aşağıya kopyalayabiliriz
- ctrl+L yapıyı seçer
- ctrl+enter alt satır
- ctrl+p menüden projedeki dosyaları açmak için
- ctrl+ö açıklama satırı

## Snippets

- Çok tekrar eden yerlerde snippet oluşturmak

## GIT-SCM/Source code management

* Versiyon kontrol sistemi
* Takımların aynı proje ortamında çalışmasını kolaylaştırır
* Kim düzenledi, ne değişti, ve ne zaman değiştiği bilgilerini tutar
* Herhangi bir dosyaya ve versiyona her zaman dönüş yapılabilir
* Yerel ve uzak bilgisayarlarda çalışır
* İstenilen çalışma anında projenin ve dosyaların snapshot özelliği ile o anki halini alabiliriz(commit)
* Her zaman snapshotları inceleyebilir veya geri dönüş yapılabilir
* Hangi dosyaların snapshot aldıktan sonra değiştiğini görebiliriz
* Projende versiyonlanmamasını istediğini dosyaları, dosya tiplerini(*.log,*.mp4) veya klasörleri belirtebiliriz 

## Markdown
---
* [Google gitmek için](https://google.com)
* ![fotoya gitmek](https://picsum.photos/200/300)
***
* ctrl+k v ya da ctrl+shift+v md preview için
`
print("Hello world")
`
```js
print("Hello world")
```
```js
console.log("hello world")
function helloWorld(){
  console.log("hello world")
}
```
* notion.so md dosyaları destekliyor
* tek satır kod bloğu için ` çok satır kod bloğu için ```
**bold text** *italicized text*
> blockquote

>> blockquote


## HTML
### Html etiketi
* Eğer bir HTML dökümanı oluşturmak isterseniz ilk yapacağınız iş bir <html> etiketi oluşturmaktır
<!--  <html>
        <head>   </head>
        <body>   </body>
      </html> -->
### Head etiketi
* Head etiketi, site ziyaretçileri tarafından görülmesi gerekmeyen kodları içerir
* Bu etiket altına yazılan kodlar genellikle arama motorları ve örümcekler (Crawler veya Spider diye geçer) içindir
* Head etiketi altında bütün etiketleri kullanabilmeniz mümkün değil
* Kullanılabilir etiketler;
   - `<title> (Bu etiketi kullanmak şarttır)`
   - `<meta>`
   - `<style>`
   - `<script>`
   - `<noscript>`
   - `<link>`
   - `<base>`
* html kod
 <html>
  <head>
    <title> Sekmede görülecek isim </title>
    <metaname="Keywords" content="Html,kodluyoruz">
  </head>
  <body></body>

</html>

### Body etiketi
* Web sayfamızda görmek istediğimiz bütün içerikleri <body> etiketi altına yazıyoruz
* html kod
<html>
  <HEAD>
    <title> Sekmede Görülecek İsim </title>
    <meta name="Keywords" content="HTML,Kodluyoruz">
  </HEAD> 
  
  <BODY>
    Site İçeriği
  </BODY>
</html>

<!DOCTYPE html> : Dökümanımızın HTML dilinde olduğunu tarayıcımıza bildiren talimattır
<html lang="en"> : Site içeriğinin dilini belirten etiket, "en" yerine "tr" yazabilirsiniz

### H etiketleri
* H etiketleri başlık etiketleridir. Büyükten küçüğe sırasıyla
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>

Not: HTML otomatik olarak Başlık etiketlerinin öncesine ve sonrasına satır atlatır

### P etiketleri
* \<p> etiketi paragraf etiketidir. Sayfa içerisinde oluşturacağımız metinleri \<p> etiketi ile oluştururuz
Not: HTML otomatik olarak Paragraf etiketinin öncesine ve sonrasına satır atlatır

### BR etiketi
* \<br> etiketi satır atlatma etiketidir ve kapatmaya ihtiyaç duymayan etiketlerden biridir

### A etiketi
* \<a> etiketinin en önemli özelliği href özelliğidir. Bu etiket ile sayfaları linkleyebiliriz
* <body>
    <a href="https://www.kodluyoruz.org">Kodluyoruz</a>
</body>

### UL-OL-Li etiketleri
* \<ul> ve \<ol> etiketleri liste oluşturma etiketleridir. Listeyi oluşturduktan sonra içeriğini oluşturmak için \<li> etiketini kullanıyoruz
* \<ul> = "unordered list" sırasız liste anlamına geliyor. \<ol> = "ordered list" sıralı liste anlamına geliyor

### Strong ve B etiketi
* \<strong> etiketi bir metinin arama motorlarına önemli olduğunu bildirmek için kullanılır. Kullanıldığı zaman metini kalın yapar. Eğer sadece metini kalınlaştırmak isterseniz \<b> etiketini kullanabilirsiniz.

### Script etiketi
* \<script> etiketi JavaScript kodlarını HTML içerisine yazabilmemizi sağlar.

### Button etiketi
* \<button> etiketini buton oluşturmak için kullanırız.
* <body>
    <button> asdfgh </button>
</body>

### img etiketi
* Resim eklemek için \<img> etiketini kullanıyoruz. <img src=”resim.jpg” alt=”açıklama yazısı” /> src="" kısmına eklemek istediğimiz görselin yolunu yani kaynağını yazmalıyız. Eğer görselimiz ve HTML dosyamız aynı klasörde ise görselin adını ve uzantısını yazmamız yeterlidir. alt="" kısmına görselin açıklamasını yazıyoruz fakat isterseniz boş bırakabilirsiniz. Bu etiket kapanmaya ihtiyaç duymaz.

### iframe etiketi
* Belge içinde belge gösterebilmemizi sağlayan etikettir. Genelde başka bir sitedeki belgeyi kendi sayfamızda göstermek için kullanırız. örn: Youtube'dan bir videoyu sayfamızda göstermek istersek \<iframe> kodlarını sayfamıza eklememiz yeterli.(video üzerinde sağ tıklayıp yerleştirme kodunu kopyala diyerek iframe kodunu kopyalayabiliriz.)
* <iframe width="1519" height="581" src="https://www.youtube.com/embed/BHPYQHnD_QA" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

## CSS (Cascading Style Sheets)
* Inline CSS= Etiket içinde style kullanılır
* Internal CSS= Head içinde style etiketinde kullanılır
* External CSS= Head içinde link belirterek kullanılır
* Margin= Elementlerin birbirine uzaklığı
* Padding= Element kenarı ile element içeriği arasındaki boşluk
* 
