const projects = [
  {
    slug: "trust-verification-copy",
    label: "Trust & verification",
    title: "Designing trust-building verification copy",
    type: "Flagship case study",
    role: "UX writer/content designer",
    context: "Confidential fintech onboarding and identity verification flow",
    summary:
      "Improved a sensitive verification flow with progressive disclosure, field-level guidance, and reassurance copy that helped users understand why personal information was required.",
    artifact: "assets/trust-verification-mockup.png",
    artifactAlt: "Anonymized verification screen showing field-level support and trust-building copy.",
    sections: [
      {
        heading: "The Challenge",
        body: [
          "Users were dropping off during onboarding when asked to provide sensitive personal details. The flow needed to meet verification and regulatory requirements, but the content did not give users enough context to understand why the information was needed or how it would be used.",
          "The content challenge was to make the verification flow feel clear, secure, and respectful without overloading users with legal or compliance-heavy language."
        ]
      },
      {
        heading: "My Role",
        list: [
          "Collaborated with the product designer on content placement and interaction patterns.",
          "Explored UX text options for sensitive moments in the flow.",
          "Recommended field-level support using information icons and tooltips.",
          "Created a progressive-disclosure pattern for users who needed more context."
        ]
      },
      {
        heading: "Content Decisions",
        body: [
          "The strongest pattern was an active question trigger: \"Why do we need your information?\" Users could click or hover to reveal a short explanation, keeping the default UI clean while making reassurance available when needed.",
          "The copy explained the purpose of verification, connected the request to regulatory requirements, and reassured users that their data was secure and used only for verification."
        ]
      },
      {
        heading: "Outcome",
        body: [
          "The updated content gave users clearer context around sensitive data requests and helped frame verification as a security and regulatory step rather than an unexplained data request.",
          "Because this was confidential work, exact metrics are not included. The public version focuses on content strategy, interaction decisions, and trust-building patterns."
        ]
      }
    ]
  },
  {
    slug: "error-message-standardization",
    label: "Content systems",
    title: "Standardizing error messages across B2C and B2B",
    type: "Flagship case study",
    role: "Lead UX writer/content designer",
    context: "Confidential cross-product content system work",
    summary:
      "Led an initiative to create one unified error-message source of truth across B2C and B2B products, then connected it to Figma and an AI-assisted validator for faster use.",
    artifact: "assets/error-message-system-workflow.png",
    artifactAlt: "Anonymized workflow showing how scattered error messages became a unified copy system.",
    sections: [
      {
        heading: "The Challenge",
        body: [
          "Error messages across B2C and B2B product experiences were being written in different styles by different product teams. Each writer had context for their own product area, but there was no unified source of truth for reviewing, aligning, and reusing messages across the wider product ecosystem.",
          "The intent was bigger than improving individual messages. The goal was to create a shared error-message system: one consolidated sheet, one standardized copy pool, design-library adoption in Figma, and a quick way for designers and writers to validate copy without manually searching through documentation."
        ]
      },
      {
        heading: "My Role",
        list: [
          "Asked writers across products to collect existing error messages from their areas.",
          "Consolidated the messages into one shared sheet for cross-review.",
          "Grouped errors by scenario and user need.",
          "Created the final standardized copy pool after review and iteration.",
          "Added the standardized patterns to the Figma design library.",
          "Fed the guidelines and copy pool into Claude so the AI workflow could understand the standards.",
          "Created the UXW Error Message Validator for quick review inside Figma."
        ]
      },
      {
        heading: "The System I Created",
        body: [
          "The work moved through four connected layers. First, writers gathered error messages from their own products. I consolidated everything into one sheet so the team could compare language, identify duplication, spot inconsistencies, and align on better patterns.",
          "After review and iteration, the approved messages became a standardized copy pool. Those patterns were then added to the Figma design library so designers could access them where product screens were being created.",
          "To make the system easier to use, I fed the guidelines and approved patterns into Claude and created the UXW Error Message Validator: a Figma plugin workflow that could check selected text layers against the standard, flag issues, and suggest improved copy."
        ]
      },
      {
        heading: "Principles",
        list: [
          "Be specific when the product knows what happened.",
          "Give users a clear next step whenever possible.",
          "Use plain language instead of system or backend terms.",
          "Avoid blaming the user.",
          "Keep messages short enough for UI constraints.",
          "Add support paths when users may not be able to resolve the issue alone."
        ]
      },
      {
        heading: "Workflow",
        table: {
          headers: ["Layer", "What happened", "Why it mattered"],
          rows: [
            ["Unified sheet", "Messages from B2C and B2B writers were consolidated into one review space.", "Made inconsistencies visible and created a shared alignment point."],
            ["Standardized copy pool", "Reviewed messages were rewritten into reusable patterns.", "Reduced one-off writing and gave teams approved starting points."],
            ["Figma design library", "Approved patterns were added to the design library.", "Brought content standards closer to designers' daily workflow."],
            ["Claude knowledge", "Guidelines and patterns were fed into Claude.", "Helped the AI workflow understand the team's UX writing standards."],
            ["Figma validator", "Designers and writers could check selected text layers quickly.", "Made error-message review faster and easier to apply in context."]
          ]
        }
      },
      {
        heading: "Sample Pattern Pool",
        table: {
          headers: ["Error type", "Reusable pattern", "Example"],
          rows: [
            ["Missing information", "Add [field] to continue.", "Add your phone number to continue."],
            ["Expired code", "Code expired. Request a new one.", "Code expired. Request a new one."],
            ["Existing account", "This [identifier] is linked to an existing account. [Action].", "This email is linked to an existing account. Try signing in or use a different one."],
            ["Support escalation", "We could not [action]. Try again or contact support.", "We could not verify your account. Try again or contact support."]
          ]
        }
      }
    ]
  },
  {
    slug: "ai-content-validator",
    label: "AI & workflow",
    title: "Creating an AI-assisted content validator",
    type: "Flagship case study",
    role: "UX writer/content designer and tool creator",
    context: "Confidential AI-assisted Figma workflow",
    summary:
      "Created a Figma plugin workflow that helped designers and writers check selected text layers against UX writing standards and apply improved error messages in context.",
    artifacts: [
      {
        src: "assets/error-message-system-workflow.png",
        alt: "Anonymized workflow showing the system behind the AI validator."
      },
      {
        src: "assets/ai-content-validator-mockup.png",
        alt: "Anonymized Figma plugin mockup for validating error messages."
      }
    ],
    sections: [
      {
        heading: "The Challenge",
        body: [
          "After standardizing error messages, the next challenge was adoption. The copy pool lived in a shared sheet and design library, but designers, writers, and product partners still needed a faster way to check whether an error message followed the standard while working inside Figma."
        ]
      },
      {
        heading: "The Tool",
        body: [
          "I created a Figma plugin called UXW Error Message Validator. The plugin let team members select a text layer, check the message against UX writing standards, review feedback, and either insert an improved version directly into the design or copy it for later use."
        ]
      },
      {
        heading: "Validation Criteria",
        list: [
          "Does the message explain what happened in plain language?",
          "Does it tell the user what to do next?",
          "Does it avoid blame, panic, or unnecessary politeness?",
          "Does it match the selected B2C or B2B context?",
          "Is it short enough for the UI?"
        ]
      },
      {
        heading: "What It Shows",
        body: [
          "This project shows how I use AI to support content judgment, not replace it. The tool brought content governance into the design workflow so teams could apply standards where product decisions were already happening."
        ]
      }
    ]
  },
  {
    slug: "product-language-system",
    label: "Product language",
    title: "Creating a product language system",
    type: "Flagship case study",
    role: "Lead UX writer/content designer",
    context: "Confidential fintech terminology and hierarchy work",
    summary:
      "Created a product language guide to clarify the relationship between a digital wallet and account feature, reducing user confusion and internal terminology inconsistency.",
    artifact: "assets/product-language-system-diagram.png",
    artifactAlt: "Anonymized diagram showing a product language hierarchy between a digital wallet and account feature.",
    sections: [
      {
        heading: "The Challenge",
        body: [
          "A financial product experience had two closely related concepts: a broad digital wallet and a more specific account used for payouts and payments. Because the two terms were sometimes used inconsistently, users and internal teams could misunderstand what each concept meant and how they worked together."
        ]
      },
      {
        heading: "My Role",
        body: [
          "I led this product language work because these were my main product areas. I created a language guide in Confluence and Google Docs to clarify hierarchy, naming logic, usage rules, and messaging examples."
        ]
      },
      {
        heading: "Content Decisions",
        list: [
          "Use the broader wallet concept as the primary user-facing term.",
          "Use the account term only when explaining specific financial actions.",
          "Avoid using related terms interchangeably.",
          "Prepare definitions and usage rules for future localization."
        ]
      },
      {
        heading: "Outcome",
        body: [
          "The guide reduced terminology ambiguity, supported more consistent payout messaging, and created a documented foundation that could scale across onboarding, help text, product surfaces, and future localization work."
        ]
      }
    ]
  },
  {
    slug: "gaming-rewards-ux-writing",
    label: "Gaming UX",
    title: "UX writing direction for gaming rewards",
    type: "Supporting project page",
    role: "Lead UX writer/content designer",
    context: "Design-stage gaming quests and rewards experience",
    summary:
      "Shaped design-stage UX copy for a gaming quests and rewards experience, including task instructions, progress states, reward messaging, and a recreated before/after copy sample.",
    artifact: "assets/reward-points-copy-table-recreated.png",
    artifactAlt: "Neutral copy table showing before and after reward points copy improvements.",
    sections: [
      {
        heading: "Project Snapshot",
        body: [
          "This was design-stage UX writing work for a player-facing gaming experience built around quests, in-game tasks, progress, and reward collection. Because the product is still in design, this is presented as a project page rather than a full case study."
        ]
      },
      {
        heading: "Content Direction",
        list: [
          "Short, action-led task instructions.",
          "Clear progress states.",
          "Reward messaging that felt motivating but not vague.",
          "Simple completion language.",
          "Tone that felt energetic without sacrificing usability."
        ]
      },
      {
        heading: "Before And After",
        body: [
          "One design-stage example involved improving copy for a reward points card. I recreated the artifact as a neutral copy table to protect confidential design work while preserving the content decision-making."
        ]
      }
    ]
  }
];

