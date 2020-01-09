const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.3) {
				reject({ status: 404 });
			} else {
				const pages = {
					'/users' : [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmerelda' } ],
					'/about' : 'This is the about page!'
				};
				const data = pages[url];
				resolve({ status: 200, data });
			}
		}, 3000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('REQUEST WORKED');
		console.log('Data', res.data);
		console.log('Status Code', res.status);
	})
	.catch((res) => {
		console.log('REQUEST FAILED');
		console.log(res.status);
	});
