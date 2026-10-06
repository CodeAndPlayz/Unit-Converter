const data = {
  length: {
    name: "Length",
    units: {
      mm: ["Millimeter", 1e-3],
      cm: ["Centimeter", 1e-2],
      m: ["Meter", 1],
      km: ["Kilometer", 1e3],
      in: ["Inch", 0.0254],
      ft: ["Foot", 0.3048],
      yd: ["Yard", 0.9144],
      mi: ["Mile", 1609.344],
      nmi: ["Nautical Mile", 1852],
      um: ["Micrometer", 1e-6],
      nm: ["Nanometer", 1e-9]
    },
    base: "meter"
  },
  area: {
    name: "Area",
    units: {
      mm2: ["Square Millimeter", 1e-6],
      cm2: ["Square Centimeter", 1e-4],
      m2: ["Square Meter", 1],
      km2: ["Square Kilometer", 1e6],
      in2: ["Square Inch", 0.00064516],
      ft2: ["Square Foot", 0.09290304],
      yd2: ["Square Yard", 0.83612736],
      acre: ["Acre", 4046.8564224],
      hectare: ["Hectare", 10000],
      mi2: ["Square Mile", 2589988.110336]
    },
    base: "square meter"
  },
  volume: {
    name: "Volume",
    units: {
      ml: ["Milliliter", 1e-6],
      l: ["Liter", 1e-3],
      cm3: ["Cubic Centimeter", 1e-6],
      m3: ["Cubic Meter", 1],
      in3: ["Cubic Inch", 0.000016387064],
      ft3: ["Cubic Foot", 0.028316846592],
      yd3: ["Cubic Yard", 0.764554857984],
      galUS: ["US Gallon", 0.003785411784],
      galUK: ["Imperial Gallon", 0.00454609]
    },
    base: "cubic meter"
  },
  time: {
    name: "Time",
    units: {
      ns: ["Nanosecond", 1e-9],
      us: ["Microsecond", 1e-6],
      ms: ["Millisecond", 1e-3],
      s: ["Second", 1],
      min: ["Minute", 60],
      h: ["Hour", 3600],
      day: ["Day", 86400],
      week: ["Week", 604800],
      month: ["Month (average)", 2629800],
      year: ["Year (365.2425 days)", 31556952]
    },
    base: "second"
  },
  temperature: {
    name: "Temperature",
    units: {
      c: ["Celsius"],
      f: ["Fahrenheit"],
      k: ["Kelvin"]
    },
    special: "temperature"
  },
  velocity: {
    name: "Velocity",
    units: {
      ms: ["Meter per Second", 1],
      kmh: ["Kilometer per Hour", 1000 / 3600],
      mph: ["Mile per Hour", 1609.344 / 3600],
      fps: ["Foot per Second", 0.3048],
      knot: ["Knot", 1852 / 3600]
    },
    base: "meter per second"
  },
  mass: {
    name: "Mass",
    units: {
      mg: ["Milligram", 1e-6],
      g: ["Gram", 1e-3],
      kg: ["Kilogram", 1],
      t: ["Metric Ton", 1000],
      oz: ["Ounce", 0.028349523125],
      lb: ["Pound", 0.45359237],
      stone: ["Stone", 6.35029318],
      grain: ["Grain", 0.00006479891]
    },
    base: "kilogram"
  },
  force: {
    name: "Force / Weight",
    units: {
      n: ["Newton", 1],
      kn: ["Kilonewton", 1000],
      dyn: ["Dyne", 1e-5],
      lbf: ["Pound-force", 4.4482216152605],
      kgf: ["Kilogram-force", 9.80665]
    },
    base: "newton"
  },
  pressure: {
    name: "Pressure",
    units: {
      pa: ["Pascal", 1],
      kpa: ["Kilopascal", 1000],
      mpa: ["Megapascal", 1e6],
      bar: ["Bar", 100000],
      atm: ["Standard Atmosphere", 101325],
      psi: ["Pounds per Square Inch", 6894.757293168],
      torr: ["Torr", 101325 / 760],
      mmhg: ["Millimeter of Mercury", 101325 / 760],
      inhg: ["Inch of Mercury", 3386.389]
    },
    base: "pascal"
  },
  energy: {
    name: "Energy / Work",
    units: {
      j: ["Joule", 1],
      kj: ["Kilojoule", 1000],
      cal: ["Calorie (thermochemical)", 4.184],
      kcal: ["Kilocalorie (thermochemical)", 4184],
      wh: ["Watt-hour", 3600],
      kwh: ["Kilowatt-hour", 3600000],
      btu: ["BTU (IT)", 1055.05585262],
      ev: ["Electronvolt", 1.602176634e-19],
      ftlb: ["Foot-pound force", 1.3558179483314]
    },
    base: "joule"
  },
  power: {
    name: "Power",
    units: {
      w: ["Watt", 1],
      kw: ["Kilowatt", 1000],
      mw: ["Megawatt", 1e6],
      hp: ["Mechanical Horsepower", 745.6998715822702],
      btuh: ["BTU per Hour", 0.293071070172222]
    },
    base: "watt"
  },
  siprefixes: {
    name: "SI Prefixes",
    units: {
      y: ["Yocto", 1e-24],
      z: ["Zepto", 1e-21],
      a: ["Atto", 1e-18],
      f: ["Femto", 1e-15],
      p: ["Pico", 1e-12],
      n: ["Nano", 1e-9],
      u: ["Micro", 1e-6],
      m: ["Milli", 1e-3],
      c: ["Centi", 1e-2],
      d: ["Deci", 1e-1],
      da: ["Deka", 1e1],
      h: ["Hecto", 1e2],
      k: ["Kilo", 1e3],
      M: ["Mega", 1e6],
      G: ["Giga", 1e9],
      T: ["Tera", 1e12],
      P: ["Peta", 1e15],
      E: ["Exa", 1e18],
      Z: ["Zetta", 1e21],
      Y: ["Yotta", 1e24]
    },
    base: "base unit"
  },
  ohms: {
    name: "Ohm's Law",
    special: "ohms"
  }
};

