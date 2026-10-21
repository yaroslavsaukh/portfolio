const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('#mobile-menu');
const languageButton=document.querySelector('.language-toggle');
const menuLabels={uk:'Відкрити меню',en:'Open menu'};
const closeMenuLabels={uk:'Закрити меню',en:'Close menu'};
menuButton?.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?menuLabels[document.documentElement.lang]:closeMenuLabels[document.documentElement.lang]);mobileMenu.hidden=expanded;document.body.classList.toggle('menu-open',!expanded)});
mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',menuLabels[document.documentElement.lang]);document.body.classList.remove('menu-open')}));
const navUk=['Проєкти','Послуги','Про мене','Бюджети','Контакти'];
const navEn=['Work','Services','About','Pricing','Contact'];
const copy={
  '.skip':['Skip to content'],
  '.announcement':['<span class="pulse"></span> Available for new projects <span class="announcement-dash">/</span> Ukraine · Remote <a href="mailto:yaroslav2002vas@gmail.com?subject=Project%20inquiry">Let’s discuss your project ↗</a>'],
  '.nav-mail':['Get in touch <span>↗</span>'],
  '.hero h1':['Your business.<br><em>My work —</em><br>to launch it <span class="word-accent">online<span class="starburst">✳</span></span>'],
  '.hero-aside p':['Hi! I’m Yaroslav, a backend developer helping businesses launch clear, modern, and technically reliable digital products.'],
  '.hero-aside .text-link':['More about me <span>↗</span>'],
  '.round-link span:last-child':['Explore<br>projects'],
  '.hero-stats div span':['years of commercial experience*','demo concepts','from idea to ongoing support'],
  '#work .section-top h2':['Ideas you can<br><em>explore</em> right now'],
  '#work .section-intro':['These are more than portfolio screenshots: interactive homepage demos shaped around different business goals, styles, and audiences.'],
  '.notice p':['<strong>About these projects:</strong> These are original demo concepts, not paid client work. Prices and timelines are estimates for building similar solutions, not records of completed commissions.'],
  '.filters':['<button class="filter active" data-filter="all" aria-pressed="true">All <sup>04</sup></button><button class="filter" data-filter="ecommerce" aria-pressed="false">E-commerce</button><button class="filter" data-filter="service" aria-pressed="false">Service websites</button>'],
  '.preview-open':['View website ↗','View website ↗','View website ↗','View website ↗'],
  '.legal-frame strong':['Law has<br><i>meaning.</i>'],
  '.legal-frame small':['Strategy. Protection. Results.'],
  '.forma-copy strong':['Objects that<br><em>create</em><br>a mood.'],
  '.project-label':['01 / BEAUTY E-COMMERCE · DEMO','02 / PROFESSIONAL SERVICES · DEMO','03 / LOCAL BUSINESS · DEMO','04 / HOME & LIFESTYLE · DEMO'],
  '.project-info p':['Premium skincare with a considered product presentation and a clear path from first impression to checkout.','A law firm website that communicates expertise and turns visitors into enquiries.','An energetic barbershop website focused on atmosphere, services, and quick booking.','A minimalist tableware store with an editorial catalogue and an emotional brand story.'],
  '.project-bottom .tags span':['Online store','Responsive','Business website','Leads','Landing page','Booking*','E-commerce','Catalogue'],
  '.estimate span':['Estimated build','Estimated build','Estimated build','Estimated build'],
  '.fine-print':['* Demo pages show the interface. Real payments, order management, and booking service integrations are scoped separately.'],
  '#services .section-top h2':['From the first screen<br>to a <em>working product.</em>'],
  '#services .section-intro':['Good development starts with understanding what your website needs to do for your business.'],
  '.service-row h3':['Websites and landing pages','Online stores','Backend and APIs','Launch and support'],
  '.service-row p':['Fast, responsive websites for services, personal brands, and local businesses.','Product catalogues, product pages, carts, checkout, and third-party integrations.','Business logic, APIs, databases, payments, automation, integrations, and support.','Deployment, CI/CD, cloud infrastructure, technical improvements, and product growth.'],
  '#about .section-top h2':['A developer who makes<br><em>work feel straightforward.</em>'],
  '.about-card-footer span':['YAROSLAV SAUKH','BASED IN UKRAINE ↗'],
  '.about-copy .big-copy':['Hi, I’m <strong>Yaroslav Saukh</strong>. I’m a Node.js / TypeScript developer with 2.5 years of commercial experience at the time this CV was prepared.'],
  '.about-copy > p:not(.big-copy)':['I’ve worked on B2B and B2C systems, insurance services, an ERP platform, and apps with third-party integrations. My work included backend architecture, database optimization, APIs, deployment automation, and AWS infrastructure.','I now help businesses with frontend concepts and website development, as well as robust backend systems when a simple website builder is not enough.'],
  '.skill-label':['Technologies I work with'],
  '.button-dark':['Open CV ↗'],
  '.about-links .text-link':['Message me on Telegram ↗'],
  '#pricing .section-top h2':['A clear starting point.<br><em>No surprises.</em>'],
  '#pricing .section-intro':['These are starting estimates. The final quote depends on features, content, and integrations.'],
  '.price-card h3':['Landing page','Business website','Online store'],
  '.price-card > p':['A focused page for one service or product.','A multi-section website that presents your services.','A product catalogue and checkout flow built to support sales.'],
  '.price-time':['≈ 4–8 business days','≈ 1–3 weeks','≈ 2–5 weeks'],
  '.price-card ul li':['Responsive design','Development and animation','Contact form / CTA','Website launch','Custom homepage','Service pages','SEO foundations and analytics*','Forms and integrations*','Product catalogue and pages','Cart and checkout','Payments and delivery*','Basic product management*'],
  '.price-action':['Discuss a landing page ↗','Discuss a website ↗','Discuss an online store ↗'],
  '.chip':['POPULAR'],
  '.price-disclaimer':['* We’ll agree on the exact features before work begins. Estimates are not a public offer. Hosting, domain, paid services, and content costs may be additional.'],
  '.process .section-top h2':['A simple process.<br><em>A predictable result.</em>'],
  '.step h3':['Get acquainted','Plan the work','Build the product','Launch'],
  '.step p':['We discuss your business, goals, budget, and preferred timeline.','I define the scope, milestones, and price before development begins.','I build the product and share progress for your feedback.','We review, publish, and plan next steps if needed.'],
  '.contact-inner h2':['Have an idea?<br><em>Let’s make it happen.</em><span class="contact-star">✳</span>'],
  '.contact-foot p':['Describe your project in a few sentences. I’ll suggest where to start and how to estimate the budget.'],
  '.contact-buttons .button-lime':['Message me on Telegram <span>↗</span>'],
  '.contact-buttons .button-outline':['Send me an email <span>↗</span>'],
  '.footer-inner > a:last-child':['Back to top ↑']
};
const originalContent=new Map();
for(const selector of Object.keys(copy)) originalContent.set(selector,[...document.querySelectorAll(selector)].map(node=>node.innerHTML));
const originalAttrs={title:document.title,description:document.querySelector('meta[name="description"]')?.content,ogTitle:document.querySelector('meta[property="og:title"]')?.content,ogDescription:document.querySelector('meta[property="og:description"]')?.content};
function setLanguage(language){
  const english=language==='en';
  document.documentElement.lang=language;
  const activeFilter=document.querySelector('.filter.active')?.dataset.filter||'all';
  for(const [selector,values] of Object.entries(copy)){
    const nodes=[...document.querySelectorAll(selector)];
    const content=english?values:originalContent.get(selector);
    nodes.forEach((node,index)=>{if(content?.[index]!==undefined)node.innerHTML=content[index]});
  }
  document.querySelectorAll('.desktop-nav a').forEach((link,index)=>{link.textContent=(english?navEn:navUk)[index]});
  document.querySelectorAll('.mobile-nav a').forEach((link,index)=>{link.textContent=(english?navEn:navUk)[index]});
  document.querySelector('.brand')?.setAttribute('aria-label',english?'Yaroslav Saukh — home':'Ярослав Саух — на головну');
  document.querySelector('.desktop-nav')?.setAttribute('aria-label',english?'Main navigation':'Головна навігація');
  mobileMenu?.setAttribute('aria-label',english?'Mobile navigation':'Мобільна навігація');
  document.querySelector('.filters')?.setAttribute('aria-label',english?'Filter projects':'Фільтр проєктів');
  document.querySelectorAll('.project-visual').forEach((link,index)=>link.setAttribute('aria-label',`${english?'Open':'Відкрити'} ${english?'demo':'демо'} ${['ÉPURE','VERDICT','ROUGH CUT','FORMA'][index]}`));
  document.title=english?'Yaroslav Saukh — Digital products & websites':originalAttrs.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',english?'Yaroslav Saukh is an independent web developer building websites, online stores, and backend solutions for businesses. Explore demos, pricing, and timelines.':originalAttrs.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',english?'Yaroslav Saukh — Websites that work.':originalAttrs.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',english?'Websites for business, e-commerce, and backend solutions. From idea to launch.':originalAttrs.ogDescription);
  if(menuButton?.getAttribute('aria-expanded')!=='true')menuButton?.setAttribute('aria-label',menuLabels[language]);
  languageButton?.setAttribute('aria-label',english?'Switch language to Ukrainian':'Перемкнути мову на англійську');
  languageButton?.setAttribute('aria-pressed',String(english));
  try{localStorage.setItem('portfolio-language',language)}catch{}
}
languageButton?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='uk'?'en':'uk'));
let initialLanguage='uk';
try{initialLanguage=localStorage.getItem('portfolio-language')==='en'?'en':'uk'}catch{}
setLanguage(initialLanguage);
document.querySelector('.filters')?.addEventListener('click',event=>{const btn=event.target.closest('.filter');if(!btn)return;document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');const current=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=current!=='all'&&card.dataset.category!==current})});
document.querySelector('#year').textContent=new Date().getFullYear();
