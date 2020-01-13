/* 
Examples showing how callbacks can get messy quickly
*/

const btn = document.querySelector('button');

// setTimeout(() => {
// 	btn.style.transform = `translate(100px)`;
// 	setTimeout(() => {
// 		btn.style.transform = `translate(200px)`;
// 		setTimeout(() => {
// 			btn.style.transform = `translate(300px)`;
// 			setTimeout(() => {
// 				btn.style.transform = `translate(400px)`;
// 				setTimeout(() => {
// 					btn.style.transform = `translate(500px)`;
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		// get width of page
		let bodyBoundary = document.body.clientWidth;
		// get right attribute of element
		const elRight = element.getBoundingClientRect().right;
		//track current left of element
		const currLeft = element.getBoundingClientRect().left;
		//if the element moves off the page
		if (elRight + amount > bodyBoundary) {
			onFailure();
		} else {
			element.style.transform = `translate(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};

// moveX(btn, 100, 1000, () => {
// 	moveX(btn, 100, 1000, () => {
// 		moveX(btn, 100, 1000, () => {
// 			moveX(btn, 100, 1000, () => {
// 				moveX(btn, 1000, 1000);
// 			});
// 		});
// 	});
// });

moveX(
	btn,
	100,
	1000,
	() => {
		//success
		moveX(
			btn,
			100,
			1000,
			() => {
				//success
			},
			() => {
				//fail
				alert('Cannot Move Further');
			}
		);
	},
	() => {
		//failure
		alert('Cannot Move Further');
	}
);
