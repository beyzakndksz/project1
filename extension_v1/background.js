chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log("Services Active!");
});


// Kullanıcı uzantı simgesine tıklamasa bile, arka planda etkin sekmeyi kontrol eder ve console.log("Services Active!") satırıyla konsola bir mesaj yazar. 
//Bu mesaj, yalnızca bilgilendirme amaçlı olabilir veya uzantının arka planda bir şeyler yapmadan önce etkin sekmeyi kontrol ettiğini gösterebilir