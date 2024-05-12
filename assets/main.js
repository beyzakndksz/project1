// slider functions - START -
var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;


function reset() { // bütün sliderları (gorselleri) gizler
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';   //bir kerede sadece bir resim göstermeyi sağladı
    }
}

function init() {
    reset();          //başlangıçtaki tüm resimleri gizlemek için reset çağırdı
    sliderImages[current].style.display = 'block';    //ilk resim göstersin diye 0 dedik
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';    //önceki resmi display özelliği block olarak ayarlar
    current--;                                            //geçerli resim indeksini takip etmek için current değerini azaltır
}


function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';  //sonraki resmi display özell. block olarak ayarlar
    current++;                                          //geçerli resim indeksini takip etmek için current değerini arttırır
}

//ok düğmeleeriyle gezinme
function arrowLeftFuncControl(){
    if (current === 0) { // ilk gorselde ise çalışıyor, son gorsele atıyor
        current = sliderImages.length;
    }
    slideLeft();   //önceki resmi görüntülemek için
}


//arrowleft sol ok öğesine tıklama olay dinleyicisi ekler, tıklandığında döngüyle sola gezinmeyi sağlar
arrowLeft.addEventListener('click', arrowLeftFuncControl);

//arrowleft sağ ok öğesine tıklama olay dinleyicisi ekler, tıklandığında currentin son resimde olup olmadığını kontrol eder
arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) { // son gorselde ise çalışıyor, ilk görsele atıyor
        current = -1;
    }
    slideRight();   //sonraki resmi görüntülemek için
});

init();
// slider functions - END -



// addEventListener kısmı
function scale(item) { // ilgili gorseli büyütüyor
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 0.3s";
}

function resetScale(item) { // ilgili gorseli eski haline getiriyor
    item.style.transform = "scale(1)";
}

var slides = document.querySelectorAll(".slide");   //sınıfı slide olan tüm ögelerin bir listesini almak için

slides.forEach(function(slide) {   //her slide ögesi boyunca döngü oluşturur
    slide.addEventListener("mouseenter", function() {   //her slide ögesine bir mouseenter olay dinleyicisi ekler
        var image = this.querySelector("img");
        scale(image);
    });

    slide.addEventListener("mouseleave", function() {   //mousetan ayrılınca çalışma durur
        var image = this.querySelector("img");
        resetScale(image);
    });
});


// slider animation
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");

arrowLeft.addEventListener("click", function() {
    slides[current].classList.add("animate-left")
    
});

arrowRight.addEventListener("click", function() {
    slides[current].classList.add("animate-right")
});

 // arrowRight.addEventListener("click", function() {
 //   alert("Sonraki Resim")
 // });