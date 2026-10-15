document.documentElement.classList.add("js");

/* Colleges */
const CAT = "College of Agriculture and Technology (CAT)";
const CCIS = "College of Computing and Information Sciences (CCIS)";
const CCJS = "College of Criminal Justice Education (CCJS)";
const COE = "College of Education";
const CEA = "College of Engineering and Architecture (CEA)";
const COM = "College of Management (COM)";

const P = (name, college, icon, field, summary, interests, study, hard, careers) =>
  ({ name, college, icon, field, summary, interests, study, hard, careers });

const PROGRAMS = [
  /* CAT */
  P("BS Agriculture", CAT, "✿", "Agriculture & environment",
    "Use science and enterprise to strengthen food systems. Majors: Agronomy, Animal Science, Horticulture.",
    ["Environment", "Science", "Food systems"],
    ["Crop and soil science", "Animal production and care", "Horticulture and farm management"],
    ["Outdoor field practicals", "Seasonal project schedules", "Science-heavy lab work"],
    ["Agriculturist", "Farm manager", "Extension officer"]),
  P("Bachelor of Agricultural Technology", CAT, "⚙", "Agriculture & environment",
    "Learn the tools, methods, and practical skills that modernize farming.",
    ["Building things", "Environment", "Food systems"],
    ["Farm technology and mechanization", "Crop and livestock production", "Agri-enterprise basics"],
    ["Hands-on fieldwork", "Technical equipment training", "Weather-dependent schedules"],
    ["Agricultural technician", "Farm supervisor", "Agri-enterprise owner"]),
  P("BS Food Technology", CAT, "◍", "Agriculture & environment",
    "Turn raw ingredients into safe, shelf-ready food products.",
    ["Science", "Food systems", "Problem solving"],
    ["Food chemistry and microbiology", "Food processing and preservation", "Quality control and food safety"],
    ["Chemistry-heavy subjects", "Long laboratory sessions", "Strict safety standards"],
    ["Food technologist", "Quality assurance officer", "Product developer"]),

  /* CCIS */
  P("BS Computer Science", CCIS, "◈", "Technology",
    "Understand how computing works, from algorithms to intelligent systems.",
    ["Technology", "Programming", "Mathematics", "Problem solving"],
    ["Algorithms and data structures", "Programming languages", "Computer systems and theory"],
    ["Math-heavy logic courses", "Abstract, theory-based subjects", "Long debugging sessions"],
    ["Software engineer", "Systems analyst", "Data or AI developer"]),
  P("BS Information Technology", CCIS, "◇", "Technology",
    "Build software, networks, and systems people rely on.",
    ["Technology", "Problem solving", "Programming"],
    ["Programming and databases", "Networking and cybersecurity", "Web and mobile development"],
    ["Long debugging sessions", "Math-heavy logic courses", "Constant need to learn new tools"],
    ["Software developer", "Systems administrator", "IT support specialist"]),
  P("BS Information Systems", CCIS, "▣", "Technology",
    "Connect technology with how organizations actually run.",
    ["Technology", "Business", "Analysis"],
    ["Systems analysis and design", "Databases and business processes", "IT project management"],
    ["Balancing tech and business topics", "Heavy documentation", "Group project coordination"],
    ["Systems analyst", "Business analyst", "IT project coordinator"]),

  /* CCJS */
  P("BS Criminology", CCJS, "§", "Public safety",
    "Understand crime, law, and how communities stay safe.",
    ["Investigation", "Law", "Public safety"],
    ["Criminal law and procedure", "Forensic science basics", "Crime prevention"],
    ["Physical training requirements", "Memorizing legal codes", "Strict discipline"],
    ["Police officer", "Investigator", "Security manager"]),
  P("BS Development Communication", CCJS, "✦", "Media & community",
    "Use media and communication to support community and national development.",
    ["Media", "Storytelling", "Society"],
    ["Writing and public speaking", "Media and campaign production", "Communication for development"],
    ["Tight production deadlines", "Public presentations", "Fieldwork in communities"],
    ["Development communicator", "Public information officer", "Content producer"]),
  P("BS Community Development", CCJS, "⌂", "Media & community",
    "Work with communities to plan and carry out programs that improve lives.",
    ["Society", "Helping people", "Care"],
    ["Community organizing", "Program planning and evaluation", "Social research methods"],
    ["Extended community immersion", "Emotionally demanding fieldwork", "Slow, long-term results"],
    ["Community development worker", "Program coordinator", "NGO staff"]),
  P("BS Environmental Science", CCJS, "❦", "Agriculture & environment",
    "Study natural systems and find ways to protect them.",
    ["Environment", "Science", "Analysis"],
    ["Ecology and environmental chemistry", "Environmental laws and policy", "Field sampling and monitoring"],
    ["Science-heavy lab and field work", "Data-heavy reports", "Outdoor work in rough conditions"],
    ["Environmental officer", "Conservation worker", "Environmental monitoring staff"]),
  P("BS Law Enforcement Administration", CCJS, "⚑", "Public safety",
    "Learn how to manage and lead law enforcement operations.",
    ["Law", "Public safety", "Business"],
    ["Police administration and operations", "Law enforcement laws and ethics", "Leadership and public safety planning"],
    ["Strict discipline", "Physical and fitness requirements", "Large volume of legal reading"],
    ["Law enforcement officer", "Operations planner", "Public safety administrator"]),
  P("BS Industrial Security Management", CCJS, "⛨", "Public safety",
    "Protect people, property, and operations in industries and institutions.",
    ["Public safety", "Law", "Investigation"],
    ["Security planning and risk assessment", "Industrial safety and loss prevention", "Security laws and regulations"],
    ["Strict discipline", "Detailed security procedures", "Alertness-demanding training"],
    ["Security manager", "Loss prevention officer", "Safety and security supervisor"]),

  /* Education */
  P("Bachelor of Elementary Education (BEED)", COE, "Aa", "Education",
    "Teach and guide young learners through their first years of school.",
    ["Teaching", "Helping people", "Care"],
    ["Child development and learning", "Teaching methods across subjects", "Practice teaching in real classrooms"],
    ["Lesson planning workload", "Managing young learners", "Licensure exam preparation"],
    ["Elementary school teacher", "Learning facilitator", "Education program staff"]),
  P("BSEd (Secondary Education)", COE, "✎", "Education",
    "Teach high school students in your chosen subject. Majors: Mathematics, English, Science, Social Studies, Filipino, Values Education.",
    ["Teaching", "Society", "Storytelling"],
    ["Your major subject in depth", "Teaching methods and assessment", "Practice teaching in real classrooms"],
    ["Mastering both content and teaching", "Lesson planning workload", "Managing a classroom"],
    ["Secondary school teacher", "Curriculum writer", "Education program staff"]),
  P("Bachelor of Physical Education (BPED)", COE, "◎", "Education",
    "Teach movement, sports, and healthy living.",
    ["Teaching", "Helping people", "Public safety"],
    ["Sports and movement skills", "Physical fitness and wellness", "Coaching and teaching methods"],
    ["Demanding physical activity", "Outdoor and weather-exposed practice", "Balancing theory with performance"],
    ["PE teacher", "Sports coach", "Fitness and wellness instructor"]),
  P("Bachelor of Technical-Vocational Teacher Education (BTVTED)", COE, "⚒", "Education",
    "Teach practical, job-ready skills in technical and vocational fields.",
    ["Teaching", "Building things", "Technology"],
    ["Technical-vocational skills training", "Teaching methods and assessment", "Practice teaching in training settings"],
    ["Learning a trade and teaching it", "Hands-on workshop requirements", "Lesson planning workload"],
    ["Technical-vocational teacher", "Skills trainer", "Livelihood program trainer"]),
  P("Bachelor of Technology and Livelihood Education (BTLED)", COE, "✂", "Education",
    "Teach livelihood and technology skills. Major: Information and Communication Technology (ICT).",
    ["Teaching", "Technology", "Building things"],
    ["ICT and computer skills", "Livelihood education subjects", "Teaching methods and practice teaching"],
    ["Keeping up with changing technology", "Hands-on skill requirements", "Lesson planning workload"],
    ["TLE or ICT teacher", "Livelihood skills trainer", "School ICT coordinator"]),

  /* CEA */
  P("BS Mechanical Engineering", CEA, "⚙", "Engineering & construction",
    "Design and improve machines, engines, and energy systems.",
    ["Engineering", "Mathematics", "Building things"],
    ["Thermodynamics and mechanics", "Machine design", "Power plants and manufacturing"],
    ["Advanced mathematics and physics", "Heavy design projects", "Demanding licensure exam"],
    ["Mechanical engineer", "Plant engineer", "Maintenance supervisor"]),
  P("BS Electrical Engineering", CEA, "ϟ", "Engineering & construction",
    "Power homes, industries, and cities with safe electrical systems.",
    ["Engineering", "Mathematics", "Problem solving"],
    ["Circuits and electrical machines", "Power systems", "Electrical design and safety"],
    ["Advanced mathematics and physics", "Abstract circuit analysis", "Demanding licensure exam"],
    ["Electrical engineer", "Power systems designer", "Project engineer"]),
  P("BS Electronics Engineering", CEA, "◉", "Engineering & construction",
    "Work with electronics, communication systems, and smart devices.",
    ["Engineering", "Technology", "Mathematics"],
    ["Electronics and circuit design", "Communication systems", "Embedded systems and signals"],
    ["Advanced mathematics and physics", "Long lab and design work", "Demanding licensure exam"],
    ["Electronics engineer", "Telecommunications engineer", "Systems designer"]),
  P("BS Computer Engineering", CEA, "▤", "Engineering & construction",
    "Combine hardware and software to build intelligent devices.",
    ["Engineering", "Technology", "Programming"],
    ["Digital logic and computer architecture", "Programming and embedded systems", "Networks and hardware design"],
    ["Mix of math, hardware, and code", "Long debugging and lab sessions", "Demanding licensure exam"],
    ["Computer engineer", "Embedded systems developer", "Network engineer"]),
  P("BS Architecture", CEA, "⌂", "Engineering & construction",
    "Design buildings and spaces that are useful, safe, and beautiful.",
    ["Design", "Building things", "Engineering"],
    ["Architectural design studios", "Building technology and structures", "History and theory of architecture"],
    ["Long hours on design plates", "Heavy drawing and model-making", "Frequent critiques of your work"],
    ["Architect", "Architectural designer", "Construction project planner"]),
  P("BS Civil Engineering", CEA, "△", "Engineering & construction",
    "Plan and create safer structures and communities.",
    ["Engineering", "Building things", "Mathematics"],
    ["Calculus and physics", "Structural design", "Surveying and fieldwork"],
    ["Advanced mathematics", "Long design projects", "Fieldwork in hot weather"],
    ["Site engineer", "Structural designer", "Project supervisor"]),

  /* COM */
  P("BS Entrepreneurship", COM, "★", "Business & hospitality",
    "Learn to start, run, and grow your own business.",
    ["Business", "Problem solving", "Numbers"],
    ["Business planning and venture creation", "Marketing and finance basics", "Running a small enterprise"],
    ["Risk and uncertainty", "Business plan and project requirements", "Balancing many skills at once"],
    ["Business owner", "Business development staff", "Enterprise consultant"]),
  P("BS Office Administration", COM, "▦", "Business & hospitality",
    "Keep organizations running with strong office and records skills.",
    ["Business", "Analysis", "Technology"],
    ["Office management and records", "Business communication", "Office software and systems"],
    ["Detail-heavy tasks", "Strict deadlines", "Handling many responsibilities at once"],
    ["Office administrator", "Executive assistant", "Records officer"]),
  P("BS Hospitality Management", COM, "☖", "Business & hospitality",
    "Prepare to run hotels, restaurants, and guest-service operations.",
    ["Business", "Helping people", "Teaching"],
    ["Food and beverage service", "Hotel and front office operations", "Hospitality marketing and management"],
    ["Long on-the-job training hours", "Working during peak seasons", "Constant guest-service pressure"],
    ["Hotel or restaurant supervisor", "Front office staff", "Events coordinator"]),
  P("BS Business Administration (Marketing Management)", COM, "↗", "Business & hospitality",
    "Understand customers and build strategies that sell products and ideas.",
    ["Business", "Media", "Analysis"],
    ["Marketing principles and consumer behavior", "Sales and brand management", "Market research"],
    ["Mix of creative and numbers-based work", "Group projects and presentations", "Fast-changing markets"],
    ["Marketing officer", "Sales manager", "Brand or market researcher"]),
  P("BS Tourism Management", COM, "✈", "Business & hospitality",
    "Help travelers discover destinations and run tourism services.",
    ["Business", "Helping people", "Storytelling"],
    ["Tourism planning and destinations", "Travel and tour operations", "Customer service and culture"],
    ["On-the-job training schedules", "Working holidays and peak seasons", "Constant customer interaction"],
    ["Tour coordinator", "Travel consultant", "Tourism officer"]),
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
const countEl = $("#program-count");
if (countEl) countEl.textContent = PROGRAMS.length;

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


/* Student & Graduate Voices — frontend-only demonstration */
(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const dialog = $("#feedback-dialog");
  const form = $("#feedback-form");
  const openButton = $("#open-feedback");
  if (!dialog || !form || !openButton) return;

  const search = $("#voice-search");
  const category = $("#voice-category");
  const cards = [...document.querySelectorAll(".voice-card")];
  const empty = $("#voices-empty");
  const resultsCount = $("#voice-results-count");
  const status = $("#feedback-status");
  const textFields = [
    ["role", $("#feedback-role")],
    ["category", $("#feedback-category")],
    ["experience", $("#feedback-experience")],
    ["consent", $("#feedback-consent")]
  ];

  function filterStories() {
    const term = (search.value || "").trim().toLocaleLowerCase();
    const chosen = category.value;
    let shown = 0;
    cards.forEach((card) => {
      const matchesCategory = !chosen || card.dataset.category === chosen;
      const matchesSearch = !term || `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase().includes(term);
      const visible = matchesCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) shown++;
    });
    resultsCount.textContent = `${shown} demo example${shown === 1 ? "" : "s"}`;
    empty.hidden = shown !== 0;
  }
  search.addEventListener("input", filterStories);
  category.addEventListener("change", filterStories);
  $("#clear-voice-filters").addEventListener("click", () => {
    search.value = "";
    category.value = "";
    filterStories();
    search.focus();
  });

  document.querySelectorAll("[data-demo-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".voice-card");
      const details = $(".voice-expanded", card);
      const opening = details.hidden;
      details.hidden = !opening;
      button.textContent = opening ? "Show less" : "Read prompt";
      button.setAttribute("aria-expanded", String(opening));
    });
  });

  function openForm() {
    status.hidden = true;
    status.textContent = "";
    dialog.showModal();
  }
  openButton.addEventListener("click", openForm);
  $("#close-feedback").addEventListener("click", () => dialog.close());
  $("#cancel-feedback").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const experience = $("#feedback-experience");
  const suggestions = $("#feedback-suggestions");
  const updateCount = (field, output) => { $(output).textContent = String(field.value.length); };
  experience.addEventListener("input", () => updateCount(experience, "#experience-count"));
  suggestions.addEventListener("input", () => updateCount(suggestions, "#suggestions-count"));

  function setError(name, message) {
    const field = form.elements.namedItem(name);
    const error = $(`#error-${name}`);
    if (error) error.textContent = message;
    if (field && field.classList) {
      field.classList.toggle("feedback-invalid", Boolean(message));
      if (message) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
    }
  }
  function clearErrors() {
    ["role", "displayName", "category", "experience", "suggestions", "consent"].forEach((name) => setError(name, ""));
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    status.hidden = true;
    let valid = true;
    const role = $("#feedback-role").value;
    const displayName = $("#feedback-name").value.trim();
    const chosenCategory = $("#feedback-category").value;
    const story = experience.value.trim();
    const suggestion = suggestions.value.trim();
    const consent = $("#feedback-consent").checked;

    if (!["Current Student", "Graduate"].includes(role)) { setError("role", "Choose Current Student or Graduate."); valid = false; }
    if (displayName.length > 60) { setError("displayName", "Display name must be 60 characters or fewer."); valid = false; }
    if (!["Educational Guidance", "Learning Opportunities", "Academic Support", "Peer Connections", "University Involvement", "Other"].includes(chosenCategory)) { setError("category", "Choose an experience category."); valid = false; }
    if (story.length < 30 || story.length > 1500) { setError("experience", "Please enter 30–1,500 characters about your experience."); valid = false; }
    if (suggestion.length > 800) { setError("suggestions", "Suggestions must be 800 characters or fewer."); valid = false; }
    if (!consent) { setError("consent", "Please confirm the privacy and moderation statement before continuing."); valid = false; }

    if (!valid) {
      status.className = "feedback-status is-error";
      status.innerHTML = "<strong>Please check the highlighted fields.</strong> Your response has not been submitted.";
      status.hidden = false;
      const firstInvalid = form.querySelector('[aria-invalid="true"]') || $("#feedback-consent");
      firstInvalid.focus();
      return;
    }

    /* No network request is made and no user content is inserted into the page.
       A production version must POST to a secure backend and store as pending moderation. */
    status.className = "feedback-status";
    status.innerHTML = "<strong>Demo form validated — not sent or saved.</strong>Your response passed the browser checks, but this landing page has no submission server or database. Nothing has been published. Connect a secure backend and moderation queue before collecting real feedback.";
    status.hidden = false;
    status.focus?.();
  });

  filterStories();
})();

