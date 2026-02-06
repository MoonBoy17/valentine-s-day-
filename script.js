// ========================================
// STATE MANAGEMENT
// ========================================

let currentSection = 0;
let noClickCount = 0;
let letterTyped = false;
let musicPlaying = false;

const sections = ['landing', 'proposal', 'memories', 'letter', 'celebration'];

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function createHeartBurst() {
    const burstContainer = document.getElementById('heartBurst');
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        heart.textContent = '💖';

        const angle = (360 / heartCount) * i;
        const distance = 150;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;

        heart.style.setProperty('--x', `${x}px`);
        heart.style.setProperty('--y', `${y}px`);

        burstContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

function showEasterEggMessage(message) {
    const easterEgg = document.getElementById('easterEggMessage');
    easterEgg.textContent = message;
    easterEgg.classList.add('show');

    setTimeout(() => {
        easterEgg.classList.remove('show');
    }, 2000);
}

// ========================================
// SECTION 1: LANDING SCREEN
// ========================================

document.getElementById('startBtn').addEventListener('click', function () {
    createHeartBurst();

    setTimeout(() => {
        showSection('proposal');
        currentSection = 1;
    }, 800);
});

// ========================================
// SECTION 2: PROPOSAL SECTION
// ========================================

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const reactionText = document.getElementById('reactionText');

const noResponses = [
    "Are you sure? 🥺",
    "Really? But... but... 💔",
    "Give it another thought? 🤔",
    "Please? Pretty please? 🙏",
    "I'll be really sad... 😢",
    "One more chance? 💕",
    "You're breaking my heart! 💔",
    "Think about all our good times! 🌟"
];

yesBtn.addEventListener('click', function () {
    reactionText.textContent = "Yay! You made me the happiest! 🎉💖";
    reactionText.style.fontSize = '1.8rem';
    reactionText.style.color = 'var(--rose)';

    // Create celebration hearts
    createHeartBurst();

    setTimeout(() => {
        showSection('memories');
        currentSection = 2;
        animateMemoryCards();
    }, 2000);
});

noBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (noClickCount < noResponses.length) {
        reactionText.textContent = noResponses[noClickCount];
        noClickCount++;

        // Make button smaller with each click
        const scale = 1 - (noClickCount * 0.1);
        noBtn.style.transform = `scale(${Math.max(scale, 0.5)})`;

        // Make Yes button bigger
        const yesScale = 1 + (noClickCount * 0.1);
        yesBtn.style.transform = `scale(${yesScale})`;

    } else {
        reactionText.textContent = "The 'No' button has given up! Only 'Yes' remains! 😊";
        noBtn.style.display = 'none';
    }
});

// Make No button dodge on hover
noBtn.addEventListener('mouseenter', function () {
    if (noClickCount >= 3) {
        const maxX = 200;
        const maxY = 200;
        const randomX = (Math.random() - 0.5) * maxX;
        const randomY = (Math.random() - 0.5) * maxY;

        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.15s ease';

        setTimeout(() => {
            noBtn.style.left = '0px';
            noBtn.style.top = '0px';
        }, 300);
    }
});

// ========================================
// SECTION 3: MEMORY LANE
// ========================================

function animateMemoryCards() {
    const cards = document.querySelectorAll('.memory-card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);
    });
}

// Intersection Observer for memory cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.memory-card').forEach(card => {
    observer.observe(card);
});

document.getElementById('continueToLetter').addEventListener('click', function () {
    showSection('letter');
    currentSection = 3;

    if (!letterTyped) {
        setTimeout(() => {
            typewriterEffect();
        }, 500);
    }
});

// ========================================
// SECTION 4: LOVE LETTER
// ========================================

const loveLetterText = `Hello Kiddo,

This letter won't do any justice to our emotions, but allow me to express myself a little. You bratty kid, always loving me more and more, idky u love me so much.

But well I fell in love wiht u too, the late night tlaks, the giggles, the trust u have over me. Thank you for being exactly who you are – kind, beautiful, and wonderfully you.

I am so grateful for every second we spend together, and I can't wait to create a million more memories with you. IDk if we will ever meet or how we will be in future but hope u will remember our time.

Well this Valentine's Day, and every day after, I want you to know that you are cherished, you are loved, and you means a lot to me.`;

function typewriterEffect() {
    const letterContent = document.getElementById('letterContent');
    let index = 0;
    letterTyped = true;

    function type() {
        if (index < loveLetterText.length) {
            letterContent.textContent += loveLetterText.charAt(index);
            index++;

            const speed = loveLetterText.charAt(index) === '.' ? 200 : 25;
            setTimeout(type, speed);
        } else {
            letterContent.classList.add('typing-complete');

            setTimeout(() => {
                showSection('celebration');
                currentSection = 4;
                createConfetti();
            }, 3000);
        }
    }

    type();
}

// ========================================
// MUSIC TOGGLE
// ========================================

const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

musicToggle.addEventListener('click', function () {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🎵 Play Music';
        musicPlaying = false;
    } else {
        bgMusic.play().catch(err => {
            console.log('Music playback failed:', err);
            showEasterEggMessage('Click again to play music! 🎶');
        });
        musicToggle.textContent = '🎵 Pause Music';
        musicPlaying = true;
    }
});

// ========================================
// SECTION 5: CELEBRATION
// ========================================

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const confettiCount = 100;
    const colors = ['#FFB6C1', '#FFC0CB', '#E6E6FA', '#D8BFD8', '#FF69B4', '#FFFDD0'];

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';

            // Random shapes
            const shapes = ['5px', '8px', '10px'];
            const size = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.width = size;
            confetti.style.height = size;

            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            container.appendChild(confetti);

            setTimeout(() => confetti.remove(), 6000);
        }, i * 30);
    }
}

// ========================================
// EASTER EGGS
// ========================================

// Clickable floating hearts
const floatingHearts = document.querySelectorAll('.heart');
const heartMessages = [
    "Love you Sneha! 💕",
    "You're amazing kiddo! ✨",
    "You're beautiful Sneha! 🌟",
    "Forever & Always 💖",
    "You means a lot dumbo! 💝",
    "Luckiest person to have you! 💘",
    "Missing you so much! 🍀",
    "Can't wait to see you! 💗",
    "You make my days better! ✨"
];

floatingHearts.forEach(heart => {
    heart.addEventListener('click', function (e) {
        const message = heartMessages[Math.floor(Math.random() * heartMessages.length)];
        showEasterEggMessage(message);

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 105, 180, 0.5)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'burst 1s ease-out forwards';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '999';

        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    });
});

// Double-click on sparkles
const sparkles = document.querySelectorAll('.sparkle');
const sparkleMessages = [
    "Smile more kiddo! ✨",
    "Your msgs bring smile to me kiddo! 🌟",
    "crazy to love me lol! That's what you are! ✨💫",
    "You're my wish come true! 🌠",
    "Sneha, hope to meet u soon! 💖"
];

sparkles.forEach(sparkle => {
    sparkle.addEventListener('dblclick', function () {
        const message = sparkleMessages[Math.floor(Math.random() * sparkleMessages.length)];
        showEasterEggMessage(message);
    });
});

// Konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', function (e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-8);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showEasterEggMessage('Secret unlocked! You found the Konami code! 🎮💖');
        createConfetti();
        konamiCode = [];
    }
});

// ========================================
// INITIALIZATION
// ========================================

console.log('💖 Valentine\'s Day website loaded! Made with love by urs Harsh 💖');
