// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Описания для фотографий
  const imageDescriptions = {
    1: "Я хотел помыться.",
    2: "У меня странное ебало, я был сонным на тот момент",
    3: "А вот это ваще пиздатая фотка, она мне нравится.",
    4: "Это еще одна пиздатая фотка, которая мне нравится.",
    5: "Это я такой типо ''че надо''",
    6: "Я хотел сожрать эту хуйню, но она сожрала меня.",
    7: "Тут я маленькая лапочка.",
    8: "Не дают спокойно жить, фоткают постоянно.",
    9: "Я милашка",
    10: "Хочу какать",
    11: "Мяв",
    12: "Заебали фоткать, дайте поспать.",
    13: "Чиназес.",
    14: "Мяяяяяяяяяяяяяяяяяяяяяяяяяяяя",
    15: "Я хотел спиздить бутервод ащыдаыщщы.",
    16: "Это моя pussy",
  };

  // Создаем галерею фотографий
  const gallery = document.getElementById("gallery");
  const totalImages = 16;

  for (let i = 1; i <= totalImages; i++) {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.dataset.index = i;

    const img = document.createElement("img");
    img.src = `images/tikislav-${i}.jpg`;
    img.alt = `Тикислав ${i}`;
    img.loading = "lazy";

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);

    // Добавляем обработчик клика для открытия модального окна
    galleryItem.addEventListener("click", function () {
      openModal(i);
    });
  }

  // Элементы модального окна
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption-text");
  const closeModal = document.getElementById("close-modal");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const imageCounter = document.getElementById("image-counter");

  let currentImageIndex = 1;

  // Функция открытия модального окна
  function openModal(index) {
    currentImageIndex = parseInt(index);
    updateModalImage();
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  // Функция закрытия модального окна
  function closeModalFunc() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  // Функция обновления изображения в модальном окне
  function updateModalImage() {
    modalImage.src = `images/tikislav-${currentImageIndex}.jpg`;
    modalImage.alt = `Тикислав ${currentImageIndex}`;
    modalCaption.textContent = imageDescriptions[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex} / ${totalImages}`;
  }

  // Функция перехода к следующему изображению
  function nextImage() {
    currentImageIndex =
      currentImageIndex >= totalImages ? 1 : currentImageIndex + 1;
    updateModalImage();
  }

  // Функция перехода к предыдущему изображению
  function prevImage() {
    currentImageIndex =
      currentImageIndex <= 1 ? totalImages : currentImageIndex - 1;
    updateModalImage();
  }

  // Обработчики событий
  closeModal.addEventListener("click", closeModalFunc);
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  // Закрытие модального окна при клике вне изображения
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  // Навигация с помощью клавиатуры
  document.addEventListener("keydown", function (e) {
    if (modal.classList.contains("show")) {
      if (e.key === "Escape") {
        closeModalFunc();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    }
  });

  // Анимация при загрузке страницы
  const mainCat = document.getElementById("main-cat");
  mainCat.style.opacity = "0";
  mainCat.style.transform = "translateY(20px)";

  setTimeout(() => {
    mainCat.style.transition = "opacity 1s ease, transform 1s ease";
    mainCat.style.opacity = "1";
    mainCat.style.transform = "translateY(0)";
  }, 500);

  // Случайное изменение главного изображения при клике
  mainCat.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    mainCat.src = `images/tikislav-${randomIndex}.jpg`;
    mainCat.alt = `Тикислав ${randomIndex}`;
  });

  // Слайдер цитат
  const quotes = document.querySelectorAll(".quote");
  const nextQuoteBtn = document.getElementById("next-quote");
  let currentQuoteIndex = 0;

  nextQuoteBtn.addEventListener("click", showNextQuote);

  // Функция создания частиц
  // Функция создания частиц
  function createParticles(clientX, clientY) {
    const particleCount = 30; // Увеличил количество частиц

    // Цветовая палитра для частиц
    const colorPalette = [
      "rgba(106, 17, 203, 0.9)", // Основной фиолетовый
      "rgba(37, 117, 252, 0.9)", // Основной синий
      "rgba(147, 51, 234, 0.9)", // Яркий фиолетовый
      "rgba(59, 130, 246, 0.9)", // Яркий синий
      "rgba(168, 85, 247, 0.9)", // Светлый фиолетовый
      "rgba(99, 102, 241, 0.9)", // Индиго
      "rgba(139, 92, 246, 0.9)", // Фиолетовый средний
      "rgba(79, 70, 229, 0.9)", // Синий средний
      "rgba(124, 58, 237, 0.9)", // Фиолетовый темный
      "rgba(67, 56, 202, 0.9)", // Синий темный
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Случайный размер частицы (3-10px) - увеличил диапазон
      const size = Math.random() * 7 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Случайное направление и расстояние (увеличил дальность)
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 120 + 60;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);

      // Позиционирование относительно viewport
      particle.style.left = `${clientX - size / 2}px`;
      particle.style.top = `${clientY - size / 2}px`;

      // Случайный цвет из палитры
      const randomColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particle.style.background = randomColor;

      // Добавляем небольшую задержку для разнообразия
      const delay = Math.random() * 0.3;
      particle.style.animationDelay = `${delay}s`;

      // Разная форма для разнообразия
      if (Math.random() > 0.7) {
        particle.style.borderRadius = "30%"; // Некоторые частицы не круглые
      }

      // Добавляем частицу прямо в body
      document.body.appendChild(particle);

      // Удаляем частицу после анимации
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200 + delay * 1000);
    }
  }

  // Функция создания частиц из центра кнопки (альтернативный вариант)
  function createParticlesFromButtonCenter() {
    const particleCount = 35; // Еще больше частиц

    const colorPalette = [
      "rgba(106, 17, 203, 0.9)", // Основной фиолетовый
      "rgba(37, 117, 252, 0.9)", // Основной синий
      "rgba(147, 51, 234, 0.9)", // Яркий фиолетовый
      "rgba(59, 130, 246, 0.9)", // Яркий синий
      "rgba(168, 85, 247, 0.9)", // Светлый фиолетовый
      "rgba(99, 102, 241, 0.9)", // Индиго
      "rgba(139, 92, 246, 0.9)", // Фиолетовый средний
      "rgba(79, 70, 229, 0.9)", // Синий средний
      "rgba(124, 58, 237, 0.9)", // Фиолетовый темный
      "rgba(67, 56, 202, 0.9)", // Синий темный
      "rgba(192, 132, 252, 0.9)", // Очень светлый фиолетовый
      "rgba(129, 140, 248, 0.9)", // Очень светлый синий
    ];

    const button = document.getElementById("next-quote");
    const rect = button.getBoundingClientRect();

    // Центр кнопки
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Случайный размер частицы (2-12px) - больше вариативности
      const size = Math.random() * 10 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Случайное направление и расстояние
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 150 + 80; // Увеличил дальность
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);

      // Позиционирование в центре кнопки
      particle.style.left = `${centerX - size / 2}px`;
      particle.style.top = `${centerY - size / 2}px`;

      // Случайный цвет из расширенной палитры
      const randomColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particle.style.background = randomColor;

      // Разная форма
      if (Math.random() > 0.8) {
        particle.style.borderRadius = "25%";
      } else if (Math.random() > 0.6) {
        particle.style.borderRadius = "40%";
      }

      // Случайная задержка анимации
      const delay = Math.random() * 0.4;
      particle.style.animationDelay = `${delay}s`;

      document.body.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200 + delay * 1000);
    }
  }

  // Функция показа следующей цитаты (выберите нужный вариант)
  function showNextQuote(e) {
    // Вариант 1: Частицы из места клика
    createParticles(e.clientX, e.clientY);

    // Вариант 2: Частицы из центра кнопки (раскомментируйте, если хотите использовать)
    // createParticlesFromButtonCenter();

    // Меняем цитату
    quotes[currentQuoteIndex].classList.remove("active");
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add("active");
  }
  // Автоматическая смена цитат каждые 10 секунд
  setInterval(() => {
    quotes[currentQuoteIndex].classList.remove("active");
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add("active");
  }, 10000);

  // Добавьте в конец файла script.js
  // Плавный скролл к основному контенту
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  }

  // Можно также добавить скролл по колесику мыши
  window.addEventListener("wheel", function (e) {
    if (window.scrollY === 0 && e.deltaY > 0) {
      // Если вверху страницы и скроллим вниз - плавный переход
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  });

  // Добавьте этот код в конец файла script.js
  // Плавный скролл от хедера к intro
  const headerScroll = document.querySelector(".header .scroll-indicator");
  if (headerScroll) {
    headerScroll.addEventListener("click", function () {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  }

  // Плавный скролл от intro к основному контенту
  const introScroll = document.querySelector(".intro-scroll");
  if (introScroll) {
    introScroll.addEventListener("click", function () {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    });
  }

  // Скролл по колесику мыши
  window.addEventListener("wheel", function (e) {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (currentScroll < windowHeight && e.deltaY > 0) {
      // Если в хедере и скроллим вниз - переходим к intro
      window.scrollTo({
        top: windowHeight,
        behavior: "smooth",
      });
    } else if (
      currentScroll >= windowHeight &&
      currentScroll < windowHeight * 2 &&
      e.deltaY > 0
    ) {
      // Если в intro и скроллим вниз - переходим к основному контенту
      window.scrollTo({
        top: windowHeight * 2,
        behavior: "smooth",
      });
    }
  });
  // Функция создания частиц для карточек
  function createCardParticles(clientX, clientY, type) {
    const particleCount = type === "fact" ? 25 : 20;
    const sizeRange = type === "fact" ? [4, 12] : [3, 8];

    // Разные цветовые палитры для фактов и друзей
    const colorPalettes = {
      fact: [
        "rgba(106, 17, 203, 0.9)", // Фиолетовый
        "rgba(37, 117, 252, 0.9)", // Синий
        "rgba(147, 51, 234, 0.9)", // Яркий фиолетовый
        "rgba(59, 130, 246, 0.9)", // Яркий синий
        "rgba(168, 85, 247, 0.9)", // Светлый фиолетовый
      ],
      friend: [
        "rgba(106, 17, 203, 0.9)", // Фиолетовый
        "rgba(37, 117, 252, 0.9)", // Синий
        "rgba(147, 51, 234, 0.9)", // Яркий фиолетовый
        "rgba(59, 130, 246, 0.9)", // Яркий синий
        "rgba(168, 85, 247, 0.9)", // Светлый фиолетовый
      ],
    };

    const colors = colorPalettes[type];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = `${type}-particle`;

      // Случайный размер частицы
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Случайное направление и расстояние
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 100 + 50;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);

      // Позиционирование
      particle.style.left = `${clientX - size / 2}px`;
      particle.style.top = `${clientY - size / 2}px`;

      // Случайный цвет
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;

      // Разная форма
      if (Math.random() > 0.7) {
        particle.style.borderRadius = "30%";
      } else if (Math.random() > 0.5) {
        particle.style.borderRadius = "10px";
      }

      // Случайная задержка и продолжительность анимации
      const delay = Math.random() * 0.4;
      const duration = 1 + Math.random() * 0.5;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      document.body.appendChild(particle);

      // Удаляем частицу после анимации
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    }
  }

  // Добавляем обработчики для карточек фактов
  const factCards = document.querySelectorAll(".fact-card");
  factCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      createCardParticles(e.clientX, e.clientY, "fact");

      // Дополнительный визуальный эффект
      
    });
  });

  // Добавляем обработчики для карточек друзей
  const friendCards = document.querySelectorAll(".friend-card");
  friendCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      createCardParticles(e.clientX, e.clientY, "friend");

      // Дополнительный визуальный эффект
      
    });
  });

  // Добавляем обработчики для изображений друзей (отдельный эффект)
  const friendImages = document.querySelectorAll(".friend-image");
  friendImages.forEach((image) => {
    image.addEventListener("click", function (e) {
      e.stopPropagation(); // Предотвращаем срабатывание родительского обработчика
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      createCardParticles(centerX, centerY, "friend");
    });
  });
});
