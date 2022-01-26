function handleCheckBoxClick() {

    
     const monkeyElement = document.getElementById('mokey-img');
     console.log(monkeyElement.classList.contains('footer-image-hidden'));
    if (monkeyElement.classList.contains('footer-image-hidden')) {
        monkeyElement.classList.remove('footer-image-hidden');
    } else {
        monkeyElement.classList.add('footer-image-hidden');
    }
}