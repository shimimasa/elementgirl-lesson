(function () {
  var PASSWORD = "1234";
  var KEY = "tsukiyomido_auth_ok";
  if (localStorage.getItem(KEY) === "1") return;

  function showGate() {
    var gate = document.createElement("div");
    gate.id = "authGate";
    gate.style.cssText =
      "position:fixed;inset:0;z-index:2000000000;" +
      "background:#1a2140;color:#fff;" +
      "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;" +
      "font-family:'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif;" +
      "padding:20px;text-align:center;";
    gate.innerHTML =
      '<div style="font-size:22px;font-weight:bold;">🔒 あいことばを にゅうりょくしてね</div>' +
      '<input id="authPw" type="tel" inputmode="numeric" autocomplete="off" ' +
      'style="font-size:24px;padding:10px 16px;border-radius:8px;border:2px solid #ccc;width:220px;text-align:center;">' +
      '<button id="authBtn" style="font-size:18px;font-weight:bold;padding:10px 28px;' +
      'border-radius:999px;border:none;background:#ffd66b;color:#3a2a00;cursor:pointer;">すすむ</button>' +
      '<div id="authErr" style="color:#ffb4b4;font-size:14px;min-height:18px;"></div>';
    document.documentElement.appendChild(gate);

    var input = gate.querySelector("#authPw");
    var btn = gate.querySelector("#authBtn");
    var err = gate.querySelector("#authErr");

    function tryLogin() {
      if (input.value === PASSWORD) {
        localStorage.setItem(KEY, "1");
        gate.remove();
      } else {
        err.textContent = "ちがうよ、もういちど！";
        input.value = "";
        input.focus();
      }
    }
    btn.addEventListener("click", tryLogin);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") tryLogin();
    });
    setTimeout(function () { input.focus(); }, 50);
  }

  if (document.body) showGate();
  else document.addEventListener("DOMContentLoaded", showGate);
})();
