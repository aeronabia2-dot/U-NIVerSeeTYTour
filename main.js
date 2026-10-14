document.documentElement.classList.add("js");

const PROGRAMS = [
  { name: "BS Information Technology", college: "College of Computing and Information Sciences", icon: "◇", field: "Technology",
    summary: "Build software, networks, and systems people rely on.", interests: ["Technology", "Problem solving", "Programming"],
    study: ["Programming and databases", "Networking and cybersecurity", "Web and mobile development"],
    hard: ["Long debugging sessions", "Math-heavy logic courses", "Constant need to learn new tools"],
    careers: ["Software developer", "Systems administrator", "IT support specialist"] },
  { name: "BSEd Social Studies", college: "College of Education", icon: "Aa", field: "Education",
    summary: "Teach history, civics, and culture to the next generation.", interests: ["Teaching", "Society", "Storytelling"],
    study: ["Philippine and world history", "Teaching methods", "Practice teaching in real classrooms"],
    hard: ["Heavy reading and writing", "Lesson planning workload", "Managing a classroom"],
    careers: ["Secondary school teacher", "Education program staff", "Curriculum writer"] },
  { name: "BS Nursing", college: "College of Health Sciences", icon: "✚", field: "Healthcare",
    summary: "Care for patients and communities with skill and compassion.", interests: ["Helping people", "Science", "Care"],
    study: ["Anatomy and physiology", "Clinical practice", "Community health"],
    hard: ["Long hospital duty hours", "Demanding licensure exam", "Emotional weight of patient care"],
    careers: ["Staff nurse", "Community health nurse", "Nurse educator"] },
  { name: "BS Criminology", college: "College of Criminal Justice Education", icon: "§", field: "Public safety",
    summary: "Understand crime, law, and how communities stay safe.", interests: ["Investigation", "Law", "Public safety"],
    study: ["Criminal law and procedure", "Forensic science basics", "Crime prevention"],
    hard: ["Physical training requirements", "Memorizing legal codes", "Strict discipline"],
    careers: ["Police officer", "Investigator", "Security manager"] },
  { name: "BS Accountancy", college: "College of Management", icon: "%", field: "Business & finance",
    summary: "Turn financial details into trustworthy decisions.", interests: ["Business", "Numbers", "Analysis"],
    study: ["Financial accounting", "Auditing and taxation", "Business law"],
    hard: ["Very demanding course load", "Detail-heavy exams", "High retention standards"],
    careers: ["Accountant", "Auditor", "Finance analyst"] },
  { name: "BS Civil Engineering", college: "College of Engineering and Architecture", icon: "△", field: "Engineering & construction",
    summary: "Plan and create safer structures and communities.", interests: ["Engineering", "Building things", "Mathematics"],
    study: ["Calculus and physics", "Structural design", "Surveying and fieldwork"],
    hard: ["Advanced mathematics", "Long design projects", "Fieldwork in hot weather"],
    careers: ["Site engineer", "Structural designer", "Project supervisor"] },
  { name: "BA Communication", college: "College of Arts and Sciences", icon: "✦", field: "Media & communication",
    summary: "Shape clear stories across media, communities, and organizations.", interests: ["Media", "Storytelling", "Design"],
    study: ["Writing and public speaking", "Media production", "Communication research"],
    hard: ["Tight production deadlines", "Public presentations", "Constant feedback on creative work"],
    careers: ["Journalist", "Public information officer", "Content producer"] },
  { name: "BS Agriculture", college: "College of Agriculture and Technology", icon: "✿", field: "Agriculture & environment",
    summary: "Use science and enterprise to strengthen food systems.", interests: ["Environment", "Science", "Food systems"],
    study: ["Crop and soil science", "Farm management", "Agribusiness"],
    hard: ["Outdoor field practicals", "Seasonal project schedules", "Science-heavy lab work"],
    careers: ["Agriculturist", "Farm manager", "Extension officer"] },
];

const QUIZ = [
  ["Which activity sounds most satisfying?", [["Solving a technical puzzle", ["Technology", "Problem solving", "Programming"]], ["Explaining an idea to someone", ["Teaching", "Storytelling", "Society"]], ["Helping someone through a difficult moment", ["Helping people", "Care"]], ["Investigating how or why something happened", ["Investigation", "Law", "Analysis"]]]],
  ["Which school subject do you enjoy most?", [["Math and physics", ["Mathematics", "Engineering", "Numbers"]], ["History and social studies", ["Society", "Teaching", "Law"]], ["Biology and science", ["Science", "Care", "Environment"]], ["English and media", ["Media", "Storytelling", "Design"]]]],
  ["Where would you rather work?", [["On a laptop, building something", ["Technology", "Programming", "Design"]], ["Outdoors, in the field", ["Environment", "Building things", "Food systems"]], ["With people, face to face", ["Helping people", "Teaching", "Public safety"]], ["In an office with numbers and plans", ["Business", "Numbers", "Analysis"]]]],
  ["What kind of challenge do you handle best?", [["A tough problem with no clear answer", ["Problem solving", "Engineering", "Investigation"]], ["A crowd that needs guidance", ["Teaching", "Public safety", "Helping people"]], ["A pile of data to make sense of", ["Numbers", "Analysis", "Business"]], ["A blank page to fill", ["Storytelling", "Media", "Design"]]]],
  ["What do you want your work to give others?", [["Safer places to live", ["Building things", "Public safety", "Engineering"]], ["Better health and care", ["Care", "Helping people", "Science"]], ["Knowledge and new skills", ["Teaching", "Society", "Storytelling"]], ["Food, jobs, and opportunity", ["Food systems", "Business", "Environment"]]]],
  ["Which group project role fits you?", [["The builder who makes it work", ["Technology", "Building things", "Programming"]], ["The presenter who tells the story", ["Media", "Storytelling", "Teaching"]], ["The researcher who finds the facts", ["Investigation", "Science", "Analysis"]], ["The organizer who keeps things on track", ["Business", "Numbers", "Law"]]]],
];

