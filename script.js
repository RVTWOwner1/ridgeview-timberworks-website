const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryLinks = document.querySelectorAll("[data-gallery-filter]");
const form = document.querySelector(".quote-form");
const formNote = document.querySelector(".form-note");
const header = document.querySelector(".site-header");
const galleryPageButtons = document.querySelectorAll("[data-gallery-page-filter]");
const galleryPageSections = document.querySelectorAll("[data-gallery-section]");

const updateHeader = () => {
  const shouldStaySolid = header.dataset.fixedHeader === "true";
  header.classList.toggle("scrolled", shouldStaySolid || window.scrollY > 24);
};

if (header) {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menuButton && nav && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    header.classList.toggle("nav-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      header.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    setGalleryFilter(button.dataset.filter);
  });
});

galleryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setGalleryFilter(link.dataset.galleryFilter);
  });
});

const setGalleryFilter = (filter) => {
  filters.forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });

  galleryItems.forEach((item) => {
    item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
  });
};

const setGalleryPageFilter = (filter) => {
  galleryPageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.galleryPageFilter === filter);
  });

  galleryPageSections.forEach((section) => {
    section.classList.toggle("hidden", section.dataset.gallerySection !== filter);
  });
};

if (galleryPageButtons.length && galleryPageSections.length) {
  const validFilters = Array.from(galleryPageButtons).map((button) => button.dataset.galleryPageFilter);
  const initialFilter = validFilters.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : validFilters[0];
  setGalleryPageFilter(initialFilter);
  if (window.location.hash) {
    window.scrollTo({ top: 0 });
  }

  galleryPageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.galleryPageFilter;
      setGalleryPageFilter(filter);
      history.replaceState(null, "", `#${filter}`);
    });
  });
}

if (form && formNote) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    formNote.textContent = "Sending your quote request...";

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("The quote request could not be submitted.");
      }

      form.reset();
      formNote.textContent = "Thank you. Your quote request has been sent to Ridgeview Timberworks.";
    } catch (error) {
      formNote.textContent =
        "Something went wrong while sending the quote request. Please call or email Ridgeview Timberworks directly.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
