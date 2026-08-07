/** אייקונים איזומטריים בסגנון הדיורמה */
window.renderLunaIcon = function renderLunaIcon(name) {
  const key = String(name || "spark").replace(/[^a-zA-Z0-9_-]/g, "");
  const src = `assets/icons/${key}.png`;
  return `<img class="iso-icon" src="${src}" alt="" loading="lazy" onerror="this.onerror=null;this.src='assets/icons/spark.png';" />`;
};
