import * as length from './converters/length.js';
import * as weight from './converters/weight.js';
import * as area from './converters/area.js';
import * as timec from './converters/time.js';
import * as currency from './converters/currency.js';
import { renderModule, bindThemeToggle } from './ui.js';

const MODULES = { length, weight, area, time: timec, currency };

function setActiveModule(name) {
  const module = MODULES[name];
  const main = document.getElementById('mainArea');
  main.innerHTML = '';
  main.appendChild(renderModule(name, module));
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setActiveModule(btn.dataset.module);
  });
});

setActiveModule('length');
bindThemeToggle();

if (navigator.onLine) {
  currency.updateRates().catch(() => {});
}
