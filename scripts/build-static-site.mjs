import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docs = path.join(root, 'docs');
const wordpressPreview = path.resolve(root, '..', 'biblebabble-wordpress', 'preview');
const sourceImages = path.join(wordpressPreview, 'assets', 'images');
const sourceCss = path.join(wordpressPreview, 'assets', 'style.css');
const enhancedCss = path.join(docs, 'assets', 'enhanced.css');
const imageTarget = path.join(docs, 'assets', 'images');

const nav = [
  ['Home', '/'],
  ['About Us', '/about-us/'],
  ['Episodes', '/episodes/'],
  ['More Content', '/more-content/'],
  ['Testimonials', '/testimonials/'],
  ['Contact Us', '/contact-us/'],
];

const dropdown = [
  ['Study Notes', '/more-content/#study-notes'],
  ['Vocabulary Lists', '/more-content/#vocabulary'],
  ['Community Questions', '/more-content/#questions'],
];

const img = (name) => `/assets/images/${name}`;

const sections = {
  hero: `
    <section class="bb-section bb-section--overlay" style="background-image:url('${img('biblebabble-hero.png')}')">
      <div class="bb-container bb-media-text">
        <div class="bb-copy">
          <p class="bb-kicker">Bible Study + English Practice</p>
          <h1 class="bb-title">Bible Babble Podcast</h1>
          <p class="bb-lede">Grow in God's Word while building confident English skills through thoughtful, practical podcast episodes.</p>
          <p>Each episode explores one biblical concept and one language skill, helping listeners understand Scripture clearly and speak about faith with more confidence.</p>
          <div class="wp-block-buttons">
            <a class="wp-block-button__link" href="/episodes/">Listen to Episodes</a>
            <a class="wp-block-button__link bb-button--outline" href="/about-us/">About the Podcast</a>
          </div>
        </div>
        <figure class="bb-media bb-cover">
          <img src="${img('biblebabble-podcast-cover.png')}" alt="Bible Babble podcast artwork">
        </figure>
      </div>
    </section>`,
  platforms: `
    <section class="bb-section bb-section--muted">
      <div class="bb-narrow">
        <p class="has-text-align-center bb-kicker">Listen Anywhere</p>
        <h2 class="has-text-align-center bb-subtitle">One message, many ways to listen.</h2>
      </div>
      <div class="bb-container bb-columns">
        <article class="bb-platform-card"><p class="bb-pill">Podcast</p><h3>Apple Podcasts</h3><p>Keep episodes ready on iPhone, iPad, and Mac.</p></article>
        <article class="bb-platform-card"><p class="bb-pill">Streaming</p><h3>Spotify</h3><p>Listen during study time, travel, or daily routines.</p></article>
        <article class="bb-platform-card"><p class="bb-pill">Faith Network</p><h3>Godcaster</h3><p>Discover Bible-centered voices and ministry podcasts.</p></article>
      </div>
    </section>`,
  learning: `
    <section class="bb-section bb-section--white" id="learning-path">
      <div class="bb-container bb-media-text">
        <figure class="bb-media"><img src="${img('biblebabble-learn-scripture.png')}" alt="Bible, notebook, and vocabulary cards for English study"></figure>
        <div>
          <p class="bb-kicker">A Clear Learning Path</p>
          <h2 class="bb-subtitle">Study Scripture. Practice English. Build confidence.</h2>
          <p>Bible Babble turns every episode into an approachable learning moment: listen, understand the biblical idea, notice useful English, then practice it in real life.</p>
          <ul>
            <li><strong>Bible focus:</strong> understand the passage or theme clearly.</li>
            <li><strong>Language focus:</strong> learn words, phrases, grammar, and pronunciation naturally.</li>
            <li><strong>Practice focus:</strong> use what you learned in prayer, conversation, and study.</li>
          </ul>
        </div>
      </div>
    </section>`,
  episodes: `
    <section class="bb-section" id="latest-episodes">
      <div class="bb-container bb-media-text bb-media-text--reverse">
        <figure class="bb-media"><img src="${img('biblebabble-listen.png')}" alt="Phone, headphones, and Bible for podcast listening"></figure>
        <div>
          <p class="bb-kicker">Latest Episodes</p>
          <h2 class="bb-subtitle">Short enough to follow. Deep enough to grow.</h2>
          <p>Episodes are designed for listeners who want biblical clarity and practical English improvement without feeling overwhelmed.</p>
          <div class="bb-card-grid">
            <article class="bb-card"><h3>Listen</h3><p>Hear the theme, verse, or biblical idea explained in clear English.</p></article>
            <article class="bb-card"><h3>Learn</h3><p>Notice useful vocabulary, phrases, and pronunciation patterns.</p></article>
            <article class="bb-card"><h3>Practice</h3><p>Use the episode idea in conversation, journaling, or Bible study.</p></article>
          </div>
          <p><a class="wp-block-button__link bb-button--coral" href="https://gcfm.link/sl/397Z8a159ac4f" target="_blank" rel="noopener">Listen Now</a></p>
        </div>
      </div>
    </section>`,
  resources: `
    <section class="bb-section bb-section--dark" id="resources">
      <div class="bb-narrow">
        <p class="has-text-align-center bb-kicker">More Than a Podcast</p>
        <h2 class="has-text-align-center bb-subtitle">Build a habit of faith-filled learning.</h2>
        <p class="has-text-align-center bb-lede">Use these sections to publish study notes, episode takeaways, vocabulary lists, devotionals, or announcements.</p>
      </div>
      <div class="bb-container bb-card-grid">
        <article class="bb-card" id="study-notes"><p class="bb-pill">Study Notes</p><h3>Episode Guides</h3><p>Add summaries, Bible references, discussion questions, and reflection prompts.</p></article>
        <article class="bb-card" id="vocabulary"><p class="bb-pill">English Practice</p><h3>Vocabulary Lists</h3><p>Publish important words, phrases, pronunciation notes, and practice sentences.</p></article>
        <article class="bb-card" id="questions"><p class="bb-pill">Community</p><h3>Questions & Topics</h3><p>Invite listeners to request biblical concepts or language topics for future episodes.</p></article>
      </div>
    </section>`,
  testimonials: `
    <section class="bb-section bb-section--white" id="listener-impact">
      <div class="bb-narrow">
        <p class="has-text-align-center bb-kicker">Listener Impact</p>
        <h2 class="has-text-align-center bb-subtitle">A welcoming way to learn and grow.</h2>
      </div>
      <div class="bb-container bb-card-grid">
        <article class="bb-testimonial"><p>"Bible Babble helps me understand the Bible and learn natural English at the same time."</p><h3>English Learner</h3></article>
        <article class="bb-testimonial"><p>"The episodes are clear, practical, and easy to share with friends and small groups."</p><h3>Bible Study Listener</h3></article>
        <article class="bb-testimonial"><p>"It gives me words to speak about faith with more confidence."</p><h3>Podcast Subscriber</h3></article>
      </div>
    </section>`,
  contact: `
    <section class="bb-section bb-section--muted" id="connect">
      <div class="bb-container bb-media-text">
        <figure class="bb-media"><img src="${img('biblebabble-community.png')}" alt="Small group Bible study conversation"></figure>
        <div>
          <p class="bb-kicker">Ask, Share, Connect</p>
          <h2 class="bb-subtitle">Have a Bible question or language topic?</h2>
          <p>Send Bible Babble a topic, question, testimony, or collaboration idea.</p>
          <p><strong>Email:</strong> <a href="mailto:biblebabble.in@gmail.com">biblebabble.in@gmail.com</a></p>
          <p><a class="wp-block-button__link bb-button--teal" href="/contact-us/">Contact Us</a></p>
        </div>
      </div>
    </section>`,
  form: `
    <section class="bb-section bb-section--dark" id="message">
      <div class="bb-narrow">
        <p class="has-text-align-center bb-kicker">Start the Conversation</p>
        <h2 class="has-text-align-center bb-subtitle">Send Bible Babble a message.</h2>
        <p class="has-text-align-center bb-lede">Ask about a biblical concept, suggest an English-learning topic, or reach out about podcast collaboration.</p>
        <form class="bb-form" action="mailto:biblebabble.in@gmail.com" method="post" enctype="text/plain">
          <label>Your Name<input type="text" name="name" placeholder="Your Name *" required></label>
          <label>Your Email Address<input type="email" name="email" placeholder="Your Email Address *" required></label>
          <label>Your Phone Number<input type="tel" name="phone" placeholder="Your Phone Number"></label>
          <label>Your Message<textarea name="message" placeholder="Your Message *" required></textarea></label>
          <button class="wp-block-button__link" type="submit">Submit</button>
        </form>
      </div>
    </section>`,
};

