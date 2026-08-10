(function () {
  var KEY = "elementgirl_badge_progress";
  function slugFromPath() {
    return location.pathname.split("/").pop().replace(/\.html$/, "");
  }
  window.recordBadge = function (count, total) {
    try {
      var slug = slugFromPath();
      var data = JSON.parse(localStorage.getItem(KEY) || "{}");
      var prev = data[slug];
      var bestCount = prev ? Math.max(count, prev.count) : count;
      if (!prev || bestCount !== prev.count || total !== prev.total) {
        data[slug] = { count: bestCount, total: total, updatedAt: Date.now() };
        localStorage.setItem(KEY, JSON.stringify(data));
      }
    } catch (e) {}
  };
})();
