let currentChapter = 0;
let totalCandles = 3;
let activeCandles = 3;

// 1. Premium Audio Management Logic Stack
const audio = document.getElementById('bg-audio');
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const musicText = document.getElementById('music-text');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(err => console.log("Audio play deferred:", err));
        musicIcon.classList.add('animate-spin');
        musicText.innerText = "Pause Magic";
        musicBtn.classList.add('bg-emerald-500/20', 'border-emerald-500/30', 'text-emerald-300');
    } else {
        audio.pause();
        musicIcon.classList.remove('animate-spin');
        musicText.innerText = "Play Magic";
        musicBtn.classList.remove('bg-emerald-500/20', 'border-emerald-500/30', 'text-emerald-300');
    }
});

// 2. Navigation Control Layers
function updateChapterDisplay() {
    for (let i = 0; i <= 3; i++) {
        const chapterNode = document.getElementById(`chapter-${i}`);
        if (i === currentChapter) {
            chapterNode.className = "chapter-active space-y-8";
        } else {
            chapterNode.className = "chapter-hidden";
        }
    }
}

function nextChapter() {
    if (currentChapter < 3) {
        currentChapter++;
        updateChapterDisplay();
    }
}

function prevChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        updateChapterDisplay();
    }
}

// 3. Dynamic Luxury Cake Blowing Core
function extinguishCandle(candleElement) {
    const flame = candleElement.querySelector('.flame');
    if (flame && flame.style.display !== 'none') {
        flame.style.display = 'none';
        activeCandles--;
        
        const statusBox = document.getElementById('candle-status');
        
        if (activeCandles > 0) {
            statusBox.innerText = `🔥 ${activeCandles} Candles Remaining`;
        } else {
            statusBox.innerText = "🎉 All wishes captured successfully!";
            document.getElementById('cake-next-btn').disabled = false;
            
            // Pop premium dynamic confetti explosions
            confetti({
                particleCount: 150,
                spread: 85,
                origin: { y: 0.6 }
            });
        }
    }
}

// 4. Luxury Scratch Card Handler
function revealScratchCard() {
    const cover = document.getElementById('scratch-cover');
    if (cover.style.opacity !== '0') {
        cover.style.opacity = '0';
        cover.style.pointerEvents = 'none';
        cover.style.transform = 'scale(0.9) rotateY(90deg)';
        document.getElementById('scratch-next-btn').disabled = false;
    }
}

// 5. Complete Loop Reset Action
function resetCelebration() {
    currentChapter = 0;
    activeCandles = 3;
    
    // Reset cake candles status layer UI
    document.querySelectorAll('.flame').forEach(flame => flame.style.display = 'block');
    document.getElementById('candle-status').innerText = "🔥 3 Candles Remaining — Blow Them Out";
    document.getElementById('cake-next-btn').disabled = true;
    
    // Reset scratch deck overlay
    const cover = document.getElementById('scratch-cover');
    cover.style.opacity = '1';
    cover.style.pointerEvents = 'auto';
    cover.style.transform = 'scale(1) rotateY(0deg)';
    document.getElementById('scratch-next-btn').disabled = true;
    
    updateChapterDisplay();
    confetti({ particleCount: 80, spread: 60 });
}
