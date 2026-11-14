const CASES = {
  miratorg: {
    kicker: 'РИТЕЙЛ / ШОУРУМ · ТАШКЕНТ · 2024–2025',
    title: 'MIRATORG Signature',
    sub: 'Открытие шоурума в Ташкенте с 5 фуд- и лайфстайл-блогерами.',
    metrics: [
      { value: '690 422', label: 'Просмотров у блогеров' },
      { value: '10 524', label: 'Взаимодействий' },
      { value: '2 103', label: 'Кликов по интеграциям' },
    ],
    body: [
      'Задача: привлечь покупателей в новый ташкентский шоурум премиальных мясных продуктов.',
      'Решение: 5 фуд-блогеров показали готовку дома и живой визит в шоурум.',
    ],
    images: ['./assets/cases/miratorg-cover.webp', './assets/cases/miratorg-1.webp'],
  },
  salampay: {
    kicker: 'ФИНТЕХ · АМБАССАДОР 360° · 2024–2025',
    title: 'SalamPay × Хабиб',
    sub: 'Мультиканальная кампания и бренд-амбассадорство с Хабибом Нурмагомедовым.',
    metrics: [
      { value: '27 086 000+', label: 'Суммарный охват' },
      { value: '360°', label: 'Синхронный запуск' },
      { value: '24/7', label: 'Контроль бренда и прав' },
    ],
    body: [
      'Задача: быстро построить доверие к сервису международных денежных переводов.',
      'Решение: заключили амбассадорское партнёрство, сняли серию роликов и развернули поддержку у инфлюенсеров и в Telegram.',
    ],
    images: ['./assets/cases/salampay-cover.webp', './assets/cases/salampay-1.webp'],
  },
  unistream: {
    kicker: 'ФИНТЕХ · YOUTUBE · УЗБЕКИСТАН',
    title: 'Unistream',
    sub: 'Интеграции у узбекоязычных YouTube-авторов для сервисов переводов.',
    metrics: [
      { value: '1 542 450', label: 'Просмотров на YouTube' },
      { value: '158 552', label: 'Вовлечений аудитории' },
      { value: 'UZ', label: 'Нативные сценарии' },
    ],
    body: [
      'Задача: доступно объяснить условия и выгоду переводов массовой узбекоязычной аудитории.',
      'Решение: выбрали развлекательные и лайфстайл YouTube-каналы с высокой глубиной досмотра и интегрировали продукт в сюжет.',
    ],
    images: ['./assets/cases/unistream-cover.webp', './assets/cases/unistream-1.webp'],
  },
  koronapay: {
    kicker: 'ФИНТЕХ · БЛОГЕРЫ И TELEGRAM PR',
    title: 'KoronaPay',
    sub: 'Инфлюенсер-маркетинг и посевы в Telegram-каналах Узбекистана.',
    metrics: [
      { value: 'UZ + RU', label: 'Двуязычный охват' },
      { value: 'PR + Ads', label: 'Связка каналов' },
      { value: '100%', label: 'Верификация выходов' },
    ],
    body: [
      'Задача: усилить знание и доверие к переводам на локальном рынке Узбекистана.',
      'Решение: совместили публикации у блогеров с волной нативных постов в проверенных новостных и тематических Telegram-каналах.',
    ],
    images: ['./assets/cases/koronapay-cover.webp', './assets/cases/koronapay-1.webp'],
  },
  huawei: {
    kicker: 'ЭЛЕКТРОНИКА · ТАШКЕНТ',
    title: 'Huawei Band 6',
    sub: 'Локальный запуск носимой электроники через лайфстайл- и техно-блогеров.',
    metrics: [
      { value: 'UZ + RU', label: 'Авторы в Ташкенте' },
      { value: 'UGC', label: 'Ролики под таргет' },
      { value: 'Reels', label: 'Видеодемонстрации' },
    ],
    body: [
      'Задача: показать сценарии ежедневного использования фитнес-браслета Huawei Band 6.',
      'Решение: собрали техно- и лайфстайл-креаторов, сняли нативные обзоры и передали материалы для рекламной поддержки.',
    ],
    images: ['./assets/cases/huawei-cover.webp'],
  },
  kabrita: {
    kicker: 'FMCG · TELEGRAM SEEDING',
    title: 'Kabrita',
    sub: 'Посевы в 20 проверенных Telegram-каналах для молодых родителей.',
    metrics: [
      { value: '20', label: 'Профильных каналов' },
      { value: '235 000+', label: 'Подписчиков охвата' },
      { value: 'ERR', label: 'Аудит перед размещением' },
    ],
    body: [
      'Задача: точечно выйти на родителей и семьи без переплаты за нецелевой трафик.',
      'Решение: проверили каналы по стабильности просмотров и выпустили серию полезных нативных постов с метками переходов.',
    ],
    images: ['./assets/cases/kabrita-cover.webp', './assets/cases/kabrita-1.webp', './assets/cases/kabrita-2.webp'],
  },
  xiaomi: {
    kicker: 'ЭЛЕКТРОНИКА × КИБЕРСПОРТ',
    title: 'Xiaomi × PUBG Mobile',
    sub: 'SMM, таргетинг, амбассадоры и турнирный запуск в Узбекистане.',
    metrics: [
      { value: 'Топ-3', label: 'Лидерство в киберспорте' },
      { value: 'SMM + UGC', label: 'Контент и охваты' },
      { value: 'UZ', label: 'Молодёжный сегмент' },
    ],
    body: [
      'Задача: закрепить образ смартфонов Xiaomi как выбора номер один для мобильного гейминга.',
      'Решение: объединили гейминг-блогеров, турнирную повестку PUBG Mobile и регулярный SMM-контент.',
    ],
    images: ['./assets/cases/xiaomi-cover.webp', './assets/cases/xiaomi-1.webp', './assets/cases/xiaomi-2.webp'],
  },
  unionpay: {
    kicker: 'ФИНТЕХ · ОМНИКАНАЛ 360°',
    title: 'UnionPay × HUMO',
    sub: 'Шестимесячная промо-акция: сайт, Telegram-бот, блогеры и 60 000+ участников.',
    metrics: [
      { value: '10 505', label: 'Принятых чеков' },
      { value: '$61 600', label: 'Сумма покупок' },
      { value: '60 000+', label: 'Человек в охвате' },
    ],
    body: [
      'Задача: стимулировать оплату картами UnionPay и HUMO в партнёрских торговых сетях по всей стране.',
      'Решение: создали промо-сайт, Telegram-бота, прямые эфиры розыгрышей и подключили блогеров с региональным таргетом.',
    ],
    images: ['./assets/cases/unionpay-cover.webp', './assets/cases/unionpay-1.webp', './assets/cases/unionpay-2.webp'],
  },
};

