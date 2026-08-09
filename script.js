// Eshan Kavishka's Expanded Links Database
const books = [
    // Textbooks
    { id: 1, title: "DP Education 🎓", category: "textbook", description: "1-13 ශ්‍රේණි සඳහා නොමිලේ වීඩියෝ පාඩම් සහ අධ්‍යාපනික පාඨමාලා", link: "https://www.dpeducation.lk/" },
    { id: 2, title: "අධ්‍යාපනික ප්‍රකාශන දෙපාර්තමේන්තුව 📚", category: "textbook", description: "1 ශ්‍රේණියේ සිට 13 ශ්‍රේණිය දක්වා සියලුම නිල පෙළපොත් නොමිලේ Download කරගන්න", link: "http://www.edupub.gov.lk/BooksDownload.php" },
    
    // Past Papers & Notes
    { id: 3, title: "Doenets.lk - විභාග දෙපාර්තමේන්තුව 📝", category: "paper", description: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://doenets.lk/pastpapers" },
    { id: 4, title: "Past Papers Wiki 📑", category: "paper", description: "ශ්‍රී ලංකාවේ O/L, A/L සහ ශිෂ්‍යත්ව පසුගිය ප්‍රශ්න පත්‍ර සහ පිළිතුරු පත්‍ර", link: "https://pastpapers.wiki/" },
    { id: 5, title: "GovDoc - O/L Past Papers 📄", category: "paper", description: "අධ්‍යයන පොදු සහතික පත්‍ර (සාමාන්‍ය පෙළ) පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://govdoc.lk/category/past-papers/gce-ordinary-level-exam" },
    { id: 6, title: "Nine A Paper - Short Notes ✍️", category: "paper", description: "සාමාන්‍ය පෙළ විෂයන් සඳහා කෙටි සටහන් සහ අධ්‍යයන ද්‍රව්‍ය එකතුව", link: "https://nineapaper.com/short-note/" },
    { id: 7, title: "ShortnotesLK 📌", category: "paper", description: "සාමාන්‍ය පෙළ සහ උසස් පෙළ විෂයන් සඳහා කෙටි සටහන් (Short Notes) එකතුව", link: "https://www.shortnoteslk.trade/" },
    
    // Educational YouTube Channels (Channel NIE එකතු කර ඇත)
    { id: 8, title: "Channel NIE - ජාතික අධ්‍යාපන ආයතනය 📺", category: "youtube", description: "ජාතික අධ්‍යාපන ආයතනයේ නිල අධ්‍යාපනික වීඩියෝ සහ පාඩම් මාලා", link: "https://channelnie.nie.ac.lk/" },
    { id: 9, title: "DP Education YouTube Channel 🎥", category: "youtube", description: "සියලුම ශ්‍රේණිවල පාඩම් සජීවීව සහ පටිගත කළ වීඩියෝ ලෙස නරඹන්න", link: "https://www.youtube.com/@DPEducationLK" },
    { id: 10, title: "Nenasala Educational Videos 📺", category: "youtube", description: "පාසල් විෂය නිර්දේශයට අදාළ සරල වීඩියෝ පාඩම් එකතුව", link: "https://www.youtube.com/results?search_query=nenasala+education+sri+lanka" },
    
    // Story Books for Kids
    { id: 11, title: "Room to Read Sri Lanka 📕", category: "story", description: "පොඩි අයට කියවීමට ලස්සන සිංහල සහ ඉංග්‍රීසි ළමා කතා පොත් එකතුව", link: "https://www.literacycloud.org/" },
    { id: 12, title: "Children's Story Books PDF 📚", category: "story", description: "ළමුන්ගේ මනස දියුණු කරන චරිත ගොඩනංවන කතා පොත්", link: "https://e-thaksalawa.moe.gov.lk/" },

    // Grade 5 Scholarship
    { id: 13, title: "Grade 5 Scholarship Resources 🌟", category: "grade5", description: "5 ශ්‍රේණිය ශිෂ්‍යත්ව විභාගයට අදාළ පසුගිය ප්‍රශ්න පත්‍ර සහ ආදර්ශ ප්‍රශ්න", link: "https://pastpapers.wiki/category/grade-05/" },

    // News
    { id: 14, title: "News.lk - රජයේ නිල පුවත් 📰", category: "news", description: "ශ්‍රී ලංකා රජයේ නිල පුවත් සහ පුවත්පත් වාර්තා එකතුව", link: "https://www.news.lk/" },
    { id: 15, title: "Ada Derana News 🌐", category: "news", description: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම පුවත් වෙබ් අඩවියෙන් සියලුම නවතම තොරතුරු", link: "https://adaderana.lk/" },
    { id: 16, title: "Newsfirst English 🗞️", category: "news", description: "ශ්‍රී ලංකාවේ සහ ලෝකයේ නවතම පුවත් සහ තොරතුරු", link: "https://english.newsfirst.lk/" }
];

let favorites = JSON.parse(localStorage.getItem('favBooks')) || [];

// Display Cards Function
function displayBooks(items) {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #777;'>ඔබ සොයන තොරතුර හමු නොවීය. 🎈</p>";
        return;
    }

    items.forEach(book => {
        const isFav = favorites.includes(book.id);
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${book.id})">
                <i class="fa-solid fa-star"></i>
            </button>
            <div>
                <h4>${book.title}</h4>
                <p>${book.description}</p>
            </div>
            <div class="card-actions">
                <a href="${book.link}" target="_blank" rel="noopener noreferrer" class="download-btn">
                    පිවිසෙන්න <i class="fa-solid fa-arrow-right"></i>
                </a>
                <button class="share-btn" onclick="shareLink('${book.title}', '${book.link}')" title="Share">
                    <i class="fa-solid fa-share-nodes"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Toggle Favorites
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favBooks', JSON.stringify(favorites));
    displayBooks(books);
}

// Search Function
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
    } else if (category === 'favorites') {
        const favItems = books.filter(b => favorites.includes(b.id));
        displayBooks(favItems);
    } else {
        const filtered = books.filter(b => b.category === category);
        displayBooks(filtered);
    }
}