const externalWork = [
  {
    label: "Public UX case study",
    title: "X/Twitter archive feature case study",
    summary:
      "A public UX case study exploring an archive feature concept for X/Twitter, showing product thinking, user flow exploration, and design rationale.",
    href: "https://medium.com/design-bootcamp/ux-case-study-x-formerlytwitter-archive-feature-594e54337fc0",
    image: "assets/design-portfolio-twitter-archive.png",
    thumbClass: "twitter-thumb",
    initials: "X"
  },
  {
    label: "Design exploration",
    title: "Admin dashboard exploration",
    summary:
      "A visual design exploration for an admin dashboard experience.",
    href: "https://www.behance.net/gallery/178550013/Admin-Dashboard-Exploration/modules/1008463495",
    image: "assets/design-portfolio-admin-dashboard.png",
    initials: "AD"
  },
  {
    label: "Design exploration",
    title: "Task management dashboard",
    summary:
      "A dashboard exploration focused on a task-management message section.",
    href: "https://www.behance.net/gallery/161787285/Task-Management-Dashboard",
    image: "assets/design-portfolio-task-management.png",
    initials: "TM"
  },
  {
    label: "Design exploration",
    title: "Finance mobile application",
    summary:
      "A mobile app exploration for a finance and budgeting product experience.",
    href: "https://www.behance.net/gallery/152003771/Finance-Mobile-Application",
    image: "assets/design-portfolio-finance-mobile.png",
    initials: "FM"
  }
];

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderHome() {
  document.title = "Esther Johnson | Content Designer & UX Writer";
  const featured = projects.filter((project) => !project.supportingGroup).map((project) => projectCard(project)).join("");
  const supporting = externalWork.map(externalCard).join("");

  app.innerHTML = `
    <section class="page hero">
      <div>
        <p class="kicker">Content Designer & UX Writer</p>
        <h1>Clear content for complex product experiences.</h1>
        <p class="lede">I design UX content, product language systems, and clear interface copy across different products and solutions, including fintech, gaming, and B2C/B2B experiences. My work helps teams simplify complex workflows, improve comprehension, and create product language users can trust.</p>
      </div>
      <div class="hero-meta">
        <span class="pill">UX writing</span>
        <span class="pill">Content design</span>
        <span class="pill">Content strategy</span>
        <span class="pill">Information architecture</span>
        <span class="pill">Product language</span>
        <span class="pill">B2C & B2B</span>
        <span class="pill">AI-assisted workflows</span>
      </div>
      <div class="actions">
        <a class="button" href="#/work">View my work</a>
        <a class="button secondary" href="#/about">About</a>
      </div>
    </section>

    <section class="page section" id="work">
      <div class="section-head">
        <h2>Selected work</h2>
        <p>Trust-building UX, content systems, product language, AI-assisted tooling, and reward-based experiences.</p>
      </div>
      <div class="work-grid">${featured}</div>
    </section>

    <section class="page section">
      <div class="section-head">
        <h2>Design Portfolio</h2>
        <p>Supporting work that shows my wider UX, product design, and public case-study background.</p>
      </div>
      <div class="support-grid">${supporting}</div>
    </section>

    <section class="page section">
      <div class="split">
        <div>
          <p class="kicker">AI Practice</p>
          <h2>AI for content design, not content shortcuts.</h2>
        </div>
        <div class="text-stack">
          <p>I use AI to support content judgment, not replace it. My AI work focuses on helping teams apply UX writing standards, review product language, speed up content operations, and make clearer decisions inside the tools they already use.</p>
          <ul class="principles">
            <li>Start with clear content standards.</li>
            <li>Keep humans responsible for final decisions.</li>
            <li>Use AI to support review, consistency, and scale.</li>
            <li>Treat sensitive product content with extra care.</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function getProjectImage(project) {
  if (project.artifact) return project.artifact;
  if (project.artifacts && project.artifacts.length) return project.artifacts[project.artifacts.length - 1].src;
  return "";
}

function projectCard(project, featured = false, compact = false) {
  const image = getProjectImage(project);
  return `
    <a class="work-card ${featured ? "featured" : ""} ${compact ? "compact" : ""}" href="#/work/${project.slug}">
      <div class="card-thumb" aria-hidden="true">
        ${image ? `<img src="${image}" alt="">` : `<span>${escapeHtml(project.title.split(" ").slice(0, 2).map((word) => word[0]).join(""))}</span>`}
      </div>
      <div class="card-copy">
        <span class="tag">${escapeHtml(project.label)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <span class="card-link">Read project</span>
      </div>
    </a>
  `;
}

function externalCard(item) {
  return `
    <a class="work-card compact" href="${item.href}" target="_blank" rel="noreferrer">
      <div class="card-thumb external-thumb ${escapeHtml(item.thumbClass || "")}" aria-hidden="true">
        ${item.image ? `<img src="${item.image}" alt="">` : `<span>${escapeHtml(item.initials || "UX")}</span>`}
      </div>
      <div class="card-copy">
        <span class="tag">${escapeHtml(item.label)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <span class="card-link">Open case study</span>
      </div>
    </a>
  `;
}

function renderWork() {
  document.title = "Work | Esther Johnson";
  const featured = projects.filter((project) => !project.supportingGroup).map((project) => projectCard(project)).join("");
  const supporting = externalWork.map(externalCard).join("");

  app.innerHTML = `
    <section class="page">
      <p class="kicker">Selected work</p>
      <h1>Content design, UX writing, and systems work.</h1>
      <p class="lede">A mix of confidential case studies, AI-assisted tooling, product language systems, and design-stage product writing.</p>
      <div class="work-grid section">${featured}</div>
      <div class="section">
        <div class="section-head">
          <h2>Design Portfolio</h2>
          <p>Supporting projects and experience that show my broader UX and product design background.</p>
        </div>
        <div class="support-grid">${supporting}</div>
      </div>
    </section>
  `;
}

function renderAbout() {
  document.title = "About | Esther Johnson";
  app.innerHTML = `
    <section class="page">
      <p class="kicker">About</p>
      <h1>I design content that makes products more approachable.</h1>
      <div class="split">
        <div class="lede">
          <p>I'm Esther Johnson, a Content Designer and UX Writer who helps bridge the gap between users and digital experiences, one word at a time.</p>
        </div>
        <div class="text-stack">
          <p>My work sits between content strategy, UX writing, product design, and research. I have written and improved microcopy for B2C and B2B products, simplified complex workflows, supported tone-of-voice systems, shaped information architecture, and partnered with designers, product managers, researchers, engineers, and stakeholders to make product experiences clearer.</p>
          <p>Users are at the center of how I think about design. Whether I'm writing microcopy, shaping a content system, or improving a product flow, I care about helping people understand what is happening, what to do next, and why it matters.</p>
          <p>Before focusing deeply on UX writing, I worked in content strategy, where I learned how much structure, timing, audience insight, and brand consistency shape the way people understand information. That foundation still informs how I approach product content today.</p>
          <div class="actions">
            <a class="button" href="mailto:helloestherjohnson@gmail.com">Work with me</a>
            <a class="button secondary" href="#/work">View work</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAIPractice() {
  document.title = "AI Practice | Esther Johnson";
  app.innerHTML = `
    <section class="page">
      <p class="kicker">AI Practice</p>
      <h1>AI for content design, not content shortcuts.</h1>
      <p class="lede">I use AI to support content judgment, not replace it. My AI work focuses on helping teams apply UX writing standards, review product language, speed up content operations, and make clearer decisions inside the tools they already use.</p>
      <div class="split section">
        <div>
          <h2>Principles</h2>
        </div>
        <ul class="principles">
          <li>Start with clear content standards before asking AI to review or generate copy.</li>
          <li>Keep humans responsible for final content decisions.</li>
          <li>Use AI to support review, consistency, and scale.</li>
          <li>Check AI outputs against product context, user needs, tone, and risk.</li>
          <li>Treat sensitive, legal, financial, and trust-related content with extra care.</li>
        </ul>
      </div>
      <div class="section">
        ${projectCard(projects.find((project) => project.slug === "ai-content-validator"), true)}
      </div>
    </section>
  `;
}

function renderProject(slug) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    renderNotFound();
    return;
  }

  document.title = `${project.title} | Esther Johnson`;
  app.innerHTML = `
    <section class="page project-hero">
      <a class="back-link" href="#/work">Back to work</a>
      <p class="kicker">${escapeHtml(project.label)}</p>
      <h1>${escapeHtml(project.title)}</h1>
      <p class="lede">${escapeHtml(project.summary)}</p>
    </section>
    <section class="page project-layout">
      <aside class="project-aside">
        <dl class="detail-list">
          <div>
            <dt>Type</dt>
            <dd>${escapeHtml(project.type)}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>${escapeHtml(project.role)}</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>${escapeHtml(project.context)}</dd>
          </div>
        </dl>
      </aside>
      <article class="project-body">
        ${project.artifacts ? artifactGrid(project.artifacts) : ""}
        ${project.artifact ? `<figure class="artifact"><img src="${project.artifact}" alt="${escapeHtml(project.artifactAlt)}"></figure>` : ""}
        ${project.sections.map(sectionTemplate).join("")}
      </article>
    </section>
  `;
}

function artifactGrid(artifacts) {
  return `
    <div class="artifact-grid">
      ${artifacts.map((artifact) => `<figure class="artifact"><img src="${artifact.src}" alt="${escapeHtml(artifact.alt)}"></figure>`).join("")}
    </div>
  `;
}

function sectionTemplate(section) {
  const body = section.body ? section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("") : "";
  const list = section.list ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  const table = section.table ? tableTemplate(section.table) : "";

  return `
    <section class="project-section">
      <h2>${escapeHtml(section.heading)}</h2>
      ${body}
      ${list}
      ${table}
    </section>
  `;
}

function tableTemplate(table) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${table.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderNotFound() {
  document.title = "Page not found | Esther Johnson";
  app.innerHTML = `
    <section class="page">
      <p class="kicker">Not found</p>
      <h1>This page is not available.</h1>
      <p class="lede">The work may have moved, or the link may be incorrect.</p>
      <a class="button" href="#/">Go home</a>
    </section>
  `;
}

function route() {
  const hash = window.location.hash || "#/";
  const path = hash.replace(/^#/, "");
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);

  if (path === "/" || path === "") renderHome();
  else if (path === "/work") renderWork();
  else if (path === "/about") renderAbout();
  else if (path === "/ai-practice") renderAIPractice();
  else if (path.startsWith("/work/")) renderProject(path.split("/").pop());
  else renderNotFound();
}

window.addEventListener("hashchange", route);
route();
