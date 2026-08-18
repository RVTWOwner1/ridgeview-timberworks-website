const getContentValue = (content, path) =>
  path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), content);

const escapeContentHtml = (value) =>
  value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

const setTextContent = (content) => {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getContentValue(content, element.dataset.content);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });
};

const setHtmlContent = (content) => {
  document.querySelectorAll("[data-content-html]").forEach((element) => {
    const value = getContentValue(content, element.dataset.contentHtml);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });
};

const setAttributeContent = (content) => {
  document.querySelectorAll("[data-content-attr]").forEach((element) => {
    const [path, attribute] = element.dataset.contentAttr.split(":");
    const value = getContentValue(content, path);
    if (typeof value === "string" && attribute) {
      element.setAttribute(attribute, value);
    }
  });
};

const setListContent = (content) => {
  document.querySelectorAll("[data-content-list]").forEach((element) => {
    const items = getContentValue(content, element.dataset.contentList);
    if (Array.isArray(items)) {
      element.innerHTML = items.map((item) => `<li>${escapeContentHtml(item)}</li>`).join("");
    }
  });
};

const setPageMeta = (content) => {
  if (content.seo?.title) {
    document.title = content.seo.title;
  }
};

const loadEditableContent = async () => {
  try {
    const response = await fetch("/content/site.json", { cache: "no-store" });
    if (!response.ok) return;

    const content = await response.json();
    setPageMeta(content);
    setTextContent(content);
    setHtmlContent(content);
    setAttributeContent(content);
    setListContent(content);
  } catch (error) {
    console.warn("Ridgeview Timberworks content file could not be loaded.", error);
  }
};

loadEditableContent();
