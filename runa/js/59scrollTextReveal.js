// 59scrollTextCrossReveal
let scrolled = false;
let parallaxTitles = document.querySelectorAll('.parallaxTitle');

function scrolling(){
	scrolled = true;
}

const raf = () => {
	if(scrolled) {
		parallaxTitles.forEach((element) => {
			element.style.transform = `translateX(${window.scrollY / 10}%)`
		})
		scrolled = false;
	}
	requestAnimationFrame(raf); // 재귀함수를 통해 css변형 누적
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrolling)