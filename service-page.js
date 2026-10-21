const toggle=document.querySelector('.language-toggle');
const original=new Map([...document.querySelectorAll('[data-en]')].map(node=>[node,node.innerHTML]));
document.querySelectorAll('meta[data-en]').forEach(meta=>meta.setAttribute('content-original',meta.content));
function setLanguage(language){
  const english=language==='en';
  document.documentElement.lang=language;
  for(const [node,initial] of original)node.innerHTML=english?node.dataset.en:initial;
  document.querySelectorAll('meta[data-en]').forEach(meta=>meta.content=english?meta.dataset.en:meta.getAttribute('content-original'));
  const locale=document.querySelector('meta[property="og:locale"]');if(locale)locale.content=english?'en_US':'uk_UA';
  toggle?.setAttribute('aria-label',english?'Switch language to Ukrainian':'Перемкнути мову на англійську');
  toggle?.setAttribute('aria-pressed',String(english));
  try{localStorage.setItem('portfolio-language',language)}catch{}
}
toggle?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='uk'?'en':'uk'));
let initial='uk';try{initial=localStorage.getItem('portfolio-language')==='en'?'en':'uk'}catch{}
setLanguage(initial);
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
