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
		let bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			// console.log('DONE - Cannot go that far');
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
