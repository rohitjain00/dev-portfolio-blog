function onLoad() {
  var themeSelector = document.getElementById('themeSelector');
  console.log('inside on load method');
  for (var themeName in themeMap) {
    console.log('inside loop' + ' ' + themeName);
    var opt = document.createElement('option');
    opt.value = themeName;
    opt.innerHTML = capitalizeFirstLetter(themeName);
    themeSelector.appendChild(opt);
  }
}

function toggleTheme() {
  var themeName = themeSelector.value;
  var element = document.getElementsByTagName('html')[0];
  changeTheme(element, themeMap[themeName]);
}

function changeTheme(element, theme) {
  element.style.setProperty("--primary-background-color", theme['background-color']);
  element.style.setProperty("--primary-text-color", theme['text-color']);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}