let imgCount = 0;

const data = [
  {
    img: './card_img2.png',
  },
  {
    img: 'img/slide/card_img2.png',
  },
  {
    img: 'assets/img/slide/card_img3.png',
  },
  {
    img: 'assets/img/slide/card_img4.png',

  },
  {
    img: 'assets/img/slide/card_img5.png',

  },
  {
    img: 'assets/img/slide/card_img6.png',

  },
];


document.addEventListener('DOMContentLoaded', function () {
  const frames = document.querySelectorAll('.frame');

  frames.forEach((frame, index) => {
    appendCard(frame, data[index]);
    initCard(frame);
  });
});

function appendCard(frame, data) {
  const newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.style.backgroundImage = `url(${data.img})`;
  frame.appendChild(newCard);
  imgCount++;
}

function initCard(frame) {
  frame.addEventListener("pointerdown", onPointerDown);
}

let current = null;
let startX = 0,
  startY = 0,
  moveX = 0,
  moveY = 0;
let isDragging = false;

function setTransform(x, y, deg, duration) {
  current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
  if (duration) current.style.transition = `transform ${duration}ms`;
}

function onPointerDown(event) {
  current = event.currentTarget;
  startX = event.clientX;
  startY = event.clientY;
  isDragging = true;
  current.addEventListener("pointermove", onPointerMove);
  current.addEventListener("pointerup", onPointerUp);
  current.addEventListener("pointerleave", onPointerUp);
}

function onPointerMove(event) {
  if (!isDragging) return;
  moveX = event.clientX - startX;
  moveY = event.clientY - startY;
  setTransform(moveX, moveY, (moveX / window.innerWidth) * 50, 0);
}

function onPointerUp() {
  if (!isDragging) return;
  isDragging = false;
  current.removeEventListener("pointermove", onPointerMove);
  current.removeEventListener("pointerup", onPointerUp);
  current.removeEventListener("pointerleave", onPointerUp);
  if (Math.abs(moveX) > current.clientWidth / 2) {
    current.removeEventListener("pointerdown", onPointerDown);
    complete();
  } else {
    cancel();
  }
}

function complete() {
  const flyX = (Math.abs(moveX) / moveX) * window.innerWidth * 1.3;
  const flyY = (moveY / moveX) * flyX;
  setTransform(flyX, flyY, (flyX / window.innerWidth) * 50, 300);
  const prev = current;
  const next = current.previousElementSibling;
  if (next) initCard(next);
  current = next;
  appendCard(frames[frames.length - 1], data[imgCount % data.length]);
  setTimeout(() => frames[frames.length - 1].removeChild(prev), 300);
}

function cancel() {
  setTransform(0, 0, 0, 100);
  setTimeout(() => (current.style.transition = ""), 100);
}
