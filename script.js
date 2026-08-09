// Eshan Kavishka ගේ වෙබ් අඩවියේ සියලුම Links
const books = [
    {
        title: "DP Education 🎓",
        category: "textbook",
        description: "1-13 ශ්‍රේණි සඳහා නොමිලේ වීඩියෝ පාඩම් සහ අධ්‍යාපනික පාඨමාලා",
        link: "https://www.dpeducation.lk/"
    },
    {
        title: "Channel NIE - ජාතික අධ්‍යාපන ආයතනය 📺",
        category: "textbook",
        description: "ජාතික අධ්‍යාපන ආයතනයේ නිල අධ්‍යාපනික වීඩියෝ සහ පාඩම් මාලා",
        link: "https://channelnie.nie.ac.lk/"
    },
    {
        title: "අධ්‍යාපනික ප්‍රකාශන දෙපාර්තමේන්තුව 📚",
        category: "textbook",
        description: "1 ශ්‍රේණියේ සිට 13 ශ්‍රේණිය දක්වා සියලුම නිල පෙළපොත් නොමිලේ Download කරගන්න",
        link: "http://www.edupub.gov.lk/BooksDownload.php"
    },
    {
        title: "Doenets.lk - විභාග දෙපාර්තමේන්තුව 📝",
        category: "paper",
        description: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව",
        link: "https://doenets.lk/pastpapers"
    },
    {
        title: "Past Papers Wiki 📑",
        category: "paper",
        description: "ශ්‍රී ලංකාවේ O/L, A/L සහ ශිෂ්‍යත්ව පසුගිය ප්‍රශ්න පත්‍ර සහ පිළිතුරු පත්‍ර",
        link: "https://pastpapers.wiki/"
    },
    {
        title: "GovDoc - O/L Past Papers 📄",
        category: "paper",
        description: "අධ්‍යයන පොදු සහතික පත්‍ර (සාමාන්‍ය පෙළ) පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව",
        link: "https://govdoc.lk/category/past-papers/gce-ordinary-level-exam"
    },
    {
        title: "Nine A Paper - Short Notes ✍️",
        category: "paper",
        description: "සාමාන්‍ය පෙළ විෂයන් සඳහා කෙටි සටහන් සහ අධ්‍යයන ද්‍රව්‍ය එකතුව",
        link: "https://nineapaper.com/short-note/"
    },
    {
        title: "ShortnotesLK 📌",
        category: "paper",
        description: "සාමාන්‍ය පෙළ සහ උසස් පෙළ විෂයන් සඳහා කෙටි සටහන් (Short Notes) එකතුව",
        link: "https://www.shortnoteslk.trade/"
    },
    {
        title: "News.lk - රජයේ නිල පුවත් 📰",
        category: "news",
        description: "ශ්‍රී ලංකා රජයේ නිල පුවත් සහ පුවත්පත් වාර්තා එකතුව",
        link: "https://www.news.lk/"
    },
    {
        title: "Ada Derana News 🌐",
        category: "news",
        description: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම පුවත් වෙබ් අඩවියෙන් සියලුම නවතම තොරතුරු",
        link: "https://adaderana.lk/"
    },
    {
        title: "Newsfirst English 🗞️",
        category: "news",
        description: "ශ්‍රී ලංකාවේ සහ ලෝකයේ නවතම පුවත් සහ තොරතුරු",
        link: "https://english.newsfirst.lk/"
    }
];

// Display Books Cards
function displayBooks(items) {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #777;'>ඔබ සොයන තොරතුර හමු නොවීය. 🎈</p>";
        return;
    }

    items.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>
                <h4>${book.title}</h4>
                <p>${book.description}</p>
            </div>
            <a href="${book.link}" target="_blank" rel="noopener noreferrer" class="download-btn">
                පිවිසෙන්න / View <i class="fa-solid fa-arrow-right"></i>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Search Functionality
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = books.filter(b => 
        b.title.toLowerCase().includes(query) || 
        b.description.toLowerCase().includes(query)
    );
    displayBooks(filtered);
}

// Category Filter
function filterCategory(category) {
    if (category === 'all') {
        displayBooks(books);
    } else {
        const filtered = books.filter(b => b.category === category);
        displayBooks(filtered);
    }
}

// Light / Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeToggleBtn");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
}

// Initial Load
displayBooks(books);
