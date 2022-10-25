# CMD

- echo %cd% bulunduğun klasörü görmek
- dir klasörde bulunan dosya ve klasörleri görmek
- mkdir klasör oluşturmak makedirectory
- cd "klasör ismi" klasöre girmek
- cd .. önceki klasöre dönmek

# MultiCursor

- ctrl+d aynı ifadeleri seçebilmemizi ve tek seferde değiştirmemizi sağlar
- alt+LMB multicursor için
- shift+alt+LMB çoklu multicursor kullanmak için

# Keyboard shortcuts

- alt+aşağı/yukarı ile yapıyı istediğimiz yere taşıyabiliriz
- shift+aşağı ile yapıyı aşağıya kopyalayabiliriz
- ctrl+L yapıyı seçer
- ctrl+enter alt satır
- ctrl+p menüden projedeki dosyaları açmak için
- ctrl+ö açıklama satırı

# Snippets

- Çok tekrar eden yerlerde snippet oluşturmak

# GIT-SCM/Source code management

* Versiyon kontrol sistemi
* Takımların aynı proje ortamında çalışmasını kolaylaştırır
* Kim düzenledi, ne değişti, ve ne zaman değiştiği bilgilerini tutar
* Herhangi bir dosyaya ve versiyona her zaman dönüş yapılabilir
* Yerel ve uzak bilgisayarlarda çalışır
* İstenilen çalışma anında projenin ve dosyaların snapshot özelliği ile o anki halini alabiliriz(commit)
* Her zaman snapshotları inceleyebilir veya geri dönüş yapılabilir
* Hangi dosyaların snapshot aldıktan sonra değiştiğini görebiliriz
* Projende versiyonlanmamasını istediğini dosyaları, dosya tiplerini(*.log,*.mp4) veya klasörleri belirtebiliriz 

# Markdown
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


# HTML
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
*

  
