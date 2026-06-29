document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  var themeSelector = document.getElementById('themeSelector');
  if (!themeSelector) {
    return;
  }
  for (var themeName in themeMap) {
    var opt = document.createElement('option');
    opt.value = themeName;
    opt.innerHTML = capitalizeFirstLetter(themeName);
      themeSelector.appendChild(opt);
  }
  themeSelector.addEventListener('change', toggleTheme);
  const theme = localStorage.getItem('theme');
  if (theme != null && themeMap[theme]) {
    themeSelector.value = theme;
    toggleTheme();
  }
}

function toggleTheme() {
  var themeSelector = document.getElementById('themeSelector');
  if (!themeSelector || !themeMap[themeSelector.value]) {
    return;
  }
  var themeName = themeSelector.value;
  localStorage.setItem('theme', themeName);
  var element = document.documentElement;
  changeTheme(element, themeName);
}

function changeTheme(element, themeName) {
  element.setAttribute('data-theme', themeName);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
