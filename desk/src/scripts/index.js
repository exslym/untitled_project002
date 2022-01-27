import '../styles/index.scss';
// import '../../public/tools/gsap3.9.1.min.js';
// import * as gsap from '../../public/tools/gsap3.9.1.min.js';
import { TweenMax } from '../../public/tools/gsap3.9.1.min.js';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const text = document.querySelector('.text');

	const splitText = element => {
		element.innerHTML = element.textContent.trim().replace(/(\S*)/g, m => {
			return `<div class="word">${m.replace(
				/(-|#|@)?\S(-|#|@)?/g,
				'<div class="letter">$&</div>'
			)}</div>`;
		});
		return element;
	};

	const split = splitText(text);

	function random(min, max) {
		return Math.random() * (max - min) + min;
	}
	setTimeout(() => {
		text.classList.add('fade-in');
		Array.from(split.querySelectorAll('.letter')).forEach(
			(element, index) => {
				TweenMax.from(element, 2.5, {
					opacity: 0,
					scale: 0.1,
					rotate: 240,
					x: random(-800, 800),
					y: random(-800, 800),
					z: random(-800, 800),
					delay: index * 0.005,
					repeat: 0,
				});
			}
		);
	}, 500);
	clearTimeout();
});
