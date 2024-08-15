document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const items = [
        { title: "Avengers Endgame", link: "https://example.com/avengers-endgame", image: "./images/banner/banner1.jpeg"},
        { title: "Chichhore", link: "https://example.com/chichhore", image: "./images/banner/banner2.jpeg" },
        { title: "Oppenheimer", link: "movie4.html", image: "./images/banner/banner3.jpeg" },
        { title: "Interstellar", link: "movie2.html", image: "./images/banner/banner4.jpeg" },
        { title: "Spiderman No Way Home", link: "movie1.html", image: "./images/banner/banner5.jpeg" },
        { title: "Batman V Superman", link: "https://example.com/batman-v-superman", image: "./images/banner/banner6.jpeg" },
        { title: "La La Land", link: "https://example.com/avengers-endgame", image: "./images/banner/banner7.jpeg" },
        { title: "The Dark Knight", link: "https://example.com/chichhore", image: "./images/banner/banner8.jpeg" },
        { title: "Robot 2.0", link: "movie4.html", image: "./images/banner/banner9.jpeg" },
        { title: "Zindagi Na Milegi Dobara", link: "https://example.com/avengers-endgame", image: "./images/banner/banner10.jpeg" },
        { title: "Martian", link: "https://example.com/chichhore", image: "./images/banner/banner11.jpeg" },
        { title: "Ludo", link: "movie4.html", image: "./images/banner/banner12.jpeg" },
        { title: "Your Name", link: "https://example.com/avengers-endgame", image: "./images/caraousel13.jpg" },
        { title: "classroom of the elite s01", link: "https://example.com/chichhore", image: "./images/carousel14.jpg" },
        { title: "classroom of the elite s02", link: "movie4.html", image: "./images/caraousel15.jpg" },
        { title: "Spirited Away", link: "https://example.com/avengers-endgame", image: "./images/caraousel18.jpg" },
        { title: "One Piece Film Red", link: "https://example.com/chichhore", image: "./images/caraousel17.jpg" },
        { title: "Weathering with You", link: "movie4.html", image: "./images/caraousel16.jpg" },
        // Add more items with title, link, and image
    ];

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (query) {
            const filteredItems = items.filter(item => item.title.toLowerCase().startsWith(query));

            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    const listItem = document.createElement('li');

                    const thumbnail = document.createElement('img');
                    thumbnail.src = item.image;
                    thumbnail.alt = item.title;

                    const text = document.createElement('span');
                    text.textContent = item.title;

                    listItem.appendChild(thumbnail);
                    listItem.appendChild(text);

                    listItem.addEventListener('click', () => {
                        window.location.href = item.link; // Navigate to the clicked result
                    });

                    searchResults.appendChild(listItem);
                });
            } else {
                const noResultItem = document.createElement('li');
                noResultItem.textContent = 'No results found';
                noResultItem.style.color = '#ccc';
                searchResults.appendChild(noResultItem);
            }
        }
    }

    searchInput.addEventListener('input', handleSearch);

    // Hide the search results when clicking outside of the search box
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.innerHTML = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const items = [
        { title: "Avengers Endgame", link: "https://example.com/avengers-endgame", image: "./images/banner/banner1.jpeg"},
        { title: "Chichhore", link: "https://example.com/chichhore", image: "./images/banner/banner2.jpeg" },
        { title: "Oppenheimer", link: "movie4.html", image: "./images/banner/banner3.jpeg" },
        { title: "Interstellar", link: "movie2.html", image: "./images/banner/banner4.jpeg" },
        { title: "Spiderman No Way Home", link: "movie1.html", image: "./images/banner/banner5.jpeg" },
        { title: "Batman V Superman", link: "https://example.com/batman-v-superman", image: "./images/banner/banner6.jpeg" },
        { title: "La La Land", link: "https://example.com/avengers-endgame", image: "./images/banner/banner7.jpeg" },
        { title: "The Dark Knight", link: "https://example.com/chichhore", image: "./images/banner/banner8.jpeg" },
        { title: "Robot 2.0", link: "movie4.html", image: "./images/banner/banner9.jpeg" },
        { title: "Zindagi Na Milegi Dobara", link: "https://example.com/avengers-endgame", image: "./images/banner/banner10.jpeg" },
        { title: "Martian", link: "https://example.com/chichhore", image: "./images/banner/banner11.jpeg" },
        { title: "Ludo", link: "movie4.html", image: "./images/banner/banner12.jpeg" },
        { title: "Your Name", link: "https://example.com/avengers-endgame", image: "./images/caraousel13.jpg" },
        { title: "classroom of the elite s01", link: "https://example.com/chichhore", image: "./images/caraousel14.jpg" },
        { title: "classroom of the elite s02", link: "movie4.html", image: "./images/caraousel15.jpg" },
        { title: "Spirited Away", link: "https://example.com/avengers-endgame", image: "./images/caraousel18.jpg" },
        { title: "One Piece Film Red", link: "https://example.com/chichhore", image: "./images/caraousel17.jpg" },
        { title: "Weathering with You", link: "movie4.html", image: "./images/caraousel16.jpg" },
    ];

    searchButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission
        handleSearch();
    });

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        const firstLetter = query.charAt(0).toUpperCase();

        if (query) {
            const filteredItems = items.filter(item => item.title.startsWith(firstLetter) && item.title.toLowerCase().includes(query.toLowerCase()));

            if (filteredItems.length > 0) {
                const searchParams = new URLSearchParams();
                searchParams.append('query', query);

                window.location.href = `search-results.html?${searchParams.toString()}`;
            } else {
                // Redirect to search results page with no query, or handle as needed
                window.location.href = 'search-results.html?query='; 
            }
        }
    }
});
const carousel = document.querySelector('.carousel-images');
let startX, scrollLeft;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - startX;
    carousel.scrollLeft = scrollLeft - x;
});
