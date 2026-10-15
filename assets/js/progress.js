(() => {
  "use strict";

  const STORAGE_PROBE_KEY = "__progress_probe__";

  const storageAvailable = (() => {
    try {
      window.localStorage.setItem(STORAGE_PROBE_KEY, "1");
      window.localStorage.removeItem(STORAGE_PROBE_KEY);
      return true;
    } catch (error) {
      return false;
    }
  })();

  const readSavedIds = (key) => {
    if (!storageAvailable) return null;

    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return null;

      return parsed.filter((id) => typeof id === "string");
    } catch (error) {
      return null;
    }
  };

  const writeSavedIds = (key, ids) => {
    if (!storageAvailable) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(ids));
    } catch (error) {
    }
  };

  const clearSavedIds = (key) => {
    if (!storageAvailable) return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
    }
  };

  const setupCard = (card) => {
    const storageKey = card.getAttribute("data-storage-key");
    const inputs = Array.from(
      card.querySelectorAll('input[type="checkbox"][data-topic]')
    );

    if (!storageKey || inputs.length === 0) return;

    const fill = card.querySelector("[data-progress-fill]");
    const bar = card.querySelector("[data-progress-bar]");
    const countTarget = card.querySelector("[data-progress-count]");
    const percentTarget = card.querySelector("[data-progress-percent]");
    const resetButton = card.querySelector("[data-progress-reset]");
    const titleTarget = card.querySelector(".progress-card__title");
    const total = inputs.length;

    const setTopicStyle = (input) => {
      const item = input.closest(".progress-topic");
      if (item) item.classList.toggle("is-done", input.checked);
    };

    const savedIds = readSavedIds(storageKey);
    const savedSet = savedIds ? new Set(savedIds) : null;

    inputs.forEach((input) => {
      if (savedSet && savedSet.has(input.getAttribute("data-topic"))) {
        input.checked = true;
      }

      setTopicStyle(input);

      input.addEventListener("change", () => {
        setTopicStyle(input);
        render(true);
      });
    });

    const collectCheckedIds = () =>
      inputs
        .filter((input) => input.checked)
        .map((input) => input.getAttribute("data-topic"));

    const render = (shouldSave) => {
      const completed = inputs.filter((input) => input.checked).length;
      const percent =
        total === 0 ? 0 : Math.round((completed / total) * 100);

      if (countTarget) {
        countTarget.textContent = `${completed} of ${total} topics completed`;
      }
      if (percentTarget) {
        percentTarget.textContent = `${percent}%`;
      }
      if (fill) {
        fill.style.width = `${percent}%`;
      }
      if (bar) {
        bar.setAttribute("aria-valuenow", String(percent));
      }
      if (shouldSave) {
        writeSavedIds(storageKey, collectCheckedIds());
      }
    };

    if (resetButton) {
      resetButton.addEventListener("click", () => {
        const title = titleTarget
          ? titleTarget.textContent.trim()
          : "this checklist";
        const confirmed = window.confirm(
          `Reset all progress for "${title}"? This cannot be undone.`
        );

        if (!confirmed) return;

        inputs.forEach((input) => {
          input.checked = false;
          setTopicStyle(input);
        });

        clearSavedIds(storageKey);
        render(false);
      });
    }

    render(false);
  };

  document
    .querySelectorAll("[data-progress-card]")
    .forEach((card) => setupCard(card));
})();
