// Database
const books = [
    { id: 1, title: "DP Education 🎓", category: "textbook", grade: "1-5", description: "1-13 ශ්‍රේණි සඳහා නොමිලේ වීඩියෝ පාඩම් සහ අධ්‍යාපනික පාඨමාලා", link: "https://www.dpeducation.lk/" },
    { id: 2, title: "අධ්‍යාපනික ප්‍රකාශන දෙපාර්තමේන්තුව 📚", category: "textbook", grade: "all", description: "1 ශ්‍රේණියේ සිට 13 ශ්‍රේණිය දක්වා සියලුම නිල පෙළපොත් නොමිලේ Download කරගන්න", link: "http://www.edupub.gov.lk/BooksDownload.php" },
    { id: 3, title: "Doenets.lk - විභාග දෙපාර්තමේන්තුව 📝", category: "paper", grade: "ol", description: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://doenets.lk/pastpapers" },
    { id: 4, title: "Past Papers Wiki 📑", category: "paper", grade: "al", description: "ශ්‍රී ලංකාවේ O/L, A/L සහ ශිෂ්‍යත්ව පසුගිය ප්‍රශ්න පත්‍ර සහ පිළිතුරු පත්‍ර", link: "https://pastpapers.wiki/" },
    { id: 5, title: "GovDoc - O/L Past Papers 📄", category: "paper", grade: "ol", description: "අධ්‍යයන පොදු සහතික පත්‍ර (සාමාන්‍ය පෙළ) පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://govdoc.lk/category/past-papers/gce-ordinary-level-exam" },
    { id: 6, title: "Nine A Paper - Short Notes ✍️", category: "paper", grade: "ol", description: "සාමාන්‍ය පෙළ විෂයන් සඳහා කෙටි සටහන් සහ අධ්‍යයන ද්‍රව්‍ය එකතුව", link: "https://nineapaper.com/short-note/" },
    { id: 7, title: "ShortnotesLK 📌", category: "paper", grade: "al", description: "සාමාන්‍ය පෙළ සහ උසස් පෙළ විෂයන් සඳහා කෙටි සටහන් (Short Notes) එකතුව", link: "https://www.shortnoteslk.trade/" },
    { id: 8, title: "Channel NIE - ජාතික අධ්‍යාපන ආයතනය 📺", category: "youtube", grade: "6-9", description: "ජාතික අධ්‍යාපන ආයතනයේ නිල අධ්‍යාපනික වීඩියෝ සහ පාඩම් මාලා", link: "https://channelnie.nie.ac.lk/" },
    { id: 9, title: "DP Education YouTube Channel 🎥", category: "youtube", grade: "all", description: "සියලුම ශ්‍රේණිවල පාඩම් සජීවීව සහ පටිගත කළ වීඩියෝ ලෙස නරඹන්න", link: "https://www.youtube.com/@DPEducationLK" },
    { id: 10, title: "Room to Read Sri Lanka 📕", category: "story", grade: "1-5", description: "පොඩි අයට කියවීමට ලස්සන සිංහල සහ ඉංග්‍රීසි ළමා කතා පොත් එකතුව", link: "https://www.literacycloud.org/" },
    { id: 11, title: "Grade 5 Scholarship Resources 🌟", category: "grade5", grade: "1-5", description: "5 ශ්‍රේණිය ශිෂ්‍යත්ව විභාගයට අදාළ පසුගිය ප්‍රශ්න පත්‍ර සහ ආදර්ශ ප්‍රශ්න", link: "https://pastpapers.wiki/category/grade-05/" },
    { id: 12, title: "News.lk - රජයේ නිල පුවත් 📰", category: "news", grade: "all", description: "ශ්‍රී ලංකා රජයේ නිල පුවත් සහ පුවත්පත් වාර්තා එකතුව", link: "https://www.news.lk/" }
];

let favorites = JSON.parse(localStorage.getItem('favBooks')) || [];
let userNotes = JSON.parse(localStorage.getItem('userStudyNotes')) || [];

// Render Books
function displayBooks(items) {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";
    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>තොරතුරු හමු නොවීය. 🎈</p>";
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
                <a href="${book.link}" target="_blank" class="download-btn">පිවිසෙන්න <i class="fa-solid fa-arrow-right"></i></a>
                <button class="share-btn" onclick="shareLink('${book.title}', '${book.link}')"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleFavorite(id) {
    favorites = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
    localStorage.setItem('favBooks', JSON.stringify(favorites));
    displayBooks(books);
}

function searchBooks() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    displayBooks(books.filter(b => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)));
}

