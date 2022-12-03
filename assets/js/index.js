

// https://www.superhi.com/video/smooth-movements-with-javascript

const ball = document.querySelector("#cursor");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.2;


function animate() {

    let distX = mouseX - ballX;
    let distY = mouseY - ballY;
    distX = distX - ball.clientWidth / 2;
    distY = distY - ball.clientHeight / 2;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);


    // ballX = ballX - ballW;
    // ballY = ballY - 10;
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function (event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
})

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