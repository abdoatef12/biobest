(() => {
'use strict';

/* ============ SETTINGS (edit these two lines) ============ */
const CONFIG = {
  whatsapp: '',   // e.g. '201001234567' (country code + number, no +)
  email: ''       // e.g. 'info@roncare.com'
};

/* ============ DATA ============ */
const CAT = {
  skin:   { ar: 'العناية بالبشرة', en: 'Skin care' },
  shower: { ar: 'جل استحمام',      en: 'Shower gel' },
  splash: { ar: 'بودي سبلاش',      en: 'Body splash' }
};
const LINE = {
  shower: { ar: 'جل استحمام', en: 'Shower gel' },
  splash: { ar: 'سنسز بودي سبلاش', en: 'Senses Body Splash' }
};
const FEAT = {
  shower: {
    ar: ['تنظيف عميق وانتعاش', 'إشراقة طبيعية للبشرة', 'عطر يدوم طويلاً', 'لطيف على البشرة', 'لجميع أنواع البشرة', 'غني بالبانثينول وفيتامين E'],
    en: ['Deep cleansing and refreshing', 'Naturally glowing skin', 'Long-lasting fragrance', 'Gentle and skin friendly', 'For all skin types', 'Enriched with Panthenol and Vitamin E']
  },
  splash: {
    ar: ['انتعاش يدوم طويلاً', 'ثقة تدوم طوال اليوم', 'خفيف ومنعش', 'عبوة أنيقة'],
    en: ['Long-lasting freshness', 'All-day confidence', 'Light and refreshing', 'Elegant packaging']
  }
};

const IMG = {
  p01: 'images/p01.webp',
  p02: 'images/p02.webp',
  p03: 'images/p03.webp',
  p04: 'images/p04.webp',
  p05: 'images/p05.webp',
  p06: 'images/p06.webp',
  p07: 'images/p07.webp',
  p08: 'images/p08.webp',
  p09: 'images/p09.webp',
  p10: 'images/p10.webp',
  p11: 'images/p11.webp',
  p12: 'images/p12.webp',
  p13: 'images/p13.webp',
  p14: 'images/p14.webp',
  p15: 'images/p15.webp',
  p16: 'images/p16.webp',
  p17: 'images/p17.webp',
  p18: 'images/p18.webp',
  p19: 'images/p19.webp',
  p20: 'images/p20.webp'
};

const P = [
  { id:'p01', n:{ar:'سيرم الوجه 6 في 1', en:'Face Serum 6 in 1'}, line:{ar:'سيرم مغذٍّ للبشرة', en:'Face nourishing serum'}, cat:'skin', size:'30 ml',
    c:'#1F8FB5', t:'#DDF1F8', mood:[],
    d:{ar:'سيرم للوجه بست مكوّنات فعّالة في عبوة قطّارة واحدة: هيالورونيك أسيد، فيتامين C، نياسيناميد، كولاجين، ألفا أربيوتين وفيتامين E.',
       en:'A face serum with six actives in one dropper bottle: hyaluronic acid, vitamin C, niacinamide, collagen, alpha-arbutin and vitamin E.'},
    f:{ar:['عبوة قطّارة 30 مل','ست مكوّنات في منتج واحد','هيالورونيك أسيد وفيتامين C','نياسيناميد وكولاجين','ألفا أربيوتين وفيتامين E'],
       en:['30 ml dropper bottle','Six actives in one product','Hyaluronic acid and vitamin C','Niacinamide and collagen','Alpha-arbutin and vitamin E']}},
  { id:'p02', n:{ar:'لوشن الجسم 4×1', en:'Body Lotion 4x1'}, line:{ar:'مناسب للمناطق الحساسة', en:'Suitable for sensitive areas'}, cat:'skin', size:'200 ml',
    c:'#B08A33', t:'#F6EBD6', mood:[],
    d:{ar:'لوشن للجسم بأربع وظائف في عبوة واحدة: ترطيب، مزيل للرائحة، تفتيح، ويساعد على تقليل نمو الشعر.',
       en:'A body lotion with four jobs in one bottle: moisturizer, deodorant, brightening, and help in reducing hair growth.'},
    f:{ar:['ترطيب يدوم 48 ساعة','مزيل للرائحة','تفتيح وتوحيد لون البشرة','يساعد على تقليل نمو الشعر','مناسب للمناطق الحساسة'],
       en:['48-hour hydration','Deodorant','Brightens and evens skin tone','Helps reduce hair growth','Suitable for sensitive areas']}},
  { id:'p03', n:{ar:'جل التنظيف 6 في 1', en:'Cleansing Gel 6 in 1'}, line:{ar:'تنظيف وتقشير', en:'Skin cleansing and exfoliation'}, cat:'skin', size:'200 ml',
    c:'#2E86C8', t:'#E0EEFA', mood:[],
    d:{ar:'جل للتنظيف والتقشير بتركيبة 6 في 1 تضم هيالورونيك أسيد وفيتامين C وساليسيليك أسيد وكوجيك أسيد وزيت الأفوكادو ومستخلص الألوفيرا.',
       en:'A cleansing and exfoliating gel with a 6-in-1 formula of hyaluronic acid, vitamin C, salicylic acid, kojic acid, avocado oil and aloe vera extract.'},
    f:{ar:['تنظيف وتقشير','خالٍ من البارابين','خالٍ من العطور','فيتامين C لإشراقة ونعومة'],
       en:['Cleansing and exfoliation','Paraben free','Fragrance free','Vitamin C for a brighter, softer look']}},
  { id:'p04', n:{ar:'جل واقٍ من الشمس', en:'Sunscreen Gel SPF 50+'}, line:{ar:'ملمس جاف', en:'Dry touch'}, cat:'skin', size:'60 g',
    c:'#E8820C', t:'#FDEBD0', mood:[],
    d:{ar:'جل واقٍ من الشمس بملمس جاف، حماية عالية جداً من UVA وUVB مع تأثير تفتيح إضافي.',
       en:'A dry-touch sunscreen gel with very high UVA and UVB protection and an extra brightening effect.'},
    f:{ar:['SPF 50+','حماية عالية جداً من UVA وUVB','ملمس جاف','تأثير تفتيح إضافي'],
       en:['SPF 50+','Very high UVA and UVB protection','Dry touch','Extra brightening effect']}},

  { id:'p05', n:'Soft Blush', cat:'shower', size:'1 L', c:'#C8283D', t:'#FBE0DE', mood:['floral'],
    d:{ar:'جل استحمام بعطر زهري ناعم يمنح بشرتك انتعاشاً ونعومة وإشراقة طبيعية.', en:'A soft floral shower gel that leaves skin fresh, smooth and naturally glowing.'}},
  { id:'p07', n:'Island Milk', cat:'shower', size:'1 L', c:'#5B3FA0', t:'#E4E0F4', mood:['fresh'],
    d:{ar:'عطر استوائي بروح حليب الجزيرة مع تنظيف عميق وانتعاش يدوم.', en:'A tropical island-milk fragrance with deep cleansing and lasting freshness.'}},
  { id:'p08', n:'Deep Aura', cat:'shower', size:'1 L', c:'#7A33B5', t:'#EBDDF6', mood:['warm'],
    d:{ar:'عطر غامض وعميق يمنحك استحماماً منعشاً بأثر يدوم.', en:'A mystical, deep fragrance for a shower ritual that lasts.'}},
  { id:'p09', n:'Midnight Skin', cat:'shower', size:'1 L', c:'#B80F3A', t:'#F7D9DF', mood:['warm','floral'],
    d:{ar:'عطر رومانسي مسائي بحضور غني يدوم طويلاً.', en:'A romantic evening fragrance with a rich, long-lasting presence.'}},
  { id:'p10', n:'Strawberry Milkshake', cat:'shower', size:'1 L', c:'#D1305A', t:'#FCE1E8', mood:['sweet'],
    d:{ar:'رائحة فراولة فاكهية منعشة تحوّل كل استحمام إلى لحظة مرحة.', en:'A fruity, fresh strawberry scent that turns every shower into a treat.'}},
  { id:'p12', n:'Fresh Breeze', cat:'shower', size:'1 L', c:'#0F5FB0', t:'#D9EAF8', mood:['fresh'],
    d:{ar:'رائحة استوائية منعشة بإحساس نسيم البحر مع تنظيف عميق.', en:'A tropical fresh scent that feels like sea air, with deep cleansing.'}},

  { id:'p06', n:'Cherry Blossom', cat:'splash', size:'250 ml', c:'#B3203F', t:'#F9DDE2', mood:['floral','sweet'],
    d:{ar:'عطر كرز مزهر حلو، خفيف ومنعش ويرفع المزاج.', en:'A sweet cherry-blossom scent that is light, refreshing and uplifting.'}},
  { id:'p11', n:'Oud', cat:'splash', size:'250 ml', c:'#7A4B22', t:'#EFE0CC', mood:['warm'],
    d:{ar:'عطر عود غني بنفحات خشبية وختام خفيف ومنعش.', en:'A rich, woody oud scent with a light, refreshing finish.'}},
  { id:'p13', n:'Royal Heart', cat:'splash', size:'250 ml', c:'#1F8A93', t:'#D9EEF0', mood:['fresh'],
    d:{ar:'عطر أنيق وفاخر في رذاذ خفيف ومنعش.', en:'An elegant, luxurious scent in a light, refreshing mist.'}},
  { id:'p14', n:'Musk', cat:'splash', size:'250 ml', c:'#A9803A', t:'#F3EADA', mood:['warm'],
    d:{ar:'عطر مسك دافئ وأنيق بإحساس ناعم ومنعش.', en:'A warm, elegant musk scent that stays soft and fresh.'}},
  { id:'p15', n:'Velvet Love', cat:'splash', size:'250 ml', c:'#5E2A84', t:'#EADFF2', mood:['floral'],
    d:{ar:'عطر زهري رومانسي بإحساس مخملي.', en:'A floral, romantic scent with a velvety feel.'}},
  { id:'p16', n:'Coconut', cat:'splash', size:'250 ml', c:'#1F86A8', t:'#DCEFF6', mood:['fresh'],
    d:{ar:'عطر جوز هند استوائي بإحساس يوم على البحر.', en:'A tropical coconut scent that feels like a day by the sea.'}},
  { id:'p17', n:'Berries', cat:'splash', size:'250 ml', c:'#6B2D8C', t:'#EBDDF3', mood:['sweet'],
    d:{ar:'عطر توت فاكهي لذيذ يبقيك منتعشاً طوال اليوم.', en:'A fruity, delicious berry scent that keeps you fresh all day.'}},
  { id:'p18', n:'Candy', cat:'splash', size:'250 ml', c:'#D1307F', t:'#FBDDEB', mood:['sweet'],
    d:{ar:'عطر حلوى حلو وساحر بروح مرحة وخفيفة.', en:'A sweet, charming candy scent that feels playful and light.'}},
  { id:'p19', n:'Golden Romance', cat:'splash', size:'250 ml', c:'#5A4596', t:'#E6E1F2', mood:['floral'],
    d:{ar:'عطر منعش وخفيف ومنشّط بلمسة رومانسية.', en:'A refreshing, light and energizing fragrance with a romantic touch.'}},
  { id:'p20', n:'Strawberry Milkshake', cat:'splash', size:'250 ml', c:'#C42450', t:'#FBDDE4', mood:['sweet'],
    d:{ar:'رائحة فراولة حلوة وفاكهية في رذاذ جسم خفيف.', en:'A sweet and fruity strawberry aroma in a light body mist.'}}
];
P.forEach(p => { p.img = IMG[p.id]; });

const HERO = ['p06','p04','p11','p16','p09','p15'];
const MOODS = {
  fresh:  { ar: 'منعش وبحري',    en: 'Fresh and breezy' },
  sweet:  { ar: 'حلو ومرح',      en: 'Sweet and playful' },
  floral: { ar: 'زهري ورومانسي', en: 'Floral and romantic' },
  warm:   { ar: 'دافئ وعميق',    en: 'Warm and deep' }
};
const INGREDIENTS = [
  { k:'ha',  n:'Hyaluronic acid', d:{ar:'يرتبط بالماء على سطح البشرة ليمنحها ترطيباً وإحساساً بالامتلاء.', en:'Binds water at the skin surface for a hydrated, plumper feel.'}, in:['p01','p03'] },
  { k:'vc',  n:'Vitamin C',       d:{ar:'مضاد أكسدة يُستخدم على نطاق واسع لإشراقة البشرة المرهقة.', en:'An antioxidant widely used to brighten the look of dull skin.'}, in:['p01','p03'] },
  { k:'nia', n:'Niacinamide',     d:{ar:'يساعد على توحيد مظهر لون البشرة ويدعم حاجزها الطبيعي.', en:'Helps even the look of skin tone and supports the skin barrier.'}, in:['p01'] },
  { k:'col', n:'Collagen',        d:{ar:'بروتين مرطّب يُستخدم في العناية بالبشرة لإحساس أنعم.', en:'A moisturizing protein used in skin care for a smoother feel.'}, in:['p01'] },
  { k:'arb', n:'Alpha-arbutin',   d:{ar:'مكوّن مفتّح يُستخدم لتخفيف مظهر البقع الداكنة.', en:'A brightening active used to soften the look of dark spots.'}, in:['p01'] },
  { k:'ve',  n:'Vitamin E',       d:{ar:'مضاد أكسدة يغذّي البشرة ويمنحها نعومة.', en:'An antioxidant that nourishes and softens skin.'}, in:['p01','p05','p07','p08','p09','p10','p12'] },
  { k:'pan', n:'Panthenol',       d:{ar:'مكوّن مرطّب ومهدّئ يدعم بشرة مريحة وناعمة.', en:'A conditioning ingredient that supports soft, comfortable skin.'}, in:['p05','p07','p08','p09','p10','p12'] }
];

/* ============ i18n (English strings; Arabic is read from the HTML) ============ */
const EN = {
  'skip':'Skip to products',
  'nav.collections':'Collections','nav.finder':'Find your scent','nav.science':'Ingredients','nav.about':'About','nav.contact':'Contact','nav.cta':'Request an offer',
  'hero.title':'Care you can feel from the first touch.',
  'hero.lead':'Skin care, shower gels and body splashes designed to make your daily routine softer and fresher.',
  'hero.cta1':'Explore the collection','hero.cta2':'Get in touch','hero.details':'View details',
  'fact.1':'Very high UVA and UVB protection','fact.2':'Hydration that lasts 48 hours in the lotion','fact.3':'Panthenol and Vitamin E in the shower gels','fact.4':'Value-size bottles for daily use',
  'col.title':'The collection','col.sub':'Twenty products in three categories. Tap any product to see its details.',
  'fin.title':'Find your scent','fin.sub':'Tell us the feeling you want and we will suggest the right products.','fin.mood':'Feeling','fin.format':'Type',
  'sci.title':'What is inside the bottle','sci.sub':'Meet the ingredients our formulas rely on, and why they are used.',
  'sci.note':'General ingredient information. Check each pack for its full formula.',
  'ab.title':'Daily rituals with a scent you remember',
  'ab.p1':'RON Care builds its products around simple rituals that repeat every day: cleanse, hydrate, protect, then finish with a scent that stays in your memory.',
  'ab.p2':'From face serum and cleansing gel to shower gels and body splashes, every product has its own world, colors and fragrance, and the same promise: pure freshness and memories you never forget.',
  'st.1':'products','st.2':'body splash scents','st.3':'shower gel scents','st.4':'skin care products',
  'ct.title':'Let us talk','ct.sub':'For distribution, pharmacy and retail partnerships, or questions about any product, leave a message and we will get back to you.',
  'f.name':'Name','f.company':'Company or store','f.contact':'Email or phone number','f.type':'I am interested in','f.o1':'Distribution','f.o2':'Selling in my store or pharmacy','f.o3':'A question about a product','f.o4':'Something else','f.msg':'Your message','f.send':'Send message',
  'ft.tag':'Pure freshness. A scent to remember.'
};
const T = {
  all:{ar:'الكل',en:'All'},
  anyFormat:{ar:'الكل',en:'Any'},
  view:{ar:'عرض',en:'View'},
  ask:{ar:'اسأل عن هذا المنتج',en:'Ask about this product'},
  found:{ar:'موجود في',en:'Found in'},
  nowShowing:{ar:'منتج',en:'product'},
  count:(n)=>({ar:`${n} ${n===1?'منتج مناسب':'منتجات مناسبة'}`,en:`${n} matching ${n===1?'product':'products'}`}),
  eName:{ar:'اكتب اسمك',en:'Please enter your name'},
  eContact:{ar:'اكتب بريدك الإلكتروني أو رقم هاتفك',en:'Please enter an email or phone number'},
  eContactBad:{ar:'أدخل بريداً إلكترونياً أو رقم هاتف صحيحاً',en:'Enter a valid email or phone number'},
  eMsg:{ar:'اكتب رسالتك',en:'Please write a message'},
  okTitle:{ar:'تم استلام رسالتك',en:'Message received'},
  ok:(n)=>({ar:`شكراً ${n}. سنتواصل معك قريباً.`,en:`Thank you, ${n}. We will be in touch soon.`}),
  prefill:(n)=>({ar:`أود معرفة المزيد عن المنتج: ${n}`,en:`I would like to know more about: ${n}`}),
  titleTag:{ar:'رون كير | العناية بالبشرة وجل الاستحمام والبودي سبلاش',en:'RON Care | Skin care, shower gels and body splashes'},
  rights:{ar:'جميع الحقوق محفوظة.',en:'All rights reserved.'}
};

/* ============ helpers ============ */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const byId = Object.fromEntries(P.map(p => [p.id, p]));
let lang = 'ar';
try { const s = localStorage.getItem('ron-lang'); if (s === 'en' || s === 'ar') lang = s; } catch(e){}
const tr  = (o) => o[lang];
const nm  = (p) => typeof p.n === 'string' ? p.n : p.n[lang];
const lineOf = (p) => p.line ? p.line[lang] : LINE[p.cat][lang];
const featOf = (p) => p.f ? p.f[lang] : FEAT[p.cat][lang];
const tags = (p) => [p.size];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const el = (tag, attrs={}, html='') => { const e = document.createElement(tag); Object.entries(attrs).forEach(([k,v]) => e.setAttribute(k,v)); if (html) e.innerHTML = html; return e; };

/* ============ i18n apply ============ */
const arStore = new Map();
$$('[data-i18n]').forEach(n => arStore.set(n, n.innerHTML));
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(n => { n.innerHTML = lang === 'ar' ? arStore.get(n) : (EN[n.dataset.i18n] ?? arStore.get(n)); });
  document.title = tr(T.titleTag);
  $('#langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';
  $('#copy').textContent = `© ${new Date().getFullYear()} RON Care. ${tr(T.rights)}`;
  renderHeroLabel(); renderFilters(); renderGrid(); renderFinder(); renderIngTabs(); renderIng(); renderMoodChips();
  if ($('#pm').open) renderModal(modalId);
  try { localStorage.setItem('ron-lang', lang); } catch(e){}
}
$('#langBtn').addEventListener('click', () => { lang = lang === 'ar' ? 'en' : 'ar'; applyLang(); });

/* ============ header ============ */
const header = $('.site-header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 24);
addEventListener('scroll', onScroll, {passive:true}); onScroll();
const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => { const o = burger.getAttribute('aria-expanded') !== 'true'; burger.setAttribute('aria-expanded', o); nav.classList.toggle('open', o); });
$$('a', nav).forEach(a => a.addEventListener('click', () => { burger.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));

/* ============ hero ============ */
const hero = $('#hero'), wrap = $('#posterWrap'), rail = $('#rail');
let heroIdx = 0, timer = null;
HERO.forEach((id, i) => {
  const p = byId[id];
  const fig = el('figure', {class:'poster' + (i===0?' on':'')});
  const img = el('img', {src:p.img, alt:`RON Care ${p.n.en || p.n}`, width:760, height:1140});
  if (i > 0) img.loading = 'lazy';
  fig.append(img); wrap.append(fig);
  const b = el('button', {type:'button', 'aria-pressed': i===0}); b.style.setProperty('--sw', p.c);
  b.innerHTML = `<i></i><span>${typeof p.n === 'string' ? p.n : p.n.en}</span>`;
  b.addEventListener('click', () => { setHero(i); restart(); });
  rail.append(b);
});
function renderHeroLabel(){
  const p = byId[HERO[heroIdx]];
  $('#nowType').textContent = `${tr(CAT[p.cat])}، ${lineOf(p)}`.replace('، ', lang==='ar' ? '، ' : ', ');
  $('#nowName').textContent = typeof p.n === 'string' ? p.n : p.n.en;
}
function setHero(i){
  heroIdx = i;
  const p = byId[HERO[i]];
  hero.style.setProperty('--tint', p.t);
  hero.style.setProperty('--accent', p.c);
  $$('.poster', wrap).forEach((f, k) => f.classList.toggle('on', k === i));
  $$('button', rail).forEach((b, k) => b.setAttribute('aria-pressed', k === i));
  renderHeroLabel();
}
function restart(){ clearInterval(timer); if (!reduce) timer = setInterval(() => setHero((heroIdx+1) % HERO.length), 6500); }
$('#nowOpen').addEventListener('click', () => openModal(HERO[heroIdx]));
['mouseenter','focusin'].forEach(e => hero.addEventListener(e, () => clearInterval(timer)));
['mouseleave','focusout'].forEach(e => hero.addEventListener(e, restart));
document.addEventListener('visibilitychange', () => document.hidden ? clearInterval(timer) : restart());
// subtle tilt
if (!reduce && matchMedia('(pointer:fine)').matches) {
  const stage = $('#stage');
  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    wrap.style.setProperty('--ry', (x * 9) + 'deg'); wrap.style.setProperty('--rx', (-y * 7) + 'deg');
  });
  stage.addEventListener('pointerleave', () => { wrap.style.setProperty('--ry','0deg'); wrap.style.setProperty('--rx','0deg'); });
}

/* ============ collection ============ */
let filter = 'all';
function renderFilters(){
  const box = $('#filters'); box.innerHTML = '';
  const items = [['all', tr(T.all), P.length], ...Object.keys(CAT).map(k => [k, tr(CAT[k]), P.filter(p => p.cat === k).length])];
  items.forEach(([k, label, n]) => {
    const b = el('button', {class:'chip', type:'button', 'aria-pressed': filter === k}, `${label}<small>${n}</small>`);
    b.addEventListener('click', () => {
      filter = k;
      const run = () => { $$('#filters .chip').forEach((c,i) => c.setAttribute('aria-pressed', items[i][0] === k)); $$('#grid .card').forEach(c => c.classList.toggle('is-hidden', k !== 'all' && c.dataset.cat !== k)); };
      document.startViewTransition && !reduce ? document.startViewTransition(run) : run();
    });
    box.append(b);
  });
}
function cardHTML(p){
  return `<span class="card-img"><img src="${p.img}" alt="${typeof p.n === 'string' ? p.n : p.n.en}" loading="lazy" width="760" height="1000"></span>
  <span class="card-cap"><i></i><span><span class="card-name">${nm(p)}</span><span class="card-meta">${lineOf(p)}<bdi> · ${p.size}</bdi></span></span></span>`;
}
function renderGrid(){
  const g = $('#grid'); g.innerHTML = '';
  P.forEach(p => {
    const b = el('button', {class:'card' + (filter !== 'all' && p.cat !== filter ? ' is-hidden' : ''), type:'button', 'data-cat':p.cat, 'data-id':p.id}, cardHTML(p));
    b.style.setProperty('--c', p.c); b.style.setProperty('--t', p.t);
    b.addEventListener('click', () => openModal(p.id));
    g.append(b);
  });
}

/* ============ finder ============ */
let mood = 'fresh', fmt = 'any';
function renderMoodChips(){
  const m = $('#moodChips'); m.innerHTML = '';
  Object.keys(MOODS).forEach(k => {
    const b = el('button', {class:'chip', type:'button', 'aria-pressed': mood === k}, tr(MOODS[k]));
    b.addEventListener('click', () => { mood = k; renderMoodChips(); renderFinder(); });
    m.append(b);
  });
  const f = $('#formatChips'); f.innerHTML = '';
  [['any', tr(T.anyFormat)], ['splash', tr(CAT.splash)], ['shower', tr(CAT.shower)]].forEach(([k, label]) => {
    const b = el('button', {class:'chip', type:'button', 'aria-pressed': fmt === k}, label);
    b.addEventListener('click', () => { fmt = k; renderMoodChips(); renderFinder(); });
    f.append(b);
  });
}
function renderFinder(){
  const list = P.filter(p => p.mood.includes(mood) && (fmt === 'any' || p.cat === fmt));
  $('#finderCount').textContent = tr(T.count(list.length));
  const box = $('#finderResults'); box.innerHTML = '';
  list.forEach((p, k) => {
    const b = el('button', {class:'res enter', type:'button'}, `<img src="${p.img}" alt="${typeof p.n === 'string' ? p.n : p.n.en}" loading="lazy" width="760" height="1140"><div><b>${nm(p)}</b><span>${tr(CAT[p.cat])}<bdi> · ${p.size}</bdi></span></div>`);
    b.style.setProperty('--k', k);
    b.addEventListener('click', () => openModal(p.id));
    box.append(b);
  });
}

/* ============ ingredients ============ */
$('#sciImg').src = byId.p01.img;
let ingKey = 'ha';
function renderIngTabs(){
  const box = $('#ingTabs'); box.innerHTML = '';
  INGREDIENTS.forEach(i => {
    const b = el('button', {class:'ing-tab', type:'button', role:'tab', 'aria-selected': ingKey === i.k}, i.n);
    b.style.direction = 'ltr';
    b.addEventListener('click', () => { ingKey = i.k; renderIngTabs(); renderIng(); });
    b.addEventListener('keydown', e => {
      if (!['ArrowDown','ArrowUp'].includes(e.key)) return;
      e.preventDefault();
      const idx = INGREDIENTS.findIndex(x => x.k === ingKey) + (e.key === 'ArrowDown' ? 1 : -1);
      ingKey = INGREDIENTS[(idx + INGREDIENTS.length) % INGREDIENTS.length].k; renderIngTabs(); renderIng();
      $('.ing-tab[aria-selected="true"]').focus();
    });
    box.append(b);
  });
}
function renderIng(){
  const i = INGREDIENTS.find(x => x.k === ingKey);
  const panel = $('#ingPanel');
  panel.innerHTML = `<h3>${i.n}</h3><p>${tr(i.d)}</p><span class="where">${tr(T.found)}</span><div class="pill-row"></div>`;
  panel.style.animation = 'none'; panel.offsetHeight; panel.style.animation = '';
  const row = $('.pill-row', panel);
  const names = i.in.length > 5 ? [...i.in.filter(id => byId[id].cat === 'skin'), '__shower'] : i.in;
  names.forEach(id => {
    if (id === '__shower') { row.append(el('span', {class:'pill'}, lang === 'ar' ? 'جميع جل الاستحمام' : 'All shower gels')); return; }
    const p = byId[id];
    const b = el('button', {class:'pill', type:'button'}, nm(p)); b.addEventListener('click', () => openModal(id)); row.append(b);
  });
  if (i.in.every(id => byId[id].cat === 'shower')) { row.innerHTML = ''; row.append(el('span', {class:'pill'}, lang === 'ar' ? 'جميع جل الاستحمام' : 'All shower gels')); }
}

/* ============ product dialog ============ */
const dlg = $('#pm'); let modalId = null;
function renderModal(id){
  const p = byId[id]; modalId = id;
  const isAr = lang === 'ar' && typeof p.n !== 'string';
  $('#pmBody').innerHTML = `
    <div class="pm-media"><img src="${p.img}" alt="${typeof p.n === 'string' ? p.n : p.n.en}"></div>
    <div class="pm-info">
      <span class="pm-type">${tr(CAT[p.cat])} · ${lineOf(p)}</span>
      <h3 id="pmName" class="${isAr ? 'ar' : ''}">${nm(p)}</h3>
      <p>${tr(p.d)}</p>
      <ul class="pm-list">${[p.size, ...featOf(p)].map(f => `<li><span>${f}</span></li>`).join('')}</ul>
      <div class="pm-actions">
        <button class="btn btn-solid btn-sm" id="pmAsk" type="button">${tr(T.ask)}</button>
        <div class="pm-nav">
          <button type="button" id="pmPrev" aria-label="Previous"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <button type="button" id="pmNext" aria-label="Next"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>
    </div>`;
  dlg.style.setProperty('--c', p.c); dlg.style.setProperty('--t', p.t);
  $('#pmPrev').onclick = () => step(-1); $('#pmNext').onclick = () => step(1);
  $('#pmAsk').onclick = () => { dlg.close(); $('#fType').value = 'product'; $('#fMsg').value = tr(T.prefill(nm(p))); location.hash = '#contact'; setTimeout(() => $('#fName').focus({preventScroll:true}), 600); };
}
function step(d){ const i = P.findIndex(p => p.id === modalId); renderModal(P[(i + d + P.length) % P.length].id); }
function openModal(id){ renderModal(id); if (!dlg.open) dlg.showModal(); }
$('#pmClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('keydown', e => {
  const dir = document.documentElement.dir === 'rtl' ? -1 : 1;
  if (e.key === 'ArrowRight') step(dir); if (e.key === 'ArrowLeft') step(-dir);
});

