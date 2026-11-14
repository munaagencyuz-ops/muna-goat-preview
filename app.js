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

/* News carousel arrows */
const newsTrack = document.getElementById('news-track');
document.getElementById('news-prev')?.addEventListener('click', () => {
  newsTrack?.scrollBy({ left: -380, behavior: 'smooth' });
});
document.getElementById('news-next')?.addEventListener('click', () => {
  newsTrack?.scrollBy({ left: 380, behavior: 'smooth' });
});
