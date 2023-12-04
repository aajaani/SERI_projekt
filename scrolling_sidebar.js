// Allikas: Chat-GPT, Aaron Anders Jaani
window.addEventListener('scroll', function() {
    // Leitakse elemendid "header_border" ja "padding"
    var header = document.getElementById('header_border');
    var sidebarPadding = document.getElementById('padding');
    // Võetakse päise kõrgus
    var headerHeight = header.offsetHeight;

    // Kontrollitakse, kas kerimispositsioon on suurem või võrdne päise kõrgusega
    if (window.pageYOffset >= headerHeight) {
        // Kui päis on ekraanilt väljas, muudetakse külgriba positsiooni
        sidebarPadding.style.position = 'fixed';
        sidebarPadding.style.top = '0';
    } else {
        // Kui päis on nähtav, lähtestatakse külgriba positsioon
        sidebarPadding.style.position = 'static';
        sidebarPadding.style.top = '';
    }
})
