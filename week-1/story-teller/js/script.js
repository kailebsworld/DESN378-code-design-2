const pic = document.querySelector("#pic");
const caption = document.querySelector("#caption");
const dotsWrap = document.querySelector("#dots");
const dots = document.querySelectorAll(".dot");
const resetBtn = document.querySelector("#resetBtn");
const myBtn = document.querySelector("#myBtn");
const hint = document.querySelector("#hint");
const card = document.querySelector("#card");
const myWord = document.querySelector("#myWord");
const sub = document.querySelector("#sub");

const pics = [
  "assets/images/image-1.jpg",
  "assets/images/image-2.jpg",
  "assets/images/image-3.jpg",
  "assets/images/image-4.jpg",
  "assets/images/image-5.jpg"
];

const alts = [
  "Saturday, February 14th, Valentine's Day",
  "A bloody gloved hand reaching toward a heart on a door",
  "A heart-shaped valentine gift taped to a door with blood around it",
  "A person wearing a gas mask in a dark, bloody setting",
  "My Bloody Valentine title card"
];

const lines = [
  "Valentine’s Day.",
  "A hand??",
  "Blood???",
  "AHHHHHHHHHHHHH",
  "MY BLOODY VALENTINE."
];

let step = 0;

const stepKey = "mbv_step";
const myKey = "mbv_myWord";

let typingTimer = null;

const savedStep = localStorage.getItem(stepKey);
if (savedStep !== null) {
  const n = Number(savedStep);
  if (!Number.isNaN(n) && n >= 0 && n < pics.length) {
    step = n;
  }
}

const savedMy = localStorage.getItem(myKey);
if (savedMy && savedMy.trim().length > 0) {
  myWord.textContent = savedMy.trim().toUpperCase();
}

show(step);

pic.addEventListener("click", function () {
  if (step === pics.length - 1) {
    step = 0;
  } else {
    step = step + 1;
  }

  localStorage.setItem(stepKey, String(step));
  show(step);
});

resetBtn.addEventListener("click", function () {
  step = 0;
  localStorage.setItem(stepKey, "0");
  show(step);
});

myBtn.addEventListener("click", function () {
  const input = prompt("what should MY be? (name/nickname/whatever)");
  if (input && input.trim().length > 0) {
    const clean = input.trim().toUpperCase();
    myWord.textContent = clean;
    localStorage.setItem(myKey, clean);
  }
});

function show(i) {
  pic.src = pics[i];
  pic.alt = alts[i];

  card.classList.remove("step-1", "step-2", "step-3", "step-4", "step-5");
  card.classList.add(`step-${i + 1}`);

  hint.textContent = i === pics.length - 1 ? "click to restart" : "click";
  sub.textContent = i === pics.length - 1 ? " " : "click the image";

  updateDots(i);

  dotsWrap.classList.remove("pulseSlow", "pulseFast");
  if (i === 2) dotsWrap.classList.add("pulseSlow");
  if (i === 3) dotsWrap.classList.add("pulseFast");

  typeIt(lines[i]);

  card.classList.add("thump");
  setTimeout(function () {
    card.classList.remove("thump");
  }, 140);
}

function updateDots(i) {
  dots.forEach(function (dot, idx) {
    if (idx <= i) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function typeIt(text) {
  stopTyping();
  caption.textContent = "";

  let k = 0;
  typingTimer = setInterval(function () {
    caption.textContent = text.slice(0, k);
    k = k + 1;

    if (k > text.length) {
      stopTyping();
    }
  }, 18);
}

function stopTyping() {
  if (typingTimer !== null) {
    clearInterval(typingTimer);
    typingTimer = null;
  }
}

/*
I used AI (ChatGPT) to help me troubleshoot and improve parts of this project.
It helped me figure out the typewriter text effect, the pulsing progress dots,
and saving the current step + the “MY” header word using localStorage.
I still put everything together, tested it in the browser,
and tweaked the styling and captions to match my theme and the assignment.
*/
