document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const yearTarget = document.getElementById("current-year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav__link");

function setMenuOpen(open) {
  siteHeader.classList.toggle("site-header--open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu"
  );
}

if (siteHeader && navToggle) {
  navToggle.addEventListener("click", () => {
    setMenuOpen(!siteHeader.classList.contains("site-header--open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteHeader.classList.contains("site-header--open")) {
      setMenuOpen(false);
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      siteHeader.classList.contains("site-header--open") &&
      !siteHeader.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 60rem)");
  const resetMenuOnDesktop = (event) => {
    if (event.matches) setMenuOpen(false);
  };
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", resetMenuOnDesktop);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(resetMenuOnDesktop);
  }
}

const navSectionIds = [
  "home",
  "about",
  "education",
  "skills",
  "progress",
  "projects",
  "resume",
  "contact",
];

function setActiveNavLink(id) {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === "#" + id;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const navSections = navSectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && siteHeader && navSections.length) {
  const visibleNavSections = new Set();
  let lastActiveId = null;
  const navRootMargin = `-${siteHeader.offsetHeight + 8}px 0px -55% 0px`;

  const activeNavObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleNavSections.add(entry.target.id);
        } else {
          visibleNavSections.delete(entry.target.id);
        }
      });
      const nextId = navSectionIds.find((id) => visibleNavSections.has(id));
      if (nextId && nextId !== lastActiveId) {
        lastActiveId = nextId;
        setActiveNavLink(nextId);
      }
    },
    { rootMargin: navRootMargin, threshold: 0 }
  );

  navSections.forEach((section) => activeNavObserver.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").slice(1);
      lastActiveId = id;
      setActiveNavLink(id);
    });
  });
}