const REEL_SUMMARY = {
  kicker: 'СВОДКА ПОКАЗАТЕЛЕЙ · MUNA MEDIA',
  title: 'Реальные цифры из кейсов',
  sub: 'Подборка публично подтверждённых результатов Muna Media в Узбекистане (XM и Alpari исключены).',
  metrics: [
    { value: '27 086 000+', label: 'Охват SalamPay × Хабиб' },
    { value: '1 542 450', label: 'Просмотры Unistream YouTube' },
    { value: '690 422', label: 'Просмотры MIRATORG Signature' },
    { value: '10 505', label: 'Чеков UnionPay × HUMO ($61 600)' },
  ],
  body: [
    'Все 14 кейсов, полные метрики и юридические реквизиты ООО «MAERO» размещены на основном сайте munaagency.uz.',
  ],
  images: ['./assets/cases/salampay-cover.webp', './assets/cases/unistream-cover.webp', './assets/cases/miratorg-cover.webp'],
};

/* Subtle ambient hero slide rotation */
const heroSlides = [...document.querySelectorAll('.hero-bg-slide')];
if (heroSlides.length > 1) {
  let idx = 0;
  window.setInterval(() => {
    heroSlides[idx].classList.remove('is-active');
    idx = (idx + 1) % heroSlides.length;
    heroSlides[idx].classList.add('is-active');
  }, 3200);
}