/* ============ stats count-up ============ */
const nums = $$('[data-count]');
const countUp = n => {
  const end = +n.dataset.count; if (reduce) { n.textContent = end; return; }
  const t0 = performance.now(), dur = 1400;
  const f = t => { const k = Math.min((t - t0) / dur, 1); n.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
};
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); } }), {threshold:.6});
nums.forEach(n => io.observe(n));

/* ============ contact form ============ */
const form = $('#form');
const setErr = (id, msg) => { const f = $('#'+id).closest('.field'); f.classList.toggle('bad', !!msg); $(`.err[data-for="${id}"]`).textContent = msg || ''; };
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#fName').value.trim(), contact = $('#fContact').value.trim(), msg = $('#fMsg').value.trim();
  let ok = true;
  setErr('fName', name ? '' : (ok = false, tr(T.eName)));
  const isMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact), isTel = /^[+\d][\d\s()-]{6,}$/.test(contact);
  setErr('fContact', !contact ? (ok = false, tr(T.eContact)) : (isMail || isTel) ? '' : (ok = false, tr(T.eContactBad)));
  setErr('fMsg', msg ? '' : (ok = false, tr(T.eMsg)));
  if (!ok) { $('.field.bad input, .field.bad textarea', form)?.focus(); return; }
  const typeLabel = $('#fType').selectedOptions[0].textContent;
  const text = `RON Care website\nName: ${name}\nCompany: ${$('#fCompany').value.trim() || '-'}\nContact: ${contact}\nInterest: ${typeLabel}\n\n${msg}`;
  if (CONFIG.whatsapp) window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  else if (CONFIG.email) location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('RON Care website inquiry')}&body=${encodeURIComponent(text)}`;
  const s = $('#success'); s.hidden = false; s.innerHTML = `<b>${tr(T.okTitle)}</b>${tr(T.ok(name))}`;
  form.reset();
});
['fName','fContact','fMsg'].forEach(id => $('#'+id).addEventListener('input', () => setErr(id, '')));

/* ============ init ============ */
setHero(0); restart(); applyLang();
})();