const pages = [
  {
    slug: '',
    title: 'Bible Babble Podcast',
    description: 'Bible study and English learning through the Bible Babble podcast.',
    content: [sections.hero, sections.platforms, sections.learning, sections.episodes, sections.resources, sections.testimonials, sections.contact, sections.form].join('\n'),
  },
  {
    slug: 'about-us',
    title: 'About Bible Babble',
    description: 'Learn about Bible Babble and its mission to help listeners study Scripture while practicing English.',
    content: pageHero('About Bible Babble', 'Faith-filled English practice for listeners who want to understand Scripture clearly.') + sections.learning + sections.contact,
  },
  {
    slug: 'episodes',
    title: 'Episodes',
    description: 'Listen to Bible Babble episodes and grow through Bible study and English practice.',
    content: pageHero('Episodes', 'Short, clear, practical podcast episodes for Bible study and English learning.') + sections.episodes + sections.platforms,
  },
  {
    slug: 'more-content',
    title: 'More Content',
    description: 'Bible Babble study notes, vocabulary lists, and community topics.',
    content: pageHero('More Content', 'Extra resources to support your study, listening, and language practice.') + sections.resources + sections.learning,
  },
  {
    slug: 'testimonials',
    title: 'Testimonials',
    description: 'Listener responses and impact from Bible Babble.',
    content: pageHero('Testimonials', 'A welcoming way to learn and grow.') + sections.testimonials + sections.contact,
  },
  {
    slug: 'contact-us',
    title: 'Contact Us',
    description: 'Contact Bible Babble with questions, topic ideas, and collaboration requests.',
    content: pageHero('Contact Us', 'Send a topic, ask a question, or reach out about Bible Babble.') + sections.contact + sections.form,
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Bible Babble privacy policy.',
    content: pageHero('Privacy Policy', 'How this website handles basic visitor information.') + `
      <section class="bb-section bb-section--white">
        <div class="bb-narrow">
          <h2 class="bb-subtitle">Privacy Policy</h2>
          <p>This website is a static informational site for Bible Babble. It does not collect visitor account information or process payments.</p>
          <p>If you contact Bible Babble by email or through a mail form, the information you send is used to respond to your message.</p>
          <p>External podcast, social, and media links may be handled by their own platforms and policies.</p>
        </div>
      </section>`,
  },
];

