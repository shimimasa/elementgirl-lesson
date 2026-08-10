(function () {
  function isPortraitSmallDevice() {
    var portrait = window.matchMedia("(orientation: portrait)").matches;
    if (!portrait) return false;
    var coarse = window.matchMedia("(pointer: coarse)").matches;
    var narrow = Math.min(window.innerWidth, window.innerHeight) <= 900;
    return coarse || narrow;
  }

  var guard;

  function buildGuard() {
    guard = document.createElement("div");
    guard.id = "orientationGuard";
    guard.style.cssText =
      "position:fixed;inset:0;z-index:1999999999;" +
      "background:#1a2140;color:#fff;" +
      "display:none;flex-direction:column;align-items:center;justify-content:center;gap:18px;" +
      "font-family:'BIZ UDPGothic','Hiragino Maru Gothic ProN','Yu Gothic UI','Meiryo',sans-serif;" +
      "padding:24px;text-align:center;";
    guard.innerHTML =
      '<div style="width:44px;height:74px;border:4px solid #fff;border-radius:10px;' +
      "position:relative;animation:orientationGuardSpin 1.6s ease-in-out infinite;\">" +
      '<div style="position:absolute;left:50%;bottom:6px;width:8px;height:8px;' +
      'border-radius:50%;background:#fff;transform:translateX(-50%);"></div></div>' +
      '<div style="font-size:20px;font-weight:bold;line-height:1.6;">' +
      "スマホ・タブレットは<br>よこむきにして 見てね！</div>" +
      '<style>@keyframes orientationGuardSpin{' +
      "0%,20%{transform:rotate(0deg);}45%,100%{transform:rotate(-90deg);}" +
      "}</style>";
    document.documentElement.appendChild(guard);
    update();
  }

  function update() {
    if (!guard) return;
    guard.style.display = isPortraitSmallDevice() ? "flex" : "none";
  }

  function init() {
    buildGuard();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
  }

  if (document.body) init();
  else document.addEventListener("DOMContentLoaded", init);
})();
