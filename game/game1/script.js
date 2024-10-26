const hazards = [
    { id: 'knife', top: '80%', left: '30%', danger: 'Knives can cause serious cuts. Keep them out of reach.' },
    { id: 'stove', top: '85%', left: '90%', danger: 'A hot stove can cause burns. Be careful around it.' },
    { id: 'chemicals', top: '65%', left: '55%', danger: 'Cleaning chemicals can be poisonous. Store them safely.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const room = document.getElementById('room');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restart');

    hazards.forEach(hazard => {
        const img = document.createElement('img');
        img.src = `images/${hazard.id}.png`; 
        img.alt = hazard.id;
        img.classList.add('hazard');
        img.style.top = hazard.top;
        img.style.left = hazard.left;
        img.addEventListener('click', () => {
            message.textContent = hazard.danger;
        });
        room.appendChild(img);
    });

    restartButton.addEventListener('click', () => {
        message.textContent = '';
    });
});
