const url = new URL(window.location.href);
const level = url.searchParams.get("level");
const name = url.searchParams.get("name");
const mod = url.searchParams.get("mod");
let levels = {};
const script = document.createElement("script");
script.src = `mods/base.js`;
document.body.appendChild(script);
script.onload = () => {
    const leveldata = levels[level]
    document.getElementById("nameDisplay").textContent = `Name: ${name}`;
    document.getElementById("textDisplay").textContent = leveldata.text || "Level not found.";
    let options = [];
    for (let i = 0; i < leveldata.options.length; i++) {
        options.push(document.createElement("button"));
        options[i].textContent = leveldata.options[i];
        document.body.appendChild(options[i]);
    };
};
script.onerror = () => {
    document.getElementById("textDisplay").innerText = "Failed to load mod.";
};
