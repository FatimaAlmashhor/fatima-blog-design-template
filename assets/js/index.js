// const circle = document.querySelector('.animat_circle');

const circleLetters = () => {
    const circle = document.querySelector('.animat_circle');
    const text = circle.innerHTML;// Note I am being lazy here and assuming the string has no unwanted whitespace
    circle.innerHTML = '';
    circle.style.setProperty('--numchs', text.length);
    for (let i = 0; i < text.length; i++) {
        circle.innerHTML = circle.innerHTML + '<span class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</span>';
    }

}


circleLetters();