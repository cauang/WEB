
const API_KEY = '590f8bcd42233039879d58834024f75b';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

async function getMovies() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderMovies(data.results);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

function renderMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}" />
      <div class="movie-title">${movie.title}</div>
    `;

    movieList.appendChild(movieEl);
  });
}

getMovies();
