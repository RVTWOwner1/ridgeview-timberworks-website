const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryLinks = document.querySelectorAll("[data-gallery-filter]");
const form = document.querySelector(".quote-form");
const formNote = document.querySelector(".form-note");
const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

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

const galleryData = [
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-001.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 001"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-002.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 002"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-003.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 003"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-005.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 005"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-006.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 006"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-007.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 007"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-008.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 008"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-009.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 009"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-011.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 011"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-012.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 012"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-013.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 013"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-014.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 014"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-015.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 015"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-016.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 016"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-017.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 017"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-018.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 018"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-019.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 019"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-020.JPG",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 020"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-021.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 021"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-022.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 022"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-023.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 023"
    },
    {
        "category":  "trusses",
        "src":  "assets/gallery/Trusses/truss-024.jpg",
        "alt":  "Ridgeview Timberworks timber truss project",
        "caption":  "Timber Truss 024"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-001.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 001"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-002.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 002"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-003.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 003"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-004.JPG",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 004"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-005.JPG",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 005"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-006.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 006"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-007.JPG",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 007"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-008.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 008"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-009.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 009"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-010.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 010"
    },
    {
        "category":  "beams",
        "src":  "assets/gallery/Beams%20%26%20Posts/beam-post-011.jpg",
        "alt":  "Ridgeview Timberworks timber beam and post project",
        "caption":  "Timber Beam and Post 011"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-001.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 001"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-002.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 002"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-003.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 003"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-004.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 004"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-005.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 005"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/mantels-006.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Mantel 006"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/brackets-001.jpg",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Timber Bracket 001"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/brackets-002.JPG",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Timber Bracket 002"
    },
    {
        "category":  "mantels",
        "src":  "assets/gallery/Mantels%20%26%20Brackets/brackets-003.JPG",
        "alt":  "Ridgeview Timberworks mantel and bracket project",
        "caption":  "Timber Bracket 003"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-001.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 001"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-002.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 002"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-003.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 003"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-004.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 004"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-005.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 005"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-006.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 006"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-007.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 007"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-008.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 008"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-009.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 009"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-010.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 010"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-011.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 011"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-012.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 012"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-013.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 013"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-014.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 014"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-015.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 015"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-016.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 016"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-017.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 017"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-018.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 018"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-019.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 019"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-020.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 020"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-021.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 021"
    },
    {
        "category":  "outdoor",
        "src":  "assets/gallery/Outdoor%20Structures/outdoor-022.jpg",
        "alt":  "Ridgeview Timberworks outdoor timber structure",
        "caption":  "Outdoor Structure 022"
    }
];
const modal = document.querySelector(".gallery-modal");
const modalGrid = document.querySelector(".gallery-modal-grid");
const modalTitle = document.querySelector("#gallery-modal-title");
const modalClose = document.querySelector(".gallery-modal-close");
const modalTriggers = document.querySelectorAll("[data-modal-gallery]");
const galleryNames = {
  trusses: "Timber Trusses",
  beams: "Timber Beams & Posts",
  outdoor: "Outdoor Living Timber Structures",
  mantels: "Timber Mantels, Brackets, etc.",
};

const escapeHtml = (value) =>
  value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

const openGalleryModal = (category) => {
  const selected = galleryData.filter((item) => item.category === category);
  modalTitle.textContent = galleryNames[category] || "Project Gallery";
  modalGrid.innerHTML = selected
    .map(
      (item) => `<figure class="gallery-item"><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" /><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`
    )
    .join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeGalleryModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalGrid.innerHTML = "";
};

modalTriggers.forEach((button) => {
  button.addEventListener("click", () => openGalleryModal(button.dataset.modalGallery));
});
modalClose.addEventListener("click", closeGalleryModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeGalleryModal();
});