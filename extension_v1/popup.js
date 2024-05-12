var isActivated = false;  // karanlık mod etkin mi diye takip edecek

function updateToggleButton() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = isActivated ? 'Kapat' : 'Aktifleştir';
    toggleButton.classList.toggle('off', !isActivated);
}

document.getElementById('toggleButton').addEventListener('click', function() {
    isActivated = !isActivated;  //isActivated false ise sınıf eklenir, true ise kaldırılır
    updateToggleButton();
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  //açık pencerede şu anda görüntülenen sayfayı alır
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: () => {   // enjekte edilecek JavaScript kodunu bir ok fonksiyonu olarak tanımlar
                // Stil elementini bul
                let existingStyle = document.getElementById('blackModeStyle');  //idsi blackModeStyle olan bir stil öğesi arar

                // Stil elementi varsa kaldır ve buton metnini güncelle
                if(existingStyle) {
                    existingStyle.remove();
                } else {
                    // Değiştirilecek stil
                    const style = document.createElement('style');
                    style.id = 'blackModeStyle';
                    style.textContent = `
                        html {
                            filter: invert(100%);
                            background-color: black;
                        }
                        img, video {
                            filter: invert(100%);
                        }
                    `;
                    
                    // Stil elementini ekle ve buton metnini güncelle
                    document.head.appendChild(style);
                }
            }
        });
    });
});

updateToggleButton();
