(function () {
  const options = {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$",  right: "$",  display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    ignoredTags: ["script","noscript","style","textarea","pre","code"],
    throwOnError: false
  };

  function render() {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, options);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
  if (typeof document$ !== "undefined") {
    document$.subscribe(render);
  }
})();
