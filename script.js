// Educational Database
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

// Sound Objects Creation
const bgAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3");
const rainAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/09/06/audio_34d1e2e92c.mp3");
const lofiAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73223.mp3");

// Quiz Winning & Losing Sound Effects
const winSound = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3");
const loseSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c302d68a.mp3");

bgAudio.loop = true;
rainAudio.loop = true;
lofiAudio.loop = true;

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

// Countdown Timers
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

// Ambient Focus Sounds System
function toggleAmbient(type) {
    const rainBtn = document.getElementById("rainBtn");
    const lofiBtn = document.getElementById("lofiBtn");

    if (type === 'rain') {
        lofiAudio.pause();
        lofiBtn.classList.remove('active');

        if (rainAudio.paused) {
            rainAudio.play().then(() => rainBtn.classList.add('active')).catch(() => alert("Sound Play කිරීමට පිටුවට Click එකක් දෙන්න."));
        } else {
            rainAudio.pause();
            rainBtn.classList.remove('active');
        }
    } else if (type === 'lofi') {
        rainAudio.pause();
        rainBtn.classList.remove('active');

        if (lofiAudio.paused) {
            lofiAudio.play().then(() => lofiBtn.classList.add('active')).catch(() => alert("Sound Play කිරීමට පිටුවට Click එකක් දෙන්න."));
        } else {
            lofiAudio.pause();
            lofiBtn.classList.remove('active');
        }
    }
}

function toggleMusic() {
    const musicBtn = document.getElementById("musicToggleBtn");
    if (bgAudio.paused) {
        bgAudio.play().then(() => {
            musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Music: On 🎵';
        }).catch(() => alert("Music Play කිරීමට පිටුවට Click එකක් දෙන්න."));
    } else {
        bgAudio.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i> Music: Off 🔇';
    }
}

// ==========================================
// MEGA QUIZ SYSTEM & WINNING ANIMATION ENGINE
// ==========================================

const quizDatabase = {
    gk: [
        { q: "ශ්‍රී ලංකාවේ උසම දියඇල්ල කුමක්ද?", opts: ["දියලුම ඇල්ල", "බඹරකන්ද ඇල්ල", "දුන්හිඳ ඇල්ල", "රත්න ඇල්ල"], ans: 1, exp: "බඹරකන්ද ඇල්ල මීටර් 263ක උසින් යුක්ත වන අතර එය ශ්‍රී ලංකාවේ උසම දියඇල්ලයි." },
        { q: "ලෝකයේ විශාලතම මහාද්වීපය කුමක්ද?", opts: ["අප්‍රිකාව", "යුරෝපය", "ආසියාව", "උතුරු ඇමෙරිකාව"], ans: 2, exp: "ආසියාව යනු ලෝකයේ විශාලතම සහ වැඩිම ජනගහනයක් සහිත මහාද්වීපයයි." },
        { q: "ශ්‍රී ලංකාවේ දිගම ගංගාව කුමක්ද?", opts: ["කැලණි ගඟ", "කළු ගඟ", "මහවැලි ගඟ", "වලවේ ගඟ"], ans: 2, exp: "මහවැලි ගඟ කිලෝමීටර් 335ක් දිගින් යුක්ත වේ." },
        { q: "ලෝකයේ කුඩාම රට කුමක්ද?", opts: ["මෝල්ටාව", "වතිකානු නගරය", "මොනාකෝ", "මාලදිවයින"], ans: 1, exp: "වතිකානු නගරය (Vatican City) වර්ග කිලෝමීටර් 0.49 කින් යුත් ලොව කුඩාම රටයි." }
    ],
    science: [
        { q: "ශාක ප්‍රභාසංශ්ලේෂණය සඳහා ලබාගන්නා වායුව කුමක්ද?", opts: ["ඔක්සිජන්", "කාබන්ඩයොක්සයිඩ්", "නයිට්‍රජන්", "හයිඩ්‍රජන්"], ans: 1, exp: "ශාක හිරු එළිය භාවිතයෙන් ආහාර නිපදවීමට කාබන්ඩයොක්සයිඩ් උරාගනී." },
        { q: "මිනිස් සිරුරේ විශාලතම අභ්‍යන්තර අවයවය කුමක්ද?", opts: ["වකුගඩුව", "හදවත", "අක්මාව", "පෙනහැල්ල"], ans: 2, exp: "අක්මාව (Liver) යනු සිරුරේ ඇති විශාලතම අභ්‍යන්තර අවයවයයි." },
        { q: "ජලයේ රසායනික සූත්‍රය කුමක්ද?", opts: ["CO2", "H2O", "NaCl", "O2"], ans: 1, exp: "ජලය හයිඩ්‍රජන් පරමාණු 2කින් සහ ඔක්සිජන් පරමාණු 1කින් සෑදී ඇත (H2O)." }
    ],
    history: [
        { q: "සිගිරිය නිර්මාණය කරන ලද්දේ කවුරුන් විසින්ද?", opts: ["දුටුගැමුණු රජු", "කාශ්‍යප රජු", "පරාක්‍රමබාහු රජු", "ධාතුසේන රජු"], ans: 1, exp: "පළමුවන කාශ්‍යප රජතුමන් විසින් ක්‍රි.ව. 5 වන සියවසේදී සීගිරිය නිර්මාණය කරන ලදී." },
        { q: "ලංකාවේ අවසාන රජතුමා කවුද?", opts: ["ශ්‍රී වික්‍රම රාජසිංහ", "කීර්ති ශ්‍රී රාජසිංහ", "රාජසිංහ 1", "විමලධර්මසූරිය 1"], ans: 0, exp: "1815 දී ඉංග්‍රීසීන් විසින් අල්ලා ගන්නා ලද්දේ ශ්‍රී වික්‍රම රාජසිංහ රජතුමාවයි." }
    ],
    grade5: [
        { q: "ශ්‍රී ලංකාවේ ජාතික පුෂ්පය කුමක්ද?", opts: ["නෙළුම් මල", "මානෙල් මල", "නිල් මානෙල් මල", "සමන් පිච්ච"], ans: 2, exp: "ශ්‍රී ලංකාවේ ජාතික පුෂ්පය නිල් මානෙල් මලයි." },
        { q: "සූර්යග්‍රහණයක් සිදුවන්නේ කුමක් මැදට පැමිණි විටද?", opts: ["චන්ද්‍රයා", "පෘථිවිය", "හිරු", "අඟහරු"], ans: 0, exp: "සූර්යයා සහ පෘථිවිය අතරට චන්ද්‍රයා පැමිණි විට සූර්යග්‍රහණයක් සිදු වේ." }
    ]
};

