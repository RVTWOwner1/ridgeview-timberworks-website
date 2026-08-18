const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const form = document.querySelector(".quote-form");
const formNote = document.querySelector(".form-note");
const header = document.querySelector(".site-header");
const carouselTrack = document.querySelector(".gallery-carousel-track");
const carouselButtons = document.querySelectorAll("[data-carousel-filter]");
const homeGalleryLinks = document.querySelectorAll("[data-home-gallery-filter]");
const previousGalleryButton = document.querySelector(".gallery-arrow-left");
const nextGalleryButton = document.querySelector(".gallery-arrow-right");

const galleryPhotos = {
  trusses: [
    { src: "assets/gallery/Trusses/truss-001.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 001" },
    { src: "assets/gallery/Trusses/truss-002.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 002" },
    { src: "assets/gallery/Trusses/truss-003.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 003" },
    { src: "assets/gallery/Trusses/truss-005.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 005" },
    { src: "assets/gallery/Trusses/truss-006.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 006" },
    { src: "assets/gallery/Trusses/truss-007.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 007" },
    { src: "assets/gallery/Trusses/truss-008.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 008" },
    { src: "assets/gallery/Trusses/truss-009.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 009" },
    { src: "assets/gallery/Trusses/truss-011.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 011" },
    { src: "assets/gallery/Trusses/truss-012.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 012" },
    { src: "assets/gallery/Trusses/truss-013.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 013" },
    { src: "assets/gallery/Trusses/truss-014.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 014" },
    { src: "assets/gallery/Trusses/truss-015.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 015" },
    { src: "assets/gallery/Trusses/truss-016.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 016" },
    { src: "assets/gallery/Trusses/truss-017.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 017" },
    { src: "assets/gallery/Trusses/truss-018.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 018" },
    { src: "assets/gallery/Trusses/truss-019.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 019" },
    { src: "assets/gallery/Trusses/truss-020.JPG", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 020" },
    { src: "assets/gallery/Trusses/truss-021.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 021" },
    { src: "assets/gallery/Trusses/truss-022.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 022" },
    { src: "assets/gallery/Trusses/truss-023.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 023" },
    { src: "assets/gallery/Trusses/truss-024.jpg", alt: "Ridgeview Timberworks timber truss project", caption: "Timber Truss 024" },
  ],
  beams: [
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-001.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 001" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-002.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 002" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-003.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 003" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-004.JPG", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 004" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-005.JPG", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 005" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-006.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 006" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-007.JPG", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 007" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-008.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 008" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-009.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 009" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-010.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 010" },
    { src: "assets/gallery/Beams%20%26%20Posts/beam-post-011.jpg", alt: "Ridgeview Timberworks timber beam and post project", caption: "Timber Beam and Post 011" },
  ],
  outdoor: [
    { src: "assets/gallery/Outdoor%20Structures/outdoor-001.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 001" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-002.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 002" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-003.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 003" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-004.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 004" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-005.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 005" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-006.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 006" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-007.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 007" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-008.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 008" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-009.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 009" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-010.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 010" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-011.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 011" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-012.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 012" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-013.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 013" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-014.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 014" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-015.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 015" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-016.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 016" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-017.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 017" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-018.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 018" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-019.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 019" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-020.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 020" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-021.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 021" },
    { src: "assets/gallery/Outdoor%20Structures/outdoor-022.jpg", alt: "Ridgeview Timberworks outdoor timber structure", caption: "Outdoor Structure 022" },
  ],
  mantels: [
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-001.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 001" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-002.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 002" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-003.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 003" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-004.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 004" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-005.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 005" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/mantels-006.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Mantel 006" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/brackets-001.jpg", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Timber Bracket 001" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/brackets-002.JPG", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Timber Bracket 002" },
    { src: "assets/gallery/Mantels%20%26%20Brackets/brackets-003.JPG", alt: "Ridgeview Timberworks mantel and bracket project", caption: "Timber Bracket 003" },
  ],
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

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

const escapeHtml = (value) =>
  value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

const setCarouselCategory = (category) => {
  if (!carouselTrack || !galleryPhotos[category]) return;

  carouselButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.carouselFilter === category);
  });

  carouselTrack.innerHTML = galleryPhotos[category]
    .map(
      (photo) => `
        <figure class="gallery-carousel-slide">
          <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" />
        </figure>
      `
    )
    .join("");
  carouselTrack.scrollTo({ left: 0 });
};

if (carouselTrack) {
  setCarouselCategory("trusses");
}

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCarouselCategory(button.dataset.carouselFilter);
  });
});

homeGalleryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setCarouselCategory(link.dataset.homeGalleryFilter);
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  });
});

const scrollGallery = (direction) => {
  if (!carouselTrack) return;
  const slide = carouselTrack.querySelector(".gallery-carousel-slide");
  const distance = slide ? slide.getBoundingClientRect().width + 5 : carouselTrack.clientWidth * 0.8;
  carouselTrack.scrollBy({ left: direction * distance, behavior: "smooth" });
};

previousGalleryButton?.addEventListener("click", () => scrollGallery(-1));
nextGalleryButton?.addEventListener("click", () => scrollGallery(1));

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