// Share Function
function shareLink(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Eshan Education Hub හි මෙන්න වැදගත් ලින්ක් එකක්: ${title}`,
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url);
        alert("Link එක Copy කරගන්නා ලදී!");
    }
}

// Back to Top Button Logic
window.onscroll = function() {
    const topBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle Contact Feedback Form
function handleFeedback(e) {
    e.preventDefault();
    alert("ඔබගේ අදහස ලබාදීමට ස්තූතියි, Eshan වෙත පණිවිඩය ලැබුණි! 🚀");
    document.getElementById("feedbackForm").reset();
}

// Light / Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("themeToggleBtn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
}

// Background Music Toggle
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggleBtn");
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Music: On 🎵';
        musicBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5253)';
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i> Music: Off 🔇';
        musicBtn.style.background = 'linear-gradient(45deg, #1dd1a1, #10ac84)';
    }
}

// Countdown Timer Feature
function updateCountdown() {
    const examDate = new Date("December 1, 2026 08:30:00").getTime();
    const now = new Date().getTime();
    const diff = examDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("examCountdown").innerText = `${days} දින ${hours} පැයයි`;
    } else {
        document.getElementById("examCountdown").innerText = "විභාග කාලය පැමිණ ඇත!";
    }
}
setInterval(updateCountdown, 1000);

// Study Timer (Pomodoro) Logic
let timerInterval;
let timeLeft = 25 * 60;

function toggleTimerModal() {
    const modal = document.getElementById("timerModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timerDisplay").innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            alert("කාලය අවසන්! විනාඩි 5ක විවේකයක් ගන්න. ☕");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// Initial Load
displayBooks(books);
updateCountdown();