let currentCat = "gk";
let currentQIndex = 0;
let userScore = 0;
let userStreak = 0;

function loadQuizQuestion() {
    const qList = quizDatabase[currentCat];
    if (!qList || qList.length === 0) return;

    const q = qList[currentQIndex % qList.length];
    document.getElementById("quizQuestion").innerText = `❓ (${currentQIndex + 1}) ${q.q}`;
    
    const optsDiv = document.getElementById("quizOptions");
    optsDiv.innerHTML = "";
    document.getElementById("quizFeedback").classList.add("hidden");

    q.opts.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, q.ans, q.exp);
        optsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct, explanation) {
    const feedbackBox = document.getElementById("quizFeedback");
    const iconDiv = document.getElementById("feedbackIcon");
    const titleObj = document.getElementById("feedbackTitle");
    const msgObj = document.getElementById("feedbackMsg");

    // Disable all option buttons
    document.querySelectorAll(".quiz-opt-btn").forEach(btn => btn.disabled = true);

    if (selected === correct) {
        userScore += 10;
        userStreak++;
        document.getElementById("scoreDisplay").innerText = userScore;
        document.getElementById("streakDisplay").innerText = userStreak;

        feedbackBox.className = "quiz-feedback-card correct-bg";
        iconDiv.innerHTML = "🎉 🏆 🌟";
        titleObj.innerText = "නියමයි! පිළිතුර 100% ක් නිවැරදියි!";
        msgObj.innerText = `💡 කරුණු: ${explanation}`;

        // Play Sound and Launch Winning Animations
        try { winSound.play(); } catch(e){}
        triggerConfetti();

    } else {
        userStreak = 0;
        document.getElementById("streakDisplay").innerText = userStreak;

        feedbackBox.className = "quiz-feedback-card incorrect-bg";
        iconDiv.innerHTML = "😢 💔 🔄";
        titleObj.innerText = "අයියෝ වැරදියි! නැවත උත්සාහ කරමු!";
        msgObj.innerText = `💡 නිවැරදි පිළිතුර සහ විස්තරය: ${explanation}`;

        try { loseSound.play(); } catch(e){}
    }

    feedbackBox.classList.remove("hidden");
}

function nextQuestion() {
    currentQIndex++;
    loadQuizQuestion();
}

function changeQuizCategory(cat) {
    currentCat = cat;
    currentQIndex = 0;
    loadQuizQuestion();
}

// Canvas Confetti Animation Particle Engine
function triggerConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#ff4757", "#2ed573", "#1e90ff", "#ffa502", "#e056fd", "#70a1ff"];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.5) * 12 - 4,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 100
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach(p => {
            if (p.life > 0) {
                active = true;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.2; // Gravity
                p.life -= 2;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        if (active) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    animate();
}

// Calculators & Notes
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

function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim() || "ලබාදී නැත";
    const message = document.getElementById("contactMessage").value.trim();
    const text = `👋 *Eshan Education Hub*\n👤 *නම:* ${name}\n📧 *Email:* ${email}\n📝 *පණිවිඩය:* ${message}`;
    window.open(`https://wa.me/94789119916?text=${encodeURIComponent(text)}`, '_blank');
    document.getElementById("feedbackForm").reset();
}

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

// Pomodoro Timer
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

// Initializing
applySavedTheme();
displayBooks(books);
renderNotes();
startExamCountdowns();
loadQuizQuestion();
