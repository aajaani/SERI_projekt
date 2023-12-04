// Allikas Chat-GPT
window.addEventListener('scroll', function() {
    var header = document.getElementById('header_border');
    var sidebarPadding = document.getElementById('padding');
    var headerHeight = header.offsetHeight;

    if (window.pageYOffset >= headerHeight) {
        sidebarPadding.style.position = 'fixed';
        sidebarPadding.style.top = '0';
    } else {
        sidebarPadding.style.position = 'static';
        sidebarPadding.style.top = '';
    }
})