let current = "volume";
const $ = (id) => document.getElementById(id);

function fmt(n) {
  if (!Number.isFinite(n)) {
    return "—";
  }

  if (n !== 0 && (Math.abs(n) < 1e-7 || Math.abs(n) >= 1e12)) {
    return n.toExponential(8).replace(/\.0+e/, "e");
  }

  return Number(n.toPrecision(12)).toLocaleString("en-US", {
    maximumFractionDigits: 12
  });
}

function populate(select, units) {
  select.innerHTML = "";

  Object.entries(units).forEach(([key, item]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = item[0];
    select.appendChild(option);
  });
}

function renderNav() {
  const nav = $("categories");
  nav.innerHTML = "";

  Object.entries(data).forEach(([key, item]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.name;
    button.className = key === current ? "active" : "";
    button.addEventListener("click", () => {
      current = key;
      render();
    });
    nav.appendChild(button);
  });
}

function setFormulaText() {
  const category = data[current];

  if (category.special === "temperature") {
    $("formula").innerHTML = "<strong>Formula:</strong> convert between Celsius, Fahrenheit, and Kelvin using the corresponding scale equations.";
    return;
  }

  if (current === "ohms") {
    $("formula").innerHTML = "<strong>Formulas:</strong> V = I × R &nbsp; | &nbsp; I = V ÷ R &nbsp; | &nbsp; R = V ÷ I";
    return;
  }

  $("formula").innerHTML = `<strong>Formula:</strong> ${category.name} values are converted by comparing each unit to the base unit <em>${category.base}</em>.`;
}

function render() {
  renderNav();
  const category = data[current];

  $("categoryLabel").textContent = category.name.toUpperCase();
  $("categoryTitle").textContent = category.name;
  setFormulaText();

  if (current === "ohms") {
    renderOhms();
    return;
  }

  $("converterArea").innerHTML = `
    <div class="equation">
      <div class="conversion-side">
        <input id="value" type="number" step="any" value="1" aria-label="Input value">
        <select id="fromUnit" aria-label="From unit"></select>
      </div>
      <div class="arrow">→</div>
      <div class="conversion-side">
        <div class="output-value" id="outputValue" aria-live="polite">—</div>
        <select id="toUnit" aria-label="To unit"></select>
      </div>
    </div>
    <button class="swap-btn" id="swapBtn" type="button">⇄ Swap Units</button>
    <div class="result-line" id="resultLine"></div>
  `;

  populate($("fromUnit"), category.units);
  populate($("toUnit"), category.units);

  const keys = Object.keys(category.units);

  if (current === "volume") {
    $("value").value = 1000;
    $("fromUnit").value = "ml";
    $("toUnit").value = "l";
  } else if (current === "temperature") {
    $("value").value = 0;
    $("fromUnit").value = "c";
    $("toUnit").value = "f";
  } else {
    $("value").value = 1;
    $("fromUnit").value = keys[0];
    $("toUnit").value = keys[1] || keys[0];
  }

  $("value").addEventListener("input", calculate);
  $("fromUnit").addEventListener("change", calculate);
  $("toUnit").addEventListener("change", calculate);
  $("swapBtn").addEventListener("click", () => {
    const currentFrom = $("fromUnit").value;
    $("fromUnit").value = $("toUnit").value;
    $("toUnit").value = currentFrom;
    calculate();
  });

  calculate();
}