function filterCategory(cat) {
    if (cat === 'all') displayBooks(books);
    else if (cat === 'favorites') displayBooks(books.filter(b => favorites.includes(b.id)));
    else displayBooks(books.filter(b => b.category === cat));
}

function filterGrade(grade) {
    displayBooks(grade === 'all' ? books : books.filter(b => b.grade === grade || b.grade === 'all'));
}

function shareLink(title, url) {
    if (navigator.share) navigator.share({ title, text: title, url });
    else { navigator.clipboard.writeText(url); alert("Link එක Copy කරගන්නා ලදී!"); }
}

// Exam Countdowns (Grade 5, O/L, A/L)
function startExamCountdowns() {
    const exams = {
        grade5Countdown: new Date("October 15, 2026 09:30:00").getTime(),
        olCountdown: new Date("May 10, 2027 08:30:00").getTime(),
        alCountdown: new Date("November 25, 2026 08:30:00").getTime()
    };

    setInterval(() => {
        const now = new Date().getTime();
        for (let id in exams) {
            const diff = exams[id] - now;
            if (diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                document.getElementById(id).innerText = `${d} දින ${h} පැය`;
            } else {
                document.getElementById(id).innerText = "අවසන් විය";
            }
        }
    }, 1000);
}

// Ambient Sounds Toggle
function toggleAmbient(type) {
    const rain = document.getElementById("rainSound");
    const lofi = document.getElementById("lofiSound");
    const rainBtn = document.getElementById("rainBtn");
    const lofiBtn = document.getElementById("lofiBtn");

    if (type === 'rain') {
        lofi.pause(); lofiBtn.classList.remove('active');
        if (rain.paused) { rain.play(); rainBtn.classList.add('active'); }
        else { rain.pause(); rainBtn.classList.remove('active'); }
    } else if (type === 'lofi') {
        rain.pause(); rainBtn.classList.remove('active');
        if (lofi.paused) { lofi.play(); lofiBtn.classList.add('active'); }
        else { lofi.pause(); lofiBtn.classList.remove('active'); }
    }
}

// Daily Quiz System
const quizData = [
    { q: "ශ්‍රී ලංකාවේ උසම දියඇල්ල කුමක්ද?", opts: ["දියලුම", "බඹරකන්ද", "දුන්හිඳ", "රත්න ඇල්ල"], ans: 1 },
    { q: "ලෝකයේ විශාලතම මහාද්වීපය කුමක්ද?", opts: ["අප්‍රිකාව", "යුරෝපය", "ආසියාව", "ඇමෙරිකාව"], ans: 2 },
    { q: "ශාක ප්‍රභාසංශ්ලේෂණය සඳහා ලබාගන්නා වායුව කුමක්ද?", opts: ["ඔක්සිජන්", "කාබන්ඩයොක්සයිඩ්", "නයිට්‍රජන්", "හයිඩ්‍රජන්"], ans: 1 }
];

function loadQuiz() {
    const quiz = quizData[Math.floor(Math.random() * quizData.length)];
    document.getElementById("quizQuestion").innerText = "❓ " + quiz.q;
    const optsDiv = document.getElementById("quizOptions");
    optsDiv.innerHTML = "";
    document.getElementById("quizResult").innerText = "";

    quiz.opts.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.innerText = opt;
        btn.onclick = () => {
            if (idx === quiz.ans) {
                document.getElementById("quizResult").innerHTML = "<span style='color:#2ed573;'>🎉 නිවැරදියි! ඉතාමත් හොඳයි!</span>";
            } else {
                document.getElementById("quizResult").innerHTML = "<span style='color:#ff4757;'>❌ වැරදියි, නැවත උත්සාහ කරන්න!</span>";
            }
        };
        optsDiv.appendChild(btn);
    });
}

