import './style.css';
import './styles/animations.css';

const stage = document.getElementById('stage');
const button = document.getElementById('slap-btn');
const bubbleBf = document.getElementById('bubble-bf');
const impact = document.getElementById('impact');

const SLAP_MS = 700;
const BF_LINES = ["I'm sorry... 🥺", 'Ow!! 😵', "I deserved that... 😭", 'Please... 🥲', 'Okay okay!! 😖', 'Mercy!! 🙏'];
let hitCount = 0;
let resetTimer = 0;

/* ---------- Sound: synthesized cartoon slap (no files, no network) ---------- */
let audioCtx = null;
let noiseBuffer = null;

function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
    const len = Math.floor(audioCtx.sampleRate * 0.25);
    noiseBuffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playSlap() {
  const ctx = ensureAudio();
  if (!ctx) return;
  const t = ctx.currentTime;
  const jitter = 0.9 + Math.random() * 0.25; // vary pitch so spam doesn't sound robotic

  // sharp "crack": band-passed noise burst
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 2400 * jitter;
  bp.Q.value = 0.8;
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(1.0, t);
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  noise.connect(bp).connect(ng).connect(ctx.destination);
  noise.start(t);
  noise.stop(t + 0.15);

  // body "pop": quick falling sine
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(520 * jitter, t);
  osc.frequency.exponentialRampToValueAtTime(90, t + 0.14);
  const og = ctx.createGain();
  og.gain.setValueAtTime(0.9, t);
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
  osc.connect(og).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.2);

  // cartoon "boing" tail
  const boing = ctx.createOscillator();
  boing.type = 'triangle';
  boing.frequency.setValueAtTime(260 * jitter, t + 0.05);
  boing.frequency.exponentialRampToValueAtTime(620 * jitter, t + 0.22);
  const bg = ctx.createGain();
  bg.gain.setValueAtTime(0.0001, t + 0.05);
  bg.gain.exponentialRampToValueAtTime(0.25, t + 0.08);
  bg.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
  boing.connect(bg).connect(ctx.destination);
  boing.start(t + 0.05);
  boing.stop(t + 0.3);
}

/* ---------- Slap: restart all CSS animations on every click ---------- */
function slap() {
  playSlap();

  hitCount += 1;
  bubbleBf.textContent = BF_LINES[hitCount % BF_LINES.length];

  // Remove -> reflow -> add restarts every keyframe animation from 0 with no
  // accumulated transforms (animations own the transforms; nothing is left over).
  stage.classList.remove('slapping');
  // Alternate the burst variant so consecutive hits never look identical.
  impact.style.setProperty('--tilt', `${(Math.random() * 30 - 15).toFixed(1)}deg`);
  void stage.offsetWidth;
  stage.classList.add('slapping');

  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => stage.classList.remove('slapping'), SLAP_MS + 100);
}

button.addEventListener('pointerdown', ensureAudio, { passive: true });
button.addEventListener('click', slap);
// Keyboard: Space/Enter fire click natively; allow holding to spam via repeat.
