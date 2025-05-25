document.addEventListener("DOMContentLoaded", () => {
  // настройка анимации при скролле
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // анимация к карточкам
  document.querySelectorAll(".card, .neon-container").forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease-out";
    observer.observe(element);
  });

  // обработка модальных окон
  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // блокировка скролла
    });
  });

  // закрытие модальных окон
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
      document.body.style.overflow = ""; // разблокировка скролла
    });
  });

  // закрытие модального окна при клике вне окна
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  });

  // обработка обратной связи
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = contactForm.querySelector("button[type='submit']");
      const originalText = submitButton.textContent;
      
      // Показываем состояние загрузки
      submitButton.textContent = "Відправляємо...";
      submitButton.disabled = true;

      try {
        // симуляция отправки
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        alert("Повідомлення успішно відправлено! (це симуляція бекенду, реального відправлення немає)");
        contactForm.reset();
      } catch (error) {
        alert("Помилка при відправці. Спробуйте ще раз. (це симуляція бекенду, реального відправлення немає)");
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }

  // анимация при наведении на кнопки
  document.querySelectorAll(".neon-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.animation = "pulse 0.8s infinite alternate";
    });

    button.addEventListener("mouseleave", () => {
      button.style.animation = "";
    });
  });
});

// Эффект волн при клике
document.addEventListener("click", (e) => {
  const wave = document.createElement("div");
  wave.className = "click-wave";
  wave.style.left = e.clientX + "px";
  wave.style.top = e.clientY + "px";

  document.body.appendChild(wave);
  setTimeout(() => wave.remove(), 800);
});