// Calculators
function calculateOLGrade() {
    const mark = parseInt(document.getElementById("olMark").value);
    const res = document.getElementById("olResult");
    if (isNaN(mark)) { res.innerText = "ලකුණක් ඇතුළත් කරන්න!"; return; }
    if (mark >= 75) res.innerText = "A (Distinction)";
    else if (mark >= 65) res.innerText = "B (Very Good Pass)";
    else if (mark >= 55) res.innerText = "C (Credit Pass)";
    else if (mark >= 35) res.innerText = "S (Ordinary Pass)";
    else res.innerText = "F (Weak Pass)";
}

function calculateZScore() {
    const x = parseFloat(document.getElementById("userMarks").value);
    const mean = parseFloat(document.getElementById("meanMarks").value);
    const sd = parseFloat(document.getElementById("sdMarks").value);
    const res = document.getElementById("zResult");

    if (isNaN(x) || isNaN(mean) || isNaN(sd) || sd === 0) {
        res.innerText = "සියලුම අගයන් නිවැරදිව ඇතුළත් කරන්න!";
        return;
    }
    const z = (x - mean) / sd;
    res.innerText = `අනුමාන Z-Score අගය: ${z.toFixed(4)}`;
}

// WhatsApp Contact
function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim() || "ලබාදී නැත";
    const message = document.getElementById("contactMessage").value.trim();
    const text = `👋 *Eshan Education Hub*\n👤 *නම:* ${name}\n📧 *Email:* ${email}\n📝 *පණිවිඩය:* ${message}`;
    window.open(`https://wa.me/94789119916?text=${encodeURIComponent(text)}`, '_blank');
    document.getElementById("feedbackForm").reset();
}

// Theme Persistence
function applySavedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggleBtn").innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById("themeToggleBtn").innerHTML = isDark ? 
        '<i class="fa-solid fa-sun"></i> Light Mode' : '<i class="fa-solid fa-moon"></i> Dark Mode';
}

// Notes Logic
function renderNotes() {
    const list = document.getElementById("notesList");
    list.innerHTML = "";
    userNotes.forEach((n, i) => {
        list.innerHTML += `<li><span>📌 ${n}</span><button onclick="deleteNote(${i})"><i class="fa-solid fa-trash"></i></button></li>`;
    });
}
function addNote() {
    const val = document.getElementById("noteInput").value.trim();
    if (val) { userNotes.push(val); localStorage.setItem('userStudyNotes', JSON.stringify(userNotes)); document.getElementById("noteInput").value = ""; renderNotes(); }
}
function deleteNote(i) { userNotes.splice(i, 1); localStorage.setItem('userStudyNotes', JSON.stringify(userNotes)); renderNotes(); }

// Music & Timer
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) { music.play(); document.getElementById("musicToggleBtn").innerHTML = 'Music: On 🎵'; }
    else { music.pause(); document.getElementById("musicToggleBtn").innerHTML = 'Music: Off 🔇'; }
}

let timerInterval, timeLeft = 25 * 60;
function toggleTimerModal() {
    const m = document.getElementById("timerModal");
    m.style.display = m.style.display === "flex" ? "none" : "flex";
}
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timerDisplay").innerText = `${Math.floor(timeLeft/60).toString().padStart(2,'0')}:${(timeLeft%60).toString().padStart(2,'0')}`;
        } else { clearInterval(timerInterval); alert("කාලය අවසන්!"); }
    }, 1000);
}
function pauseTimer() { clearInterval(timerInterval); }
function resetTimer() { clearInterval(timerInterval); timeLeft = 25 * 60; document.getElementById("timerDisplay").innerText = "25:00"; }

window.onscroll = () => {
    document.getElementById("backToTopBtn").style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// Init
applySavedTheme();
displayBooks(books);
renderNotes();
startExamCountdowns();
loadQuiz();