/* Mobile menu toggle */
const menuBtn = document.getElementById('menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
if (menuBtn && mobileDrawer) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    mobileDrawer.hidden = open;
  });
  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.hidden = true;
    });
  });
}

/* Case & Reel Modal */
const caseModal = document.getElementById('case-modal');
const caseTitle = document.getElementById('case-modal-title');
const caseSub = document.getElementById('case-modal-sub');
const caseKicker = document.getElementById('case-modal-kicker');
const caseMetrics = document.getElementById('case-modal-metrics');
const caseBody = document.getElementById('case-modal-body');
const caseGallery = document.getElementById('case-modal-gallery');
const caseClose = document.getElementById('case-modal-close');
const caseCta = document.getElementById('case-modal-cta');

function openInfoModal(payload) {
  if (!caseModal) return;
  caseKicker.textContent = payload.kicker;
  caseTitle.textContent = payload.title;
  caseSub.textContent = payload.sub;
  caseMetrics.innerHTML = payload.metrics
    .map((m) => `<div class="dialog-metric"><strong>${m.value}</strong><span>${m.label}</span></div>`)
    .join('');
  caseBody.innerHTML = payload.body.map((p) => `<p>${p}</p>`).join('');
  caseGallery.innerHTML = (payload.images || [])
    .map((src) => `<img src="${src}" alt="${payload.title}" loading="lazy" />`)
    .join('');
  caseModal.showModal();
}

document.querySelectorAll('[data-case-trigger]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-case-trigger');
    if (id && CASES[id]) openInfoModal(CASES[id]);
  });
});

document.getElementById('open-reel-btn')?.addEventListener('click', () => openInfoModal(REEL_SUMMARY));
document.getElementById('open-reel-btn-2')?.addEventListener('click', () => openInfoModal(REEL_SUMMARY));
caseClose?.addEventListener('click', () => caseModal?.close());

/* Brief Modal */
const contactModal = document.getElementById('contact-modal');
const contactClose = document.getElementById('contact-modal-close');

document.querySelectorAll('[data-open-brief]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal?.showModal();
  });
});

caseCta?.addEventListener('click', () => {
  caseModal?.close();
  contactModal?.showModal();
});

contactClose?.addEventListener('click', () => contactModal?.close());

[caseModal, contactModal].forEach((dlg) => {
  dlg?.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
});

/* Brief generator inside demo modal */
const demoForm = document.getElementById('demo-brief-form');
const demoOut = document.getElementById('demo-brief-output');
const demoText = document.getElementById('demo-brief-text');
const demoCopy = document.getElementById('demo-brief-copy');

demoForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(demoForm);
  const text = [
    'MUNA MEDIA · БРИФ (GOAT-STYLE DEMO)',
    `Имя: ${fd.get('name') || ''}`,
    `Бренд: ${fd.get('brand') || ''}`,
    `Телефон: ${fd.get('phone') || ''}`,
    `Формат: ${fd.get('format') || ''}`,
    `Задача: ${fd.get('task') || ''}`,
  ].join('\n');
  if (demoText && demoOut) {
    demoText.value = text;
    demoOut.hidden = false;
  }
});

demoCopy?.addEventListener('click', async () => {
  if (!demoText) return;
  try {
    await navigator.clipboard.writeText(demoText.value);
    demoCopy.textContent = 'Скопировано';
  } catch {
    demoText.select();
  }
});

/* Goat-style Motion & Scroll Choreography */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1. Floating Header scroll state */
const siteHeader = document.getElementById('site-header');
function syncHeaderScroll() {
  if (!siteHeader) return;
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', syncHeaderScroll, { passive: true });
syncHeaderScroll();

/* 2. Goat SplitText word-by-word reveal ([data-animation="write-text"]) */
function splitWordsForReveal(el) {
  if (el.tagName === 'P') el.classList.add('is-body');
  el.setAttribute('aria-label', (el.textContent || '').trim());
  let wordIndex = 0;
  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = (node.textContent || '').split(/(\s+)/);
      const frag = document.createDocumentFragment();
      for (const part of parts) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.style.setProperty('--wi', String(wordIndex++));
          span.textContent = part;
          frag.appendChild(span);
        }
      }
      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
      [...node.childNodes].forEach(walk);
    }
  };
  [...el.childNodes].forEach(walk);
}