function pageHero(title, lede) {
  return `
    <section class="bb-section bb-section--hero" style="background-image:url('${img('biblebabble-hero.png')}')">
      <div class="bb-narrow">
        <p class="bb-kicker">Bible Babble</p>
        <h1 class="bb-title">${escapeHtml(title)}</h1>
        <p class="bb-lede">${escapeHtml(lede)}</p>
      </div>
    </section>`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

function renderNav(activeSlug) {
  return nav.map(([label, href]) => {
    const slug = href === '/' ? '' : href.replaceAll('/', '');
    const active = slug === activeSlug ? ' aria-current="page"' : '';
    if (label === 'More Content') {
      const items = dropdown.map(([childLabel, childHref]) => `<li><a href="${childHref}">${childLabel}</a></li>`).join('');
      return `<li class="has-dropdown"><a href="${href}"${active}>${label}</a><ul class="dropdown-menu">${items}</ul></li>`;
    }
    return `<li><a href="${href}"${active}>${label}</a></li>`;
  }).join('\n');
}

function html(page) {
  const activeSlug = page.slug;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} | Bible Babble</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800&family=Red+Hat+Text:wght@700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/enhanced.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="site-header__inner">
      <a class="site-branding" href="/">
        <img src="${img('biblebabble-podcast-cover.png')}" alt="Bible Babble">
        <span class="site-title">Bible Babble</span>
      </a>
      <nav class="site-nav" aria-label="Site">
        <ul>${renderNav(activeSlug)}</ul>
      </nav>
    </div>
  </header>
  <main id="main" class="site-main entry-content">
${page.content}
  </main>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <section>
        <h2>Bible Babble</h2>
        <p>Bible study and English learning through the Bible Babble podcast.</p>
      </section>
      <section>
        <h3>Contact</h3>
        <p><a href="mailto:biblebabble.in@gmail.com">biblebabble.in@gmail.com</a></p>
        <p><a href="/privacy-policy/">Privacy Policy</a></p>
      </section>
    </div>
  </footer>
</body>
</html>
`;
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function copyRecursive(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

if (!fs.existsSync(sourceImages) || !fs.existsSync(sourceCss)) {
  throw new Error(`Missing enhanced preview assets under ${wordpressPreview}`);
}

fs.mkdirSync(path.join(docs, 'assets'), { recursive: true });
fs.rmSync(path.join(docs, 'a'), { recursive: true, force: true });
copyRecursive(sourceImages, imageTarget);

const baseCss = fs.readFileSync(sourceCss, 'utf8');
const extraCss = `

.wp-block-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}

.site-nav li {
  position: relative;
}

.site-nav [aria-current="page"] {
  background: rgba(255, 255, 255, 0.1);
  color: var(--bb-gold);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  display: none;
  padding: 8px;
  margin: 0;
  list-style: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(22, 24, 47, 0.98);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
}

.has-dropdown:hover > .dropdown-menu,
.has-dropdown:focus-within > .dropdown-menu {
  display: block;
}

.dropdown-menu a {
  white-space: nowrap;
}

button.wp-block-button__link {
  cursor: pointer;
}

.has-text-align-center {
  text-align: center;
}

@media (max-width: 900px) {
  .dropdown-menu {
    position: static;
    display: block;
    margin-left: 12px;
    background: transparent;
    box-shadow: none;
  }
}
`;
writeFile(enhancedCss, baseCss + extraCss);

for (const page of pages) {
  const output = page.slug ? path.join(docs, page.slug, 'index.html') : path.join(docs, 'index.html');
  writeFile(output, html(page));
}

writeFile(path.join(docs, '404.html'), html({
  slug: '',
  title: 'Page Not Found',
  description: 'The requested Bible Babble page was not found.',
  content: pageHero('Page Not Found', 'The page you requested could not be found.') + `
    <section class="bb-section bb-section--white">
      <div class="bb-narrow">
        <h2 class="bb-subtitle">Try one of these links.</h2>
        <p><a href="/">Home</a> | <a href="/episodes/">Episodes</a> | <a href="/contact-us/">Contact Us</a></p>
      </div>
    </section>`,
}));

console.log(`Built ${pages.length} pages into ${docs}`);
