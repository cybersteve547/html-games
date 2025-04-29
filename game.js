const url = new URL(window.location.href);
const level = url.searchParams.get("level");
const name = url.searchParams.get("name");
const mod = url.searchParams.get("mod");
let inventory = [];
let levels = {};
levels.backrooms = {
  text: "If you're not careful and you noclip out of reality in the wrong areas, you'll end up in the Backrooms, where it's nothing but the stink of moist carpet, the...",
  options: [{text: "RUN", level: "backrooms"}]
};
const script = document.createElement("script");
script.src = `mods/base.js`;
document.body.appendChild(script);
script.onload = () => {
    const leveldata = levels[level] || levels.backrooms
    document.getElementById("nameDisplay").textContent = `Name: ${name}`;
    document.getElementById("textDisplay").textContent = leveldata.text || "Level not found.";
    let options = [];
    for (let i = 0; i < leveldata.options.length; i++) {
        options.push(document.createElement("button"));
        options[i].textContent = leveldata.options[i].text;
        document.body.appendChild(options[i]);
        options[i].onclick = function() {
            window.location.href = `game.html?mod=%22base%22&level=${options[i].level}&name=${name}`;
        };
    };
};
script.onerror = () => {
    document.getElementById("textDisplay").innerText = "Failed to load mod.";
};