function calculate() {
  const category = data[current];
  const value = Number($("value").value);
  const from = $("fromUnit").value;
  const to = $("toUnit").value;

  if (!Number.isFinite(value)) {
    $("outputValue").textContent = "—";
    $("resultLine").textContent = "Enter a value.";
    updateSteps(null);
    return;
  }

  let result;

  if (category.special === "temperature") {
    result = convertTemperature(value, from, to);
  } else {
    result = value * category.units[from][1] / category.units[to][1];
  }

  $("outputValue").textContent = fmt(result);
  $("resultLine").innerHTML = `<strong>${fmt(value)} ${category.units[from][0]}</strong> = ${fmt(result)} ${category.units[to][0]}`;
  updateSteps({ x: value, from, to, out: result });
}

function convertTemperature(value, from, to) {
  const celsius = from === "c" ? value : from === "f" ? (value - 32) * 5 / 9 : value - 273.15;

  if (to === "c") {
    return celsius;
  }

  if (to === "f") {
    return celsius * 9 / 5 + 32;
  }

  return celsius + 273.15;
}

function step(title, text, math) {
  return `
    <div class="step">
      <div class="step-number">✓</div>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
        ${math ? `<div class="math">${math}</div>` : ""}
      </div>
    </div>
  `;
}

function numberedStep(number, title, text, math) {
  return `
    <div class="step">
      <div class="step-number">${number}</div>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
        ${math ? `<div class="math">${math}</div>` : ""}
      </div>
    </div>
  `;
}

function updateSteps(result) {
  const intro = $("stepsIntro");
  const steps = $("steps");

  if (!result) {
    intro.textContent = "Enter a value to see the worked solution.";
    steps.innerHTML = "";
    return;
  }

  const category = data[current];
  const { x, from, to, out } = result;
  const fromName = category.units[from][0];
  const toName = category.units[to][0];

  intro.textContent = `Here is the complete calculation for ${fmt(x)} ${fromName} → ${fmt(out)} ${toName}.`;

  if (category.special === "temperature") {
    steps.innerHTML = temperatureSteps(x, from, to, out);
    return;
  }

  const sourceFactor = category.units[from][1];
  const targetFactor = category.units[to][1];
  const baseValue = x * sourceFactor;
  const baseName = category.base;

  steps.innerHTML =
    numberedStep(
      1,
      "Identify the conversion",
      `We are converting ${fmt(x)} ${fromName} into ${toName}.`,
      `${fmt(x)} ${fromName} → ? ${toName}`
    ) +
    numberedStep(
      2,
      "Convert to the base unit",
      `The base unit for ${category.name} is the ${baseName}. Multiply the starting value by the ${fromName} factor.`,
      `${fmt(x)} × ${fmt(sourceFactor)} = ${fmt(baseValue)} ${baseName}`
    ) +
    numberedStep(
      3,
      "Convert the base unit to the target unit",
      `Now divide the base-unit value by the ${toName} factor.`,
      `${fmt(baseValue)} ÷ ${fmt(targetFactor)} = ${fmt(out)} ${toName}`
    ) +
    `<div class="step"><div class="step-number">4</div><div><h3>Final Answer</h3><div class="final-step">${fmt(x)} ${fromName} = <strong>${fmt(out)} ${toName}</strong></div></div></div>`;
}

function temperatureSteps(x, from, to, out) {
  const names = { c: "Celsius", f: "Fahrenheit", k: "Kelvin" };
  const fromName = names[from];
  const toName = names[to];
  let formula = "";
  let sub = "";

  if (from === "c" && to === "f") {
    formula = "°F = (°C × 9/5) + 32";
    sub = `(${fmt(x)} × 9/5) + 32 = ${fmt(out)} °F`;
  } else if (from === "f" && to === "c") {
    formula = "°C = (°F − 32) × 5/9";
    sub = `(${fmt(x)} − 32) × 5/9 = ${fmt(out)} °C`;
  } else if (from === "c" && to === "k") {
    formula = "K = °C + 273.15";
    sub = `${fmt(x)} + 273.15 = ${fmt(out)} K`;
  } else if (from === "k" && to === "c") {
    formula = "°C = K − 273.15";
    sub = `${fmt(x)} − 273.15 = ${fmt(out)} °C`;
  } else if (from === "f" && to === "k") {
    formula = "K = (°F − 32) × 5/9 + 273.15";
    sub = `(${fmt(x)} − 32) × 5/9 + 273.15 = ${fmt(out)} K`;
  } else {
    formula = "°F = (K − 273.15) × 9/5 + 32";
    sub = `(${fmt(x)} − 273.15) × 9/5 + 32 = ${fmt(out)} °F`;
  }

  return (
    numberedStep(1, "Identify the conversion", `We are converting ${fmt(x)} ${fromName} into ${toName}.`, `${fromName} → ${toName}`) +
    numberedStep(2, "Choose the correct temperature formula", "Temperature scales have different zero points, so we cannot simply multiply by a conversion factor.", formula) +
    numberedStep(3, "Substitute the value", "Put the given temperature into the formula and calculate.", sub) +
    `<div class="step"><div class="step-number">4</div><div><h3>Final Answer</h3><div class="final-step">${fmt(x)} ${fromName} = <strong>${fmt(out)} ${toName}</strong></div></div></div>`
  );
}

