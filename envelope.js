// Attach click handler to envelope
const envelopeEl = document.getElementById('envelope');
const envelopeWrapper = document.querySelector('.envelope-wrapper');
console.log('Envelope element:', envelopeEl);
console.log('Envelope wrapper:', envelopeWrapper);
console.log('Document readyState:', document.readyState);

let envelopeTriggered = false;

const triggerEnvelopeAnimations = (event) => {
    if (envelopeTriggered) {
        return;
    }
    envelopeTriggered = true;
    console.log('Envelope clicked!', {
        target: event?.target,
        currentTarget: event?.currentTarget,
        type: event?.type
    });
    // Trigger milk animation
    setTimeout(() => {
        const milk = document.getElementById('flyingMilk');
        milk.style.animation = 'milkMadness 3s ease-in-out forwards';
    }, 500);
    
    // Show "mmmmmm milk" text
    setTimeout(() => {
        const milkText = document.getElementById('milkText');
        milkText.style.animation = 'slideText 3s ease-in-out forwards';
    }, 1000);

    // Show "oh no i feeel..... GASSY" text after milk
    setTimeout(() => {
        const gassyText = document.getElementById('gassyText');
        gassyText.style.transition = 'opacity 0.5s ease-in';
        gassyText.style.opacity = '1';
    }, 3000);
    
    // Show video, then play Bowser fart 1s later
    setTimeout(() => {
        const bowser = document.getElementById('bowserGif');
        bowser.play().catch(e => console.log('Video play failed:', e));
        bowser.style.animation = 'bowserRise 2s ease-out forwards';

        setTimeout(() => {
            const fart = new Audio('bowser-fart.mp3');
            fart.volume = 0.6;
            fart.play().catch(e => console.log('Fart audio play failed:', e));
        }, 1000);
    }, 2500);
    
    // Redirect after all animations
    setTimeout(() => {
        window.location.href = 'snowy.html';
    }, 6000);
};

if (envelopeEl) {
    envelopeEl.addEventListener('click', triggerEnvelopeAnimations);
    envelopeEl.addEventListener('click', (event) => {
        console.log('Envelope element click (capture)', event.target);
    }, true);
} else {
    console.error('Envelope element not found!');
}

if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', triggerEnvelopeAnimations);
    envelopeWrapper.addEventListener('click', (event) => {
        console.log('Envelope wrapper click (capture)', event.target);
    }, true);
}

document.addEventListener('click', (event) => {
    if (event.target) {
        console.log('Document click target:', event.target);
    }
}, true);