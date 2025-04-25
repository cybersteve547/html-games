const url = new URL(window.location.href);
const level = url.searchParams.get("level");
const name = url.searchParams.get("name");
const mod = url.searchParams.get("mod");
let levels = new Object();
let debug = "nooo"
const script = document.createElement("script");
script.src = `mods/${mod}.js`;
document.body.appendChild(script);
document.getElementById("nameDisplay").innerText = `Name: ${name}`;
document.getElementById("textDisplay").innerText = levels[level]?.text || debug;
