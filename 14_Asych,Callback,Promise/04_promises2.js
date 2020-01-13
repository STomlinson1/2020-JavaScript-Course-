const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmerelda' } ],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 2000);
	});
};

fakeRequest('/about')
	.then((res) => {
		console.log('REQUEST WORKED');
		console.log('Data:', res.data);
		console.log('Status Code:', res.status);
	})
	.catch((res) => {
		console.log('REQUEST FAILED');
		console.log(res.status);
	});

fakeRequest('/users')
	.then((res) => {
		console.log('REQUEST WORKED');
		console.log('Data:', res.data);
		console.log('Status Code:', res.status);
	})
	.catch((res) => {
		console.log('REQUEST FAILED');
		console.log('Status Code:', res.status);
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('REQUEST WORKED');
		console.log('Data: ', res.data);
		console.log('Status Code:', res.status);
	})
	.catch((res) => {
		console.log('REQUEST FAILED');
		console.log('Status Code:', res.status);
	});