function renderOhms() {
  $("converterArea").innerHTML = `
    <div class="ohms-grid">
      <div class="ohm-field">
        <label for="ohmV">Voltage (V)</label>
        <input id="ohmV" type="number" step="any" placeholder="Enter V">
      </div>
      <div class="ohm-field">
        <label for="ohmI">Current (A)</label>
        <input id="ohmI" type="number" step="any" placeholder="Enter I">
      </div>
      <div class="ohm-field">
        <label for="ohmR">Resistance (Ω)</label>
        <input id="ohmR" type="number" step="any" placeholder="Enter R">
      </div>
    </div>
    <div class="ohm-result" id="ohmResult">Enter any two values.</div>
  `;

  ["ohmV", "ohmI", "ohmR"].forEach((id) => $(id).addEventListener("input", calcOhms));
  calcOhms();
}

function calcOhms() {
  const v = parseFloat($("ohmV").value);
  const i = parseFloat($("ohmI").value);
  const r = parseFloat($("ohmR").value);
  let result = null;

  if (Number.isFinite(v) && Number.isFinite(i) && i !== 0) {
    result = { type: "R", value: v / i };
  } else if (Number.isFinite(v) && Number.isFinite(r) && r !== 0) {
    result = { type: "I", value: v / r };
  } else if (Number.isFinite(i) && Number.isFinite(r)) {
    result = { type: "V", value: i * r };
  }

  if (!result) {
    $("ohmResult").innerHTML = "<strong>Enter any two values.</strong>";
    $("stepsIntro").textContent = "Enter any two Ohm's Law values to see the complete worked solution.";
    $("steps").innerHTML = "";
    return;
  }

  let label;
  let unit;
  let formula;
  let sub;

  if (result.type === "R") {
    label = "Resistance";
    unit = "Ω";
    formula = "R = V ÷ I";
    sub = `${fmt(v)} V ÷ ${fmt(i)} A = ${fmt(result.value)} Ω`;
  } else if (result.type === "I") {
    label = "Current";
    unit = "A";
    formula = "I = V ÷ R";
    sub = `${fmt(v)} V ÷ ${fmt(r)} Ω = ${fmt(result.value)} A`;
  } else {
    label = "Voltage";
    unit = "V";
    formula = "V = I × R";
    sub = `${fmt(i)} A × ${fmt(r)} Ω = ${fmt(result.value)} V`;
  }

  $("ohmResult").innerHTML = `<strong>${label} = ${fmt(result.value)} ${unit}</strong>`;
  $("stepsIntro").textContent = `Here is the complete Ohm's Law calculation for finding ${label}.`;
  $("steps").innerHTML =
    numberedStep(1, "Identify the known values", "Use the two values you entered and determine which quantity is missing.", knownOhmText(v, i, r)) +
    numberedStep(2, "Choose the correct Ohm's Law formula", "Rearrange Ohm's Law if necessary so the unknown value is alone.", formula) +
    numberedStep(3, "Substitute the values", "Put the known values into the formula and calculate.", sub) +
    `<div class="step"><div class="step-number">4</div><div><h3>Final Answer</h3><div class="final-step">${label} = <strong>${fmt(result.value)} ${unit}</strong></div></div></div>`;
}

function knownOhmText(v, i, r) {
  const parts = [];

  if (Number.isFinite(v)) {
    parts.push(`Voltage = ${fmt(v)} V`);
  }

  if (Number.isFinite(i)) {
    parts.push(`Current = ${fmt(i)} A`);
  }

  if (Number.isFinite(r)) {
    parts.push(`Resistance = ${fmt(r)} Ω`);
  }

  return parts.join(" • ");
}

render();

