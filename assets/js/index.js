// const circle = document.querySelector('.animat_circle');
// this is for circle animation
const circleLetters = () => {
    const circle = document.querySelector('.animat_circle');
    const text = circle.innerHTML;// Note I am being lazy here and assuming the string has no unwanted whitespace
    circle.innerHTML = '';
    circle.style.setProperty('--numchs', text.length);
    for (let i = 0; i < text.length; i++) {
        circle.innerHTML = circle.innerHTML + '<span class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</span>';
    }

}

// this is for the language section hoveing 
const lang_sec = document.querySelector('.lang_sec');
lang_sec.addEventListener('mouseover', (e) => {
    lang_sec.style.setProperty('--a', `400px`)
    e.target.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e
        const x = Math.round((clientX / window.innerWidth) * 100)
        const y = Math.round((clientY / window.innerHeight) * 100)

        lang_sec.style.setProperty('--x', `${x}%`)
        lang_sec.style.setProperty('--y', `${y}%`)
        console.log(lang_sec)
    })
});
lang_sec.addEventListener('mouseleave', (e) => {
    lang_sec.style.setProperty('--a', `0px`)
});

circleLetters();