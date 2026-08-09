// Database with A/L Stream filters
const books = [
    { id: 1, title: "DP Education 🎓", category: "textbook", grade: "1-5", description: "1-13 ශ්‍රේණි සඳහා නොමිලේ වීඩියෝ පාඩම් සහ අධ්‍යාපනික පාඨමාලා", link: "https://www.dpeducation.lk/" },
    { id: 2, title: "අධ්‍යාපනික ප්‍රකාශන දෙපාර්තමේන්තුව 📚", category: "textbook", grade: "all", description: "1 ශ්‍රේණියේ සිට 13 ශ්‍රේණිය දක්වා සියලුම නිල පෙළපොත් නොමිලේ Download කරගන්න", link: "http://www.edupub.gov.lk/BooksDownload.php" },
    { id: 3, title: "Doenets.lk - විභාග දෙපාර්තමේන්තුව 📝", category: "paper", grade: "ol", description: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://doenets.lk/pastpapers" },
    { id: 4, title: "A/L Combined Maths Resource Pack 📐", category: "paper", grade: "al-maths", description: "උසස් පෙළ සංයුක්ත ගණිතය Resource Books සහ Past Papers", link: "https://pastpapers.wiki/" },
    { id: 5, title: "A/L Biology Resource Book 🔬", category: "paper", grade: "al-bio", description: "ජීව විද්‍යාව විෂය සඳහා ජාතික අධ්‍යාපන ආයතනයේ නිල Resource Book", link: "https://pastpapers.wiki/" },
    { id: 6, title: "A/L Economics & Business Short Notes 📈", category: "paper", grade: "al-commerce", description: "උසස් පෙළ වාණිජ විෂයයන්ගේ කෙටි සටහන් එකතුව", link: "https://www.shortnoteslk.trade/" },
    { id: 7, title: "A/L Technology Notes ⚙️", category: "paper", grade: "al-tech", description: "තාක්ෂණවේදය (SFT, ET, BST) කෙටි සටහන් සහ පත්‍ර", link: "https://pastpapers.wiki/" },
    { id: 8, title: "Channel NIE - ජාතික අධ්‍යාපන ආයතනය 📺", category: "youtube", grade: "6-9", description: "ජාතික අධ්‍යාපන ආයතනයේ නිල අධ්‍යාපනික වීඩියෝ සහ පාඩම් මාලා", link: "https://channelnie.nie.ac.lk/" }
];

const dictionaryDB = {
    "photosynthesis": "ප්‍රභාසංශ්ලේෂණය: ශාක හිරු එළිය භාවිත කරමින් ආහාර නිපදවීමේ ක්‍රියාවලියයි.",
    "velocity": "ප්‍රවේගය: ඒකක කාලයකදී සිදුකරන විස්ථාපනයයි.",
    "inflation": "උද්ධමනය: භාණ්ඩ හා සේවාවල පොදු මිල මට්ටම ඉහළ යාමයි."
};

const quotes = [
    "අධ්‍යාපනය යනු ලෝකය වෙනස් කිරීමට භාවිත කළ හැකි බලවත්ම ආයුධයයි. - නෙල්සන මැන්ඩෙලා",
    "අද ඔබ කරන කැපවීම හෙට ඔබේ සාර්ථකත්වයේ පදනම වේ!",
    "කිසිවිටෙක උත්සාහය අත්නොහරින්න. කුඩා පියවරක් වුවද ඉදිරියට තබන්න!"
];

let favorites = JSON.parse(localStorage.getItem('favBooks')) || [];
let userNotes = JSON.parse(localStorage.getItem('userStudyNotes')) || [];
let timetable = JSON.parse(localStorage.getItem('userTimetable')) || [];
let userXP = parseInt(localStorage.getItem('userXP')) || 0;
let userLevel = parseInt(localStorage.getItem('userLevel')) || 1;

// Audio Objects including Natural Relaxation Sounds
const bgAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3");
const rainAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/09/06/audio_34d1e2e92c.mp3");
const lofiAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73223.mp3");
const birdsAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3"); // Forest Birds
const wavesAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/06/07/audio_13019cfef9.mp3"); // Ocean Waves
const riverAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/08/09/audio_29107ec320.mp3"); // River Stream

const winSound = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3");
const loseSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c302d68a.mp3");

[bgAudio, rainAudio, lofiAudio, birdsAudio, wavesAudio, riverAudio].forEach(a => a.loop = true);

function stopAllAmbient() {
    [rainAudio, lofiAudio, birdsAudio, wavesAudio, riverAudio].forEach(a => a.pause());
    document.querySelectorAll(".ambient-controls button").forEach(b => b.classList.remove('active'));
}

function toggleAmbient(type) {
    stopAllAmbient();
    let selectedAudio, btnId;
    if (type === 'rain') { selectedAudio = rainAudio; btnId = "rainBtn"; }
    else if (type === 'lofi') { selectedAudio = lofiAudio; btnId = "lofiBtn"; }
    else if (type === 'birds') { selectedAudio = birdsAudio; btnId = "birdsBtn"; }
    else if (type === 'waves') { selectedAudio = wavesAudio; btnId = "wavesBtn"; }
    else if (type === 'river') { selectedAudio = riverAudio; btnId = "riverBtn"; }

    if (selectedAudio) {
        selectedAudio.play().then(() => {
            document.getElementById(btnId).classList.add('active');
        }).catch(() => alert("Sound Play කිරීමට Click කරන්න."));
    }
}

function toggleMusic() {
    const musicBtn = document.getElementById("musicToggleBtn");
    if (bgAudio.paused) { bgAudio.play().then(() => musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Music: On 🎵'); }
    else { bgAudio.pause(); musicBtn.innerHTML = '<i class="fa-solid fa-music"></i> Music: Off 🔇'; }
}

function displayRandomQuote() {
    document.getElementById("quoteText").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Render Books & PDF Preview Modal
function displayBooks(items) {
    const grid = document.getElementById("bookGrid");
    grid.innerHTML = "";
    if (items.length === 0) { grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>තොරතුරු හමු නොවීය. 🎈</p>"; return; }
    items.forEach(book => {
        const isFav = favorites.includes(book.id);
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${book.id})"><i class="fa-solid fa-star"></i></button>
            <div><h4>${book.title}</h4><p>${book.description}</p></div>
            <div class="card-actions">
                <a href="${book.link}" target="_blank" class="download-btn">පිවිසෙන්න <i class="fa-solid fa-arrow-right"></i></a>
                <button class="preview-btn" onclick="openPdfModal('${book.title}', '${book.link}')"><i class="fa-solid fa-eye"></i></button>
                <button class="share-btn" onclick="shareLink('${book.title}', '${book.link}')"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openPdfModal(title, link) {
    document.getElementById("pdfTitle").innerText = title;
    document.getElementById("pdfFrame").src = link;
    document.getElementById("pdfModal").style.display = "flex";
}
function closePdfModal() { document.getElementById("pdfModal").style.display = "none"; }

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

// XP & Level System
function addXP(amount) {
    userXP += amount;
    if (userXP >= 100) { userLevel++; userXP -= 100; alert(`🎉 Level Up! ඔබ දැනට Level ${userLevel} මට්ටමේ සිටී!`); }
    localStorage.setItem('userXP', userXP);
    localStorage.setItem('userLevel', userLevel);
    updateXPDisplay();
}
function updateXPDisplay() {
    document.getElementById("userLevel").innerText = userLevel;
    document.getElementById("userXP").innerText = userXP;
    document.getElementById("xpBarFill").style.width = `${userXP}%`;
}

// Mega Knowledge Arena Logic
const quizDatabase = {
    gk: [
        { q: "ශ්‍රී ලංකාවේ උසම දියඇල්ල කුමක්ද?", opts: ["දියලුම ඇල්ල", "බඹරකන්ද ඇල්ල", "දුන්හිඳ ඇල්ල", "රත්න ඇල්ල"], ans: 1, exp: "බඹරකන්ද ඇල්ල මීටර් 263ක උසින් යුක්ත වන අතර එය ශ්‍රී ලංකාවේ උසම දියඇල්ලයි." }
    ],
    science: [
        { q: "ශාක ප්‍රභාසංශ්ලේෂණය සඳහා ලබාගන්නා වායුව කුමක්ද?", opts: ["ඔක්සිජන්", "කාබන්ඩයොක්සයිඩ්", "නයිට්‍රජන්", "හයිඩ්‍රජන්"], ans: 1, exp: "ශාක ආහාර නිපදවීමට කාබන්ඩයොක්සයිඩ් උරාගනී." }
    ],
    history: [
        { q: "සිගිරිය නිර්මාණය කරන ලද්දේ කවුරුන් විසින්ද?", opts: ["දුටුගැමුණු රජු", "කාශ්‍යප රජු", "පරාක්‍රමබාහු රජු", "ධාතුසේන රජු"], ans: 1, exp: "පළමුවන කාශ්‍යප රජතුමන් විසින් සීගිරිය නිර්මාණය කරන ලදී." }
    ],
    grade5: [
        { q: "ශ්‍රී ලංකාවේ ජාතික පුෂ්පය කුමක්ද?", opts: ["නෙළුම් මල", "මානෙල් මල", "නිල් මානෙල් මල", "සමන් පිච්ච"], ans: 2, exp: "ශ්‍රී ලංකාවේ ජාතික පුෂ්පය නිල් මානෙල් මලයි." }
    ]
};

let currentCat = "gk", currentQIndex = 0, userScore = 0, userStreak = 0;

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
    document.querySelectorAll(".quiz-opt-btn").forEach(btn => btn.disabled = true);

    if (selected === correct) {
        userScore += 10; userStreak++; addXP(10);
        document.getElementById("scoreDisplay").innerText = userScore;
        document.getElementById("streakDisplay").innerText = userStreak;

        feedbackBox.className = "quiz-feedback-card correct-bg";
        document.getElementById("feedbackIcon").innerHTML = "🎉 🏆 🌟";
        document.getElementById("feedbackTitle").innerText = "නියමයි! පිළිතුර 100% ක් නිවැරදියි!";
        document.getElementById("feedbackMsg").innerText = `💡 කරුණු: ${explanation}`;

        try { winSound.play(); } catch(e){}
    } else {
        userStreak = 0;
        document.getElementById("streakDisplay").innerText = userStreak;
        feedbackBox.className = "quiz-feedback-card incorrect-bg";
        document.getElementById("feedbackIcon").innerHTML = "😢 💔 🔄";
        document.getElementById("feedbackTitle").innerText = "අයියෝ වැරදියි! නැවත උත්සාහ කරමු!";
        document.getElementById("feedbackMsg").innerText = `💡 නිවැරදි පිළිතුර: ${explanation}`;

        try { loseSound.play(); } catch(e){}
    }
    feedbackBox.classList.remove("hidden");
}

function nextQuestion() { currentQIndex++; loadQuizQuestion(); }
function changeQuizCategory(cat) { currentCat = cat; currentQIndex = 0; loadQuizQuestion(); }

// Dictionary & Timetable
function searchDictionary() {
    const term = document.getElementById("dictInput").value.trim().toLowerCase();
    const resBox = document.getElementById("dictResult");
    if (dictionaryDB[term]) {
        resBox.innerHTML = `<p style='padding:10px; background:#e0f7fa; border-radius:8px; margin-top:10px;'>💡 <strong>${term.toUpperCase()}:</strong> ${dictionaryDB[term]}</p>`;
    } else { resBox.innerHTML = "<p style='color:#ff4757; margin-top:10px;'>සමාවන්න, මෙම වචනය ශබ්දකෝෂයේ හමු නොවීය.</p>"; }
}

function renderTimetable() {
    const list = document.getElementById("timetableList");
    list.innerHTML = "";
    timetable.forEach((item, index) => {
        list.innerHTML += `<li><span>⏰ <strong>${item.time}:</strong> ${item.subject}</span><button onclick="deleteTTItem(${index})"><i class="fa-solid fa-trash"></i></button></li>`;
    });
}
function addTimetableItem() {
    const sub = document.getElementById("ttSubject").value.trim();
    const time = document.getElementById("ttTime").value;
    if (sub && time) { timetable.push({ subject: sub, time }); localStorage.setItem('userTimetable', JSON.stringify(timetable)); renderTimetable(); }
}
function deleteTTItem(i) { timetable.splice(i, 1); localStorage.setItem('userTimetable', JSON.stringify(timetable)); renderTimetable(); }

// Calculators, Notes & WhatsApp
function calculateOLGrade() {
    const mark = parseInt(document.getElementById("olMark").value);
    const res = document.getElementById("olResult");
    if (isNaN(mark)) { res.innerText = "ලකුණක් ඇතුළත් කරන්න!"; return; }
    if (mark >= 75) res.innerText = "A Pass"; else if (mark >= 65) res.innerText = "B Pass";
    else if (mark >= 55) res.innerText = "C Pass"; else if (mark >= 35) res.innerText = "S Pass"; else res.innerText = "F Pass";
}

function calculateZScore() {
    const x = parseFloat(document.getElementById("userMarks").value);
    const mean = parseFloat(document.getElementById("meanMarks").value);
    const sd = parseFloat(document.getElementById("sdMarks").value);
    const res = document.getElementById("zResult");
    if (isNaN(x) || isNaN(mean) || isNaN(sd) || sd === 0) { res.innerText = "සියලු අගයන් ඇතුළත් කරන්න!"; return; }
    res.innerText = `අනුමාන Z-Score: ${((x - mean) / sd).toFixed(4)}`;
}

function renderNotes() {
    const list = document.getElementById("notesList");
    list.innerHTML = "";
    userNotes.forEach((n, i) => { list.innerHTML += `<li><span>📌 ${n}</span><button onclick="deleteNote(${i})"><i class="fa-solid fa-trash"></i></button></li>`; });
}
function addNote() {
    const val = document.getElementById("noteInput").value.trim();
    if (val) { userNotes.push(val); localStorage.setItem('userStudyNotes', JSON.stringify(userNotes)); document.getElementById("noteInput").value = ""; renderNotes(); }
}
function deleteNote(i) { userNotes.splice(i, 1); localStorage.setItem('userStudyNotes', JSON.stringify(userNotes)); renderNotes(); }

function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const msg = document.getElementById("contactMessage").value.trim();
    window.open(`https://wa.me/94789119916?text=${encodeURIComponent(`👋 *Eshan Hub*\n👤 *නම:* ${name}\n📝 *පණිවිඩය:* ${msg}`)}`, '_blank');
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById("themeToggleBtn").innerHTML = isDark ? '<i class="fa-solid fa-sun"></i> Light' : '<i class="fa-solid fa-moon"></i> Dark';
}

function toggleTimerModal() { const m = document.getElementById("timerModal"); m.style.display = m.style.display === "flex" ? "none" : "flex"; }
function toggleBreatheModal() { const m = document.getElementById("breatheModal"); m.style.display = m.style.display === "flex" ? "none" : "flex"; }

window.onscroll = () => { document.getElementById("backToTopBtn").style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none"; };
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// Init
if (localStorage.getItem('theme') === 'dark') document.body.classList.add("dark-mode");
displayBooks(books);
renderNotes();
renderTimetable();
loadQuizQuestion();
displayRandomQuote();
updateXPDisplay();
