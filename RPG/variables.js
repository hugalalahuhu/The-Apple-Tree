let x = 0;
let y = 0;

// Avoid using eval — just use an object directly
const chapterData = {
  first: {
    source: 'hokage.png',
    sw: 42,
    sh: 42
  }
};

const c = document.getElementById('canvas1');
const area = c.getContext('2d');

class Chapter {
  constructor(chapterName) {
    const data = chapterData[chapterName];
    const player = new Image();
    player.src = data.source;
    player.onload = function () {
      area.drawImage(player, 0, 0, data.sw, data.sh, x, y, 42, 42);
    };
  }
}

// Draw for the first time
new Chapter('first');

function drawCharacter() {
  area.clearRect(0, 0, c.width, c.height);
  new Chapter('first');
}

function down() {
  if (y <= 100) {
    y += 10;
    drawCharacter();
  }
}

function up() {
  if (y >= -10) {
    y -= 10;
    drawCharacter();
  }
}

document.getElementById('up').addEventListener('mousedown', up);
document.getElementById('down').addEventListener('mousedown', down);
