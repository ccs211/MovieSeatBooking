const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.ocupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // copy selected seats into arr
  // map through array
  // return a new array indexes

  const seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat)
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat click event
container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('ocupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});