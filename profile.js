(function () {
  var ACTIVE_KEY = "elementgirl_active_profile";
  var LIST_KEY = "elementgirl_profiles";

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) {}
  }

  window.getActiveProfile = function () {
    return safeGet(ACTIVE_KEY) || "default";
  };

  window.setActiveProfile = function (name) {
    safeSet(ACTIVE_KEY, name);
  };

  window.getProfileList = function () {
    try {
      return JSON.parse(safeGet(LIST_KEY) || "[]");
    } catch (e) {
      return [];
    }
  };

  window.addProfile = function (name) {
    var list = window.getProfileList();
    if (list.indexOf(name) === -1) {
      list.push(name);
      safeSet(LIST_KEY, JSON.stringify(list));
    }
  };

  window.removeProfile = function (name) {
    var list = window.getProfileList().filter(function (n) { return n !== name; });
    safeSet(LIST_KEY, JSON.stringify(list));

    var suffix = "__" + name;
    var toRemove = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.slice(-suffix.length) === suffix) toRemove.push(k);
    }
    for (var j = 0; j < toRemove.length; j++) {
      try { localStorage.removeItem(toRemove[j]); } catch (e) {}
    }

    if (window.getActiveProfile() === name) {
      window.setActiveProfile(list.length > 0 ? list[0] : "default");
    }
  };

  window.renameProfile = function (oldName, newName) {
    if (!newName || oldName === newName) return;
    var list = window.getProfileList();
    var idx = list.indexOf(oldName);
    if (idx === -1 || list.indexOf(newName) !== -1) return;
    list[idx] = newName;
    safeSet(LIST_KEY, JSON.stringify(list));

    var suffix = "__" + oldName;
    var renames = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.slice(-suffix.length) === suffix) {
        renames.push([k, k.slice(0, k.length - suffix.length) + "__" + newName]);
      }
    }
    for (var j = 0; j < renames.length; j++) {
      var v = localStorage.getItem(renames[j][0]);
      try { localStorage.removeItem(renames[j][0]); } catch (e) {}
      safeSet(renames[j][1], v);
    }

    if (window.getActiveProfile() === oldName) window.setActiveProfile(newName);
  };

  window.profileNamespacedKey = function (baseKey) {
    return baseKey + "__" + window.getActiveProfile();
  };

  // ---- 授業ページ用フローティングウィジェット ----
  // index.html は独自のプロフィールUI(#profileBar)を持つのでそちらを優先し、ここでは注入しない。
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return map[ch];
    });
  }

  function buildWidget() {
    if (document.getElementById("profileBar")) return;

    var widget = document.createElement("div");
    widget.id = "profileWidget";
    widget.style.cssText =
      "position:fixed;top:8px;right:8px;z-index:9000;" +
      "font-family:'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif;";

    var pill = document.createElement("button");
    pill.type = "button";
    pill.style.cssText =
      "display:inline-flex;align-items:center;gap:.3em;" +
      "color:#222;font-weight:700;font-size:13px;white-space:nowrap;" +
      "padding:6px 12px;border-radius:999px;border:none;" +
      "background:rgba(255,255,255,.85);box-shadow:0 2px 6px rgba(0,0,0,.25);cursor:pointer;";

    var panel = document.createElement("div");
    panel.style.cssText =
      "display:none;position:absolute;top:38px;right:0;" +
      "background:#fff;border-radius:14px;padding:12px;min-width:180px;" +
      "box-shadow:0 6px 24px rgba(0,0,0,.25);text-align:left;";

    widget.appendChild(pill);
    widget.appendChild(panel);
    document.documentElement.appendChild(widget);

    function updatePill() {
      var list = window.getProfileList();
      var active = window.getActiveProfile();
      pill.textContent = list.length === 0 ? "👤 なまえ未設定" : "👤 " + active;
    }

    function renderPanel() {
      var list = window.getProfileList();
      var active = window.getActiveProfile();
      var html = '<div style="font-size:13px;font-weight:bold;color:#555;margin-bottom:8px;">だれが あそぶ？</div>';
      for (var i = 0; i < list.length; i++) {
        var esc = escapeHtml(list[i]);
        var style = list[i] === active
          ? "background:#4a7fd6;color:#fff;"
          : "background:#f1f1f1;color:#555;";
        html += '<button type="button" data-name="' + esc + '" style="' + style +
          'border:none;border-radius:999px;padding:8px 14px;margin:3px 3px 3px 0;font-weight:bold;' +
          'font-family:inherit;font-size:13px;cursor:pointer;min-height:36px;">' + esc + '</button>';
      }
      html += '<div style="margin-top:8px;">' +
        '<input type="text" maxlength="10" placeholder="れい：ゆい" ' +
        'style="font-size:14px;padding:6px 10px;border-radius:8px;border:1px solid #ccc;width:100px;text-align:center;font-family:inherit;">' +
        '<button type="button" style="margin-left:4px;border-radius:999px;' +
        'background:#fff;color:#4a7fd6;border:1.5px dashed #4a7fd6;padding:6px 10px;font-weight:bold;' +
        'font-family:inherit;font-size:13px;cursor:pointer;">＋ついか</button></div>';
      panel.innerHTML = html;

      var btns = panel.querySelectorAll("button[data-name]");
      for (var j = 0; j < btns.length; j++) {
        btns[j].addEventListener("click", function () {
          window.setActiveProfile(this.getAttribute("data-name"));
          location.reload();
        });
      }
      var input = panel.querySelector("input");
      var addBtn = panel.querySelector("button:not([data-name])");
      function doAdd() {
        var name = input.value.trim().slice(0, 10);
        if (!name) return;
        window.addProfile(name);
        window.setActiveProfile(name);
        location.reload();
      }
      addBtn.addEventListener("click", doAdd);
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") doAdd();
      });
    }

    updatePill();
    pill.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = panel.style.display !== "none";
      if (open) { panel.style.display = "none"; return; }
      renderPanel();
      panel.style.display = "block";
    });
    document.addEventListener("click", function (e) {
      if (!widget.contains(e.target)) panel.style.display = "none";
    });
  }

  if (document.body) buildWidget();
  else document.addEventListener("DOMContentLoaded", buildWidget);
})();
