(() => {
  const questions = window.TRIVIA_QUESTIONS || [];
  const TOTAL = questions.length;

  const els = {
    progress: document.getElementById("progressBar"),
    progressLabel: document.getElementById("progressLabel"),
    startScreen: document.getElementById("screen-start"),
    quizScreen: document.getElementById("screen-quiz"),
    resultScreen: document.getElementById("screen-result"),
    startBtn: document.getElementById("startBtn"),
    category: document.getElementById("category"),
    question: document.getElementById("question"),
    cubes: document.getElementById("cubes"),
    scoreChip: document.getElementById("scoreChip"),
    feedback: document.getElementById("feedback"),
    feedbackTitle: document.getElementById("feedbackTitle"),
    feedbackText: document.getElementById("feedbackText"),
    nextBtn: document.getElementById("nextBtn"),
    resultRing: document.getElementById("resultRing"),
    resultScore: document.getElementById("resultScore"),
    resultTitle: document.getElementById("resultTitle"),
    resultText: document.getElementById("resultText"),
    replayBtn: document.getElementById("replayBtn"),
    shareBtn: document.getElementById("shareBtn"),
    confetti: document.getElementById("confetti"),
  };

  let index = 0;
  let score = 0;
  let locked = false;
  let order = [];
  let advanceTimer = null;

  function clearAdvanceTimer() {
    if (advanceTimer) {
      clearTimeout(advanceTimer);
      advanceTimer = null;
    }
  }

  function scheduleAdvance() {
    clearAdvanceTimer();
    advanceTimer = setTimeout(() => {
      advanceTimer = null;
      next();
    }, 2500);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    [els.startScreen, els.quizScreen, els.resultScreen].forEach((s) => s.classList.remove("active"));
    if (name === "start") els.startScreen.classList.add("active");
    if (name === "quiz") els.quizScreen.classList.add("active");
    if (name === "result") els.resultScreen.classList.add("active");
  }

  function setProgress() {
    const pct = TOTAL ? Math.round((index / TOTAL) * 100) : 0;
    els.progress.style.width = `${pct}%`;
    if (els.progressLabel) els.progressLabel.textContent = `${pct}%`;
  }

  function startGame() {
    clearAdvanceTimer();
    order = shuffle(questions.map((_, i) => i));
    index = 0;
    score = 0;
    locked = false;
    els.feedback.classList.remove("show");
    showScreen("quiz");
    renderQuestion();
  }

  function currentQuestion() {
    return questions[order[index]];
  }

  function renderQuestion() {
    clearAdvanceTimer();
    const q = currentQuestion();
    locked = false;
    els.feedback.classList.remove("show");
    setProgress();

    const renderIcon = window.renderLunaIcon || ((n) => n);
    els.category.innerHTML = `<span class="cat-icon">${renderIcon(q.categoryIcon)}</span><span>${q.category}</span>`;
    els.question.textContent = q.question;
    els.scoreChip.textContent = `שאלה ${index + 1} מתוך ${TOTAL} · ניקוד: ${score}`;

    const optionOrder = shuffle(q.options.map((opt, i) => ({ ...opt, originalIndex: i })));
    els.cubes.innerHTML = "";

    optionOrder.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `cube tone-${i % 4}`;
      btn.style.animation = "none";
      void btn.offsetWidth;
      btn.style.animation = "";
      btn.style.animationDelay = `${0.05 + i * 0.07}s`;
      btn.dataset.originalIndex = String(opt.originalIndex);
      btn.innerHTML = `
        <div class="cube-icon" aria-hidden="true">${renderIcon(opt.icon)}</div>
        <div class="cube-label">${opt.label}</div>
      `.trim();
      btn.addEventListener("pointermove", (e) => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        btn.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      });
      btn.addEventListener("click", () => onAnswer(btn, opt.originalIndex));
      els.cubes.appendChild(btn);
    });
  }

  function onAnswer(btn, chosenIndex) {
    if (locked) return;
    locked = true;

    const q = currentQuestion();
    const correct = chosenIndex === q.correctIndex;
    if (correct) score += 1;

    let correctCube = null;
    const cubes = [...els.cubes.querySelectorAll(".cube")];
    cubes.forEach((cube) => {
      cube.disabled = true;
      const oi = Number(cube.dataset.originalIndex);
      if (oi === q.correctIndex) {
        cube.classList.add("correct");
        correctCube = cube;
      } else if (cube === btn && !correct) {
        cube.classList.add("wrong");
      } else {
        cube.classList.add("dim");
      }
    });

    if (correct && correctCube) {
      celebrateCorrect(correctCube);
    }

    els.feedbackTitle.textContent = correct ? "✦ נכון! כל הכבוד" : "✦ כמעט — הנה ההישג האמיתי";
    els.feedbackText.textContent = q.fact;
    els.nextBtn.textContent = index + 1 >= TOTAL ? "עובר לתוצאות…" : "עובר הלאה…";
    els.nextBtn.disabled = true;
    els.feedback.classList.add("show");
    els.scoreChip.textContent = `שאלה ${index + 1} מתוך ${TOTAL} · ניקוד: ${score}`;
    scheduleAdvance();
  }

  function celebrateCorrect(cube) {
    cube.classList.add("celebrate");
    playCorrectSound();
    document.body.classList.add("is-celebrating");

    const rect = cube.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ["#70d1f4", "#4aa8ff", "#bd75f9", "#c45dff", "#ffffff", "#89cff0", "#1d4ed8", "#0ea5e9"];

    // remove previous celebration if still up
    document.querySelectorAll(".spark-layer, .ken-roof").forEach((el) => el.remove());

    const layer = document.createElement("div");
    layer.className = "spark-layer celebrate-bg";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);

    // full-screen confetti rain (background)
    for (let i = 0; i < 90; i += 1) {
      const bit = document.createElement("i");
      bit.className = "bg-confetti";
      bit.style.left = `${Math.random() * 100}%`;
      bit.style.background = colors[i % colors.length];
      bit.style.width = `${6 + Math.random() * 8}px`;
      bit.style.height = `${10 + Math.random() * 14}px`;
      bit.style.opacity = String(0.55 + Math.random() * 0.4);
      bit.style.animationDuration = `${1.8 + Math.random() * 2.2}s`;
      bit.style.animationDelay = `${Math.random() * 0.55}s`;
      bit.style.transform = `rotate(${Math.random() * 180}deg)`;
      layer.appendChild(bit);
    }

    // "כן. סמוטריץ" roof / gag banner
    const roof = document.createElement("div");
    roof.className = "ken-roof";
    roof.innerHTML = `
      <div class="ken-roof-inner">
        <span class="ken-roof-kicker">נכון!</span>
        <strong class="ken-roof-title">כן. סמוטריץ</strong>
        <span class="ken-roof-sub">הישג אמיתי · כל הכבוד</span>
      </div>
    `;
    document.body.appendChild(roof);
    requestAnimationFrame(() => roof.classList.add("show"));

    const pop = document.createElement("div");
    pop.className = "score-pop";
    pop.textContent = "+1";
    pop.style.left = `${cx}px`;
    pop.style.top = `${cy}px`;
    layer.appendChild(pop);

    const ring = document.createElement("div");
    ring.className = "burst-ring";
    ring.style.left = `${cx}px`;
    ring.style.top = `${cy}px`;
    layer.appendChild(ring);

    const ring2 = document.createElement("div");
    ring2.className = "burst-ring burst-ring-delay";
    ring2.style.left = `${cx}px`;
    ring2.style.top = `${cy}px`;
    layer.appendChild(ring2);

    for (let i = 0; i < 28; i += 1) {
      const spark = document.createElement("i");
      spark.className = i % 3 === 0 ? "spark star" : "spark";
      const angle = (Math.PI * 2 * i) / 28 + Math.random() * 0.35;
      const dist = 70 + Math.random() * 110;
      spark.style.left = `${cx}px`;
      spark.style.top = `${cy}px`;
      spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      spark.style.background = colors[i % colors.length];
      spark.style.animationDelay = `${Math.random() * 0.08}s`;
      layer.appendChild(spark);
    }

    for (let i = 0; i < 24; i += 1) {
      const bit = document.createElement("i");
      bit.className = "spark confetti-bit";
      bit.style.left = `${cx + (Math.random() - 0.5) * rect.width}px`;
      bit.style.top = `${cy - 8}px`;
      bit.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
      bit.style.setProperty("--dy", `${90 + Math.random() * 120}px`);
      bit.style.background = colors[i % colors.length];
      bit.style.animationDelay = `${0.05 + Math.random() * 0.2}s`;
      layer.appendChild(bit);
    }

    setTimeout(() => {
      roof.classList.remove("show");
      roof.classList.add("hide");
    }, 2200);

    setTimeout(() => {
      layer.remove();
      roof.remove();
      cube.classList.remove("celebrate");
      document.body.classList.remove("is-celebrating");
    }, 2800);
  }

  function playCorrectSound() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = playCorrectSound._ctx || new Ctx();
      playCorrectSound._ctx = ctx;
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5 E5 G5
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02 + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28 + i * 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + 0.35 + i * 0.05);
      });
    } catch (_) {
      /* ignore audio errors */
    }
  }

  function next() {
    clearAdvanceTimer();
    els.nextBtn.disabled = false;
    index += 1;
    if (index >= TOTAL) {
      finish();
      return;
    }
    renderQuestion();
  }

  function finish() {
    els.progress.style.width = "100%";
    if (els.progressLabel) els.progressLabel.textContent = "100%";
    showScreen("result");

    const pct = Math.round((score / TOTAL) * 100);
    els.resultRing.style.setProperty("--p", `${pct}%`);
    els.resultScore.innerHTML = `${score}<small>מתוך ${TOTAL}</small>`;

    let title = "כל הכבוד!";
    let text = "למדת הישגים חשובים של הציונות הדתית — כלכלה חזקה וביטחון ללא פשרות.";

    if (pct === 100) {
      title = "אלוף ההישגים!";
      text = "ידעת הכול. אתה מכיר את העשייה שלנו לעומק — כלכלה, משפחות וביטחון.";
      burstConfetti();
    } else if (pct >= 70) {
      title = "מרשים מאוד!";
      text = "יש לך אצבע על הדופק. המפלגה מובילה מהלכים שמרגישים בכיס ובביטחון.";
      burstConfetti();
    } else if (pct >= 40) {
      title = "יפה, יש לאן להתקדם";
      text = "כמה עובדות חדשות נכנסו — והן מראות עשייה חיובית למען האזרחים.";
    } else {
      title = "עכשיו אתה מעודכן";
      text = "כל תשובה פתחה הישג אמיתי. שווה לשתף ולשחק שוב!";
    }

    els.resultTitle.textContent = title;
    els.resultText.textContent = text;
  }

  function burstConfetti() {
    els.confetti.innerHTML = "";
    const colors = ["#70d1f4", "#4aa8ff", "#bd75f9", "#c45dff", "#89cff0", "#ffffff"];
    for (let i = 0; i < 42; i += 1) {
      const piece = document.createElement("i");
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDuration = `${1.8 + Math.random() * 1.8}s`;
      piece.style.animationDelay = `${Math.random() * 0.35}s`;
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      els.confetti.appendChild(piece);
    }
    setTimeout(() => {
      els.confetti.innerHTML = "";
    }, 4200);
  }

  async function share() {
    const text = `קיבלתי ${score}/${TOTAL} במשחק ההישגים של הציונות הדתית! כמה אתה יודע?`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "כמה אתה יודע?", text, url: location.href });
        return;
      }
    } catch (_) {
      /* user cancelled */
      return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${location.href}`);
      els.shareBtn.textContent = "הועתק!";
      setTimeout(() => {
        els.shareBtn.textContent = "שתף תוצאה";
      }, 1600);
    } catch (_) {
      alert(text);
    }
  }

  const lunaModal = document.getElementById("lunaModal");
  const lunaFooterBtn = document.getElementById("lunaFooterBtn");

  function openLunaModal() {
    if (!lunaModal) return;
    lunaModal.hidden = false;
    document.body.classList.add("luna-modal-open");
  }

  function closeLunaModal() {
    if (!lunaModal) return;
    lunaModal.hidden = true;
    document.body.classList.remove("luna-modal-open");
  }

  if (lunaFooterBtn) {
    lunaFooterBtn.addEventListener("click", openLunaModal);
  }
  if (lunaModal) {
    lunaModal.querySelectorAll("[data-close-luna-modal]").forEach((el) => {
      el.addEventListener("click", closeLunaModal);
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLunaModal();
  });

  els.startBtn.addEventListener("click", startGame);
  els.nextBtn.addEventListener("click", next);
  els.replayBtn.addEventListener("click", startGame);
  els.shareBtn.addEventListener("click", share);

  const heroCubes = document.getElementById("heroCubes");
  if (heroCubes && window.renderLunaIcon) {
    ["chart", "shield", "home", "medal"].forEach((name) => {
      const el = document.createElement("div");
      el.className = "float-cube";
      el.innerHTML = window.renderLunaIcon(name);
      heroCubes.appendChild(el);
    });
  }

  setProgress();
})();
