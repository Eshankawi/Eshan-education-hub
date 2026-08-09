// Database with A/L Stream options
const books = [
    { id: 1, title: "DP Education 🎓", category: "textbook", grade: "1-5", description: "1-13 ශ්‍රේණි සඳහා නොමිලේ වීඩියෝ පාඩම් සහ අධ්‍යාපනික පාඨමාලා", link: "https://www.dpeducation.lk/" },
    { id: 2, title: "අධ්‍යාපනික ප්‍රකාශන දෙපාර්තමේන්තුව 📚", category: "textbook", grade: "all", description: "1 ශ්‍රේණියේ සිට 13 ශ්‍රේණිය දක්වා සියලුම නිල පෙළපොත් නොමිලේ Download කරගන්න", link: "http://www.edupub.gov.lk/BooksDownload.php" },
    { id: 3, title: "Doenets.lk - විභාග දෙපාර්තමේන්තුව 📝", category: "paper", grade: "ol", description: "ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර එකතුව", link: "https://doenets.lk/pastpapers" },
    { id: 4, title: "Combined Maths Resource Book 📐", category: "paper", grade: "al-maths", description: "අධ්‍යාපන දෙපාර්තමේන්තුවේ Combined Maths Resource Book", link: "https://pastpapers.wiki/" },
    { id: 5, title: "A/L Bio Resource Book 🔬", category: "paper", grade: "al-bio", description: "A/L Biology ශ්‍රී ලංකා ජාතික අධ්‍යාපන ආයතනයේ නිල Resource Book එක", link: "https://pastpapers.wiki/" },
    { id: 6, title: "A/L Economics Short Notes 📈", category: "paper", grade: "al-commerce", description: "උසස් පෙළ ආර්ථික විද්‍යාව කෙටි සටහන් එකතුව", link: "https://www.shortnoteslk.trade/" },
    { id: 7, title: "A/L Tech Resource Pack ⚙️", category: "paper", grade: "al-tech", description: "Engineering & Bio Tech කෙටි සටහන් සහ පත්‍ර", link: "https://pastpapers.wiki/" },
    { id: 8, title: "Channel NIE - ජාතික අධ්‍යාපන ආයතනය 📺", category: "youtube", grade: "6-9", description: "ජාතික අධ්‍යාපන ආයතනයේ නිල අධ්‍යාපනික වීඩියෝ සහ පාඩම් මාලා", link: "https://channelnie.nie.ac.lk/" }
];

const dictionaryDB = {
    "photosynthesis": "ප්‍රභාසංශ්ලේෂණය: ශාක සූර්යාලෝකය භාවිත කරමින් ආහාර නිපදවීමේ ක්‍රියාවලියයි.",
    "velocity": "ප්‍රවේගය: ඒකක කාලයකදී වස්තුවක් සිදුකරන විස්ථාපනයයි.",
    "inflation": "උද්ධමනය: භාණ්ඩ හා සේවාවල පොදු මිල මට්ටම අඛණ්ඩව ඉහළ යාමයි."
};

let favorites = JSON.parse(localStorage.getItem('favBooks')) || [];
let userNotes = JSON.parse(localStorage.getItem('userStudyNotes')) || [];
let timetable = JSON.parse(localStorage.getItem('userTimetable')) || [];
let userXP = parseInt(localStorage.getItem('userXP')) || 0;
let userLevel = parseInt(localStorage.getItem('userLevel')) || 1;

// Render Books & Preview Modal
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

// Question of the day
function initDailyQuestion() {
    document.getElementById("dailyQuestionText").innerText = "❓ (Daily Challenge) ශ්‍රී ලංකාවේ ප්‍රථම අග්‍රාමාත්‍යවරයා කවුරුන්ද?";
    const opts = ["ඩී. එස්. සේනානායක මහතා", "ඩඩ්ලි සේනානායක මහතා", "එස්.ඩබ්.ආර්.ඩී. බණ්ඩාරනායක මහතා"];
    const container = document.getElementById("dailyQOptions");
    container.innerHTML = "";
    opts.forEach((o, i) => {
        const btn = document.createElement("button");
        btn.className = "daily-q-btn";
        btn.innerText = o;
        btn.onclick = () => {
            if (i === 0) {
                document.getElementById("dailyQFeedback").innerText = "✅ නිවැරදියි! +20 XP ලබාගත්තා!";
                document.getElementById("dailyQFeedback").style.color = "#2ed573";
                addXP(20);
            } else {
                document.getElementById("dailyQFeedback").innerText = "❌ වැරදියි! නැවත උත්සාහ කරන්න.";
                document.getElementById("dailyQFeedback").style.color = "#ff4757";
            }
        };
        container.appendChild(btn);
    });
}

// Dictionary Search
function searchDictionary() {
    const term = document.getElementById("dictInput").value.trim().toLowerCase();
    const resBox = document.getElementById("dictResult");
    if (dictionaryDB[term]) {
        resBox.innerHTML = `<p style='padding:10px; background:#e0f7fa; border-radius:8px;'>💡 <strong>${term.toUpperCase()}:</strong> ${dictionaryDB[term]}</p>`;
    } else {
        resBox.innerHTML = "<p style='color:#ff4757; margin-top:10px;'>සමාවන්න, මෙම වචනය ශබ්දකෝෂයේ හමු නොවීය.</p>";
    }
}

// Timetable Planner
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
    if (sub && time) {
        timetable.push({ subject: sub, time });
        localStorage.setItem('userTimetable', JSON.stringify(timetable));
        renderTimetable();
    }
}
function deleteTTItem(i) { timetable.splice(i, 1); localStorage.setItem('userTimetable', JSON.stringify(timetable)); renderTimetable(); }

// Themes Selector
function changeThemeColor(theme) { document.body.setAttribute("data-theme", theme); }
function toggleTheme() { document.body.classList.toggle("dark-mode"); }

// Init Calls
displayBooks(books);
updateXPDisplay();
initDailyQuestion();
renderTimetable();
