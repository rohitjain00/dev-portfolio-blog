function onLoad(){var e=document.getElementById("themeSelector");for(var t in themeMap){var o=document.createElement("option");o.value=t,o.innerHTML=capitalizeFirstLetter(t),e.appendChild(o)}null!=localStorage.getItem("theme")&&(e.value=localStorage.getItem("theme"),toggleTheme())}function toggleTheme(){var e=themeSelector.value;localStorage.setItem("theme",e),changeTheme(document.getElementsByTagName("html")[0],themeMap[e])}function changeTheme(e,t){e.style.setProperty("--primary-background-color",t["background-color"]),e.style.setProperty("--primary-text-color",t["text-color"]),e.style.setProperty("--primary-highlight-color",t["highlight-color"])}function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}