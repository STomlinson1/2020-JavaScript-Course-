// This is a fake http request function
// It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'users/5'       : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id   : 454321,
					tite : 'Ladies & Gentlemen, may I introduce my dog Max'
				},
				'/about'        : 'This is the about page'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			} else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

//!this can be refactored using promise chaining
// fakeRequest('/users').then((res) => {
// 	const id = res.data[0].id;
// 	fakeRequest(`/users/${id}`).then((res) => {
// 		const postId = res.data.topPostId;
// 		fakeRequest(`/posts/${postId}`).then((res) => {
// 			console.log(res);
// 		});
// 	});
// });

// Promise Chaining
fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('ERROR!', err);
	});

// Refactor from callback hell lesson
const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveX(btn, 300, 1000)
	.then(() => {
		return moveX(btn, 300, 1000);
	})
	.then(() => {
		return moveX(btn, 300, 1000);
	})
	.then(() => {
		return moveX(btn, 300, 1000);
	})
	.then(() => {
		return moveX(btn, 300, 1000);
	})
	.catch(({ bodyBoundary, amount, elRight }) => {
		console.log(`Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large`);
	});
