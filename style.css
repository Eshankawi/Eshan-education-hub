:root {
    --bg-color: #f4f7fc;
    --card-bg: #ffffff;
    --text-color: #2c3e50;
    --text-sub: #666666;
    --shadow: 0 10px 20px rgba(0,0,0,0.08);
}

body.dark-mode {
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --text-color: #e0e0e0;
    --text-sub: #aaa;
    --shadow: 0 10px 20px rgba(0,0,0,0.5);
}

* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; transition: background-color 0.3s, color 0.3s; }
body { background-color: var(--bg-color); color: var(--text-color); overflow-x: hidden; }

/* Confetti Canvas */
#confettiCanvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; }

/* Navigation & Original Buttons */
.top-nav { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; background: var(--card-bg); box-shadow: var(--shadow); }
.logo { font-size: 1.4rem; font-weight: bold; color: #ff4757; }
.controls { display: flex; gap: 10px; }

#musicToggleBtn, #themeToggleBtn, #timerBtn { padding: 8px 16px; border-radius: 20px; border: none; color: white; cursor: pointer; font-weight: bold; }
#timerBtn { background: #ff9f43; } #musicToggleBtn { background: #1dd1a1; } #themeToggleBtn { background: #70a1ff; }

/* Header & XP Bar */
header { position: relative; text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #4834d4, #686de0); color: white; margin: 20px; border-radius: 20px; }
.user-level-container { margin-top: 10px; font-weight: bold; font-size: 0.95rem; }
.xp-bar-bg { width: 200px; height: 8px; background: rgba(255,255,255,0.3); border-radius: 10px; margin: 5px auto; overflow: hidden; }
.xp-bar-fill { height: 100%; width: 0%; background: #2ed573; transition: width 0.4s ease; }

.quote-box { background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 25px; margin: 15px auto; max-width: 600px; font-style: italic; font-size: 0.95rem; backdrop-filter: blur(5px); }

.countdowns-container { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 15px; }
.countdown-card { background: rgba(255, 255, 255, 0.2); padding: 8px 15px; border-radius: 12px; font-size: 0.9rem; }

.search-box { margin: 20px auto 0; max-width: 500px; position: relative; }
.search-box i { position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: #888; }
#searchInput { width: 100%; padding: 14px 20px 14px 45px; border-radius: 30px; border: none; outline: none; font-size: 1rem; }

/* Ambient Sounds & Natural Audio Section */
.ambient-section { max-width: 1200px; margin: 20px auto; padding: 15px 20px; background: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow); text-align: center; }
.ambient-controls { display: flex; justify-content: center; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
.ambient-controls button { padding: 10px 18px; border: none; border-radius: 25px; background: #70a1ff; color: white; font-weight: bold; cursor: pointer; }
.ambient-controls button.active { background: #2ed573; }

/* Original Quiz Styling */
.quiz-section { max-width: 1200px; margin: 25px auto; padding: 25px; background: var(--card-bg); border-radius: 20px; box-shadow: var(--shadow); border: 2px solid #70a1ff; }
.quiz-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 15px; }
.quiz-stats { display: flex; gap: 10px; }
.stat-badge { background: var(--bg-color); padding: 8px 15px; border-radius: 20px; font-weight: bold; border: 1px solid #ddd; }

.quiz-category-select select { padding: 8px 15px; border-radius: 10px; border: 1px solid #70a1ff; background: var(--bg-color); color: var(--text-color); font-size: 0.95rem; }
.quiz-q-text { font-size: 1.2rem; font-weight: 600; margin-bottom: 15px; color: #3742fa; }

.quiz-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; }
.quiz-opt-btn { padding: 14px; border: 2px solid #70a1ff; border-radius: 12px; background: var(--bg-color); color: var(--text-color); cursor: pointer; text-align: left; font-size: 1rem; font-weight: 500; }
.quiz-opt-btn:hover { background: #70a1ff; color: white; }

.quiz-feedback-card { margin-top: 20px; padding: 20px; border-radius: 15px; text-align: center; animation: popIn 0.4s ease; }
.quiz-feedback-card.correct-bg { background: rgba(46, 213, 115, 0.15); border: 2px solid #2ed573; color: #2ed573; }
.quiz-feedback-card.incorrect-bg { background: rgba(255, 71, 87, 0.15); border: 2px solid #ff4757; color: #ff4757; animation: shake 0.5s ease; }
.feedback-icon { font-size: 3rem; margin-bottom: 5px; }
.next-q-btn { margin-top: 15px; padding: 10px 25px; border: none; background: #3742fa; color: white; font-weight: bold; border-radius: 20px; cursor: pointer; }

/* Original Flashcards Styling */
.flashcard-section { max-width: 1200px; margin: 30px auto; padding: 25px; background: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow); }
.flashcard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 15px; }
.flashcard { perspective: 1000px; height: 140px; cursor: pointer; }
.flashcard-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; }
.flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }
.flashcard-front, .flashcard-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 15px; font-weight: bold; box-shadow: var(--shadow); }
.flashcard-front { background: #70a1ff; color: white; }
.flashcard-back { background: #2ed573; color: white; transform: rotateY(180deg); font-size: 0.95rem; }

/* Layout & Grid */
.main-container { display: flex; flex-wrap: wrap; max-width: 1200px; margin: 20px auto; padding: 0 20px; gap: 20px; }
.sidebar { flex: 1; min-width: 250px; background: var(--card-bg); padding: 20px; border-radius: 15px; box-shadow: var(--shadow); }
.sidebar li { padding: 12px; margin-bottom: 8px; border-radius: 10px; cursor: pointer; background: var(--bg-color); font-weight: 500; }
.sidebar li:hover { background: #70a1ff; color: white; }

.grade-filter-container { margin-top: 20px; }
.grade-filter-container select { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #70a1ff; background: var(--bg-color); color: var(--text-color); margin-top: 5px; }

.content { flex: 3; min-width: 300px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }
.card { background: var(--card-bg); padding: 20px; border-radius: 15px; box-shadow: var(--shadow); display: flex; flex-direction: column; justify-content: space-between; position: relative; }
.card:hover { transform: translateY(-5px); }
.card h4 { color: #3742fa; margin-bottom: 10px; }
.fav-btn { position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #ccc; }
.fav-btn.active { color: #f1c40f; }

.card-actions { display: flex; gap: 8px; margin-top: 10px; }
.download-btn { flex: 3; text-align: center; background: #2ed573; color: white; padding: 10px; text-decoration: none; border-radius: 8px; font-weight: bold; }
.share-btn, .preview-btn { border: none; padding: 10px; color: white; border-radius: 8px; cursor: pointer; }
.share-btn { background: #ff4757; }
.preview-btn { background: #ff9f43; }

/* Dictionary, Timetable, Calculator & Notes */
.dictionary-section, .timetable-section, .calculator-section, .notes-section, .contact-section { max-width: 1200px; margin: 30px auto; padding: 25px; background: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow); }

.dict-search, .timetable-form { display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; }
.dict-search input, .timetable-form input { flex: 1; padding: 12px; border-radius: 8px; border: 1px solid #ccc; outline: none; }
.dict-search button, .timetable-form button { padding: 12px 20px; background: #3742fa; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }

.timetable-list { list-style: none; margin-top: 15px; display: flex; flex-direction: column; gap: 8px; }
.timetable-list li { background: var(--bg-color); padding: 10px 15px; border-radius: 8px; display: flex; justify-content: space-between; border-left: 4px solid #70a1ff; }

.calc-grid { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 15px; }
.calc-card { flex: 1; min-width: 280px; background: var(--bg-color); padding: 15px; border-radius: 12px; display: flex; flex-direction: column; gap: 10px; }
.calc-card input, .note-input-group input, #feedbackForm input, #feedbackForm textarea { padding: 12px; border-radius: 8px; border: 1px solid #ccc; outline: none; }
.calc-card button, .note-input-group button, #feedbackForm button { padding: 12px; background: #3742fa; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }

.notes-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }
.notes-list li { background: var(--bg-color); padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid #ff9f43; }

/* Modals & Breathing Circle */
.modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; justify-content: center; align-items: center; }
.modal-content { background: var(--card-bg); padding: 30px; border-radius: 20px; text-align: center; width: 320px; position: relative; }
.pdf-modal-content { width: 85% !important; max-width: 800px; }
.close-btn { position: absolute; top: 10px; right: 15px; font-size: 1.5rem; cursor: pointer; }

.breathe-circle { width: 140px; height: 140px; border-radius: 50%; background: #70a1ff; margin: 20px auto; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; animation: breatheAnim 12s infinite ease-in-out; }
@keyframes breatheAnim {
    0%, 100% { transform: scale(0.8); background: #70a1ff; }
    33% { transform: scale(1.2); background: #2ed573; }
    66% { transform: scale(1.2); background: #ff9f43; }
}

#backToTopBtn { position: fixed; bottom: 25px; right: 25px; width: 45px; height: 45px; border-radius: 50%; border: none; background: #ff4757; color: white; font-size: 1.2rem; cursor: pointer; display: none; }
.hidden { display: none !important; }
footer { text-align: center; padding: 25px; background: var(--card-bg); margin-top: 40px; }
