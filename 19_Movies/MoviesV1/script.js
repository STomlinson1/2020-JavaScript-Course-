//Building AutoComplete Widget

//async function to request data from movie api
const fetchData = async (searchTerm) => {
	// axios has a built in syntax to make request by setting params in an object, the params object will be converted into a query string and appended to the end of the get request
	const response = await axios.get('http://www.omdbapi.com/', {
		params : {
			apikey : '6eddeff',
			s      : searchTerm
		}
	});

	if (response.data.Error) {
		return [];
	}

	return response.data.Search;
};

//select input
const input = document.querySelector('input');

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);
	for (let movie of movies) {
		const div = document.createElement('div');
		div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
      `;

		document.querySelector('#target').appendChild(div);
	}
};

input.addEventListener('input', debounce(onInput, 500));

/*
We Refactored this using a debounce helper function

///timeoutID to be used in the onInput function for debouncing
let timeoutId;
///when user starts to type in the search, the request will take place after the users stops typing for half a second
const onInput = (event) => {
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
	timeoutId = setTimeout(() => {
		fetchData(event.target.value);
	}, 500);
};

/// add event listener and call onInput whenever user types a character into the input field
input.addEventListener('input', onInput);
*/
