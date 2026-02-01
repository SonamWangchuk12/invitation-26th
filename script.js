const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
let growthTracker = 0;

const wittyPhrases = [
    "You missed!", "Too slow!", "Try again 😜", "Not that one!", 
    "Error 404: No not found", "Nice try!", "Are you sure?"
];

noBtn.addEventListener('mouseover', () => {
    // 1. Move to random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Change text randomly
    noBtn.innerText = wittyPhrases[Math.floor(Math.random() * wittyPhrases.length)];

    // 3. Size logic: Caps growth at 2 times
    if (growthTracker < 2) {
        let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentFontSize + 20) + "px"; 
        yesBtn.style.padding = "25px 50px"; 
        growthTracker++;
    }
});

yesBtn.addEventListener('click', () => {
    // 1. Hide proposal and show celebration
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('celebration').classList.remove('hidden');

    // 2. Target the video
    const vid = document.getElementById('celebration-video');
    
    // 3. Set speed to 1.25x
    vid.playbackRate = 1.25;

    // 4. Play the video automatically
    vid.play().catch(error => {
        console.log("Autoplay was prevented, usually requires a mute attribute:", error);
    });
});