const $ = (s, r = document) => r.querySelector(s);
const grid = $("#program-grid"), dialog = $("#program-dialog"), dialogContent = $("#dialog-content");
const filters = { search: $("#program-search"), college: $("#college-filter"), interest: $("#interest-filter"), career: $("#career-filter") };

/* nav */
const menuBtn = $(".menu-button"), navLinks = $("#nav-links");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
$("#year").textContent = new Date().getFullYear();

/* reveal */
const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* explorer */
const uniq = (arr) => [...new Set(arr)].sort();
const fill = (sel, values) => values.forEach((v) => sel.add(new Option(v, v)));
fill(filters.college, uniq(PROGRAMS.map((p) => p.college)));
fill(filters.interest, uniq(PROGRAMS.flatMap((p) => p.interests)));
fill(filters.career, uniq(PROGRAMS.map((p) => p.field)));

function renderPrograms() {
  const q = filters.search.value.trim().toLowerCase();
  const list = PROGRAMS.filter((p) => {
    const hay = [p.name, p.college, p.summary, p.field, ...p.interests, ...p.careers].join(" ").toLowerCase();
    return (!q || hay.includes(q)) && (!filters.college.value || p.college === filters.college.value) &&
      (!filters.interest.value || p.interests.includes(filters.interest.value)) && (!filters.career.value || p.field === filters.career.value);
  });
  $("#results-count").textContent = `${list.length} program${list.length === 1 ? "" : "s"} to explore`;
  grid.innerHTML = list.length ? list.map((p) => `
    <button class="program-card" type="button" data-name="${p.name}">
      <div class="card-top"><span class="program-icon" aria-hidden="true">${p.icon}</span><span class="badge">Bachelor's</span></div>
      <h3>${p.name}</h3><p class="program-college">${p.college}</p>
      <p class="program-summary">${p.summary}</p>
      <ul class="tags">${p.interests.map((t) => `<li>${t}</li>`).join("")}</ul>
      <span class="card-link">View program <span aria-hidden="true">↗</span></span>
    </button>`).join("") : `<p class="empty-state">No programs match yet. Try a broader word or clear the filters.</p>`;
}
Object.values(filters).forEach((f) => f.addEventListener("input", renderPrograms));
$("#clear-filters").addEventListener("click", () => { Object.values(filters).forEach((f) => (f.value = "")); renderPrograms(); });
renderPrograms();

/* dialog */
function openProgram(name) {
  const p = PROGRAMS.find((x) => x.name === name);
  if (!p) return;
  const block = (title, items, cls = "") => `<div class="dialog-block ${cls}"><h3>${title}</h3><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`;
  dialogContent.innerHTML = `<h2 id="dialog-title">${p.name}</h2><p class="dialog-college">${p.college}</p><p>${p.summary}</p>
    ${block("What you'll study", p.study)}${block("What gets difficult", p.hard, "hard")}${block("Where it can lead", p.careers)}
    <p class="quiz-note" style="margin-top:1.5rem">Sample information. Confirm details with NwSSU.</p>`;
  dialog.showModal();
}
grid.addEventListener("click", (e) => { const c = e.target.closest(".program-card"); if (c) openProgram(c.dataset.name); });
$(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

/* quiz */
let step = 0, picked = [];
const quizContent = $("#quiz-content"), bar = $("#quiz-progress"), label = $("#quiz-progress-label"), restart = $("#quiz-restart");

function renderQuiz() {
  if (step >= QUIZ.length) return renderResults();
  const [q, opts] = QUIZ[step];
  label.textContent = `Question ${step + 1} of ${QUIZ.length}`;
  bar.style.width = `${((step + 1) / QUIZ.length) * 100}%`;
  restart.classList.toggle("hidden", step === 0);
  quizContent.innerHTML = `<h3 class="quiz-question">${q}</h3><div class="quiz-options">${opts.map((o, i) =>
    `<button class="quiz-option" type="button" data-i="${i}"><span>${"ABCD"[i]}</span>${o[0]}</button>`).join("")}</div>`;
}
function renderResults() {
  label.textContent = "Your results";
  bar.style.width = "100%";
  restart.classList.remove("hidden");
  const ranked = PROGRAMS.map((p) => ({ p, score: p.interests.reduce((s, t) => s + picked.filter((x) => x === t).length, 0) }))
    .sort((a, b) => b.score - a.score).slice(0, 3);
  quizContent.innerHTML = `<h3 class="quiz-question">Three programs to explore.</h3>
    <div class="result-list">${ranked.map(({ p }) => `<div class="result-item"><div><b>${p.name}</b><small>${p.college}</small></div><button type="button" data-name="${p.name}">Explore</button></div>`).join("")}</div>
    <p class="quiz-note">These are starting points, not decisions. Open each program to see the hard parts too.</p>`;
}
quizContent.addEventListener("click", (e) => {
  const o = e.target.closest(".quiz-option"), r = e.target.closest(".result-item button");
  if (o) { picked.push(...QUIZ[step][1][o.dataset.i][1]); step++; renderQuiz(); }
  if (r) openProgram(r.dataset.name);
});
restart.addEventListener("click", () => { step = 0; picked = []; renderQuiz(); });
renderQuiz();
