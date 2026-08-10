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

  window.profileNamespacedKey = function (baseKey) {
    return baseKey + "__" + window.getActiveProfile();
  };
})();