const writeEls = [...document.querySelectorAll('[data-animation="write-text"]')];
writeEls.forEach(splitWordsForReveal);

/* 3. Staggered reveal on cards & brands */
const revealEls = [
  ...document.querySelectorAll('.work-card'),
  ...document.querySelectorAll('.brand-cell'),
  ...document.querySelectorAll('.news-card'),
];
revealEls.forEach((el, idx) => {
  el.classList.add('reveal-item');
  const col = el.classList.contains('brand-cell') ? idx % 4 : idx % 3;
  el.style.setProperty('--reveal-delay', `${col * 70}ms`);
});

const servicesSection = document.getElementById('services');

if (prefersReducedMotion) {
  writeEls.forEach((el) => el.classList.add('is-revealed'));
  revealEls.forEach((el) => el.classList.add('is-revealed'));
  servicesSection?.classList.remove('is-collapsed');
} else {
  const revealObs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        if (target === servicesSection) {
          servicesSection.classList.remove('is-collapsed');
        } else {
          target.classList.add('is-revealed');
        }
        observer.unobserve(target);
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
  );

  writeEls.forEach((el) => revealObs.observe(el));
  revealEls.forEach((el) => revealObs.observe(el));
  if (servicesSection) revealObs.observe(servicesSection);
}

/* 4. Goat Markets scroll-linked focus list */
const marketItems = [...document.querySelectorAll('.markets-list li')];
const marketsSection = document.getElementById('markets');
const marketsOrb = document.querySelector('.markets-orb');
let marketsRaf = 0;

function updateMarketsScroll() {
  marketsRaf = 0;
  if (prefersReducedMotion || !marketItems.length) return;
  const vh = window.innerHeight || 900;
  const centerY = vh * 0.52;
  for (const li of marketItems) {
    const rect = li.getBoundingClientRect();
    const itemCenter = rect.top + rect.height * 0.5;
    const dist = Math.abs(itemCenter - centerY);
    const ratio = Math.max(0, 1 - dist / (vh * 0.52));
    const opacity = 0.28 + ratio * 0.72;
    const scale = 0.96 + ratio * 0.06;
    li.style.setProperty('--market-opacity', opacity.toFixed(3));
    li.style.setProperty('--market-scale', scale.toFixed(3));
  }
  if (marketsSection && marketsOrb) {
    const sRect = marketsSection.getBoundingClientRect();
    const progress = (vh - sRect.top) / (vh + sRect.height);
    const shift = (progress - 0.5) * 90;
    marketsOrb.style.transform = `translateY(calc(-50% + ${shift.toFixed(1)}px))`;
  }
}

window.addEventListener(
  'scroll',
  () => {
    if (!marketsRaf) marketsRaf = window.requestAnimationFrame(updateMarketsScroll);
  },
  { passive: true },
);
updateMarketsScroll();

/* 5. Service fan cards click -> open brief with matching format */
const serviceFormatMap = {
  'Медиа и каналы': 'Блогеры (UZ / RU)',
  'Подбор и аудит авторов': 'Блогеры (UZ / RU)',
  'Стратегия UZ / RU': 'Амбассадоры',
  'UGC и Reels продакшн': 'UGC под таргет',
  'Посевы и 360°': 'Посевы в Telegram',
};
document.querySelectorAll('.service-fan-card').forEach((card) => {
  card.addEventListener('click', () => {
    const svc = card.getAttribute('data-service-name') || '';
    const select = document.querySelector('#demo-brief-form select[name="format"]');
    if (select && serviceFormatMap[svc]) {
      select.value = serviceFormatMap[svc];
    }
    document.getElementById('contact-modal')?.showModal();
  });
});

/* News carousel arrows */
const newsTrack = document.getElementById('news-track');
document.getElementById('news-prev')?.addEventListener('click', () => {
  newsTrack?.scrollBy({ left: -380, behavior: 'smooth' });
});
document.getElementById('news-next')?.addEventListener('click', () => {
  newsTrack?.scrollBy({ left: 380, behavior: 'smooth' });
});
