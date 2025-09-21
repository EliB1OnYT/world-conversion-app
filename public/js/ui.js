export function renderModule(name, module) {
  const c = document.createElement('div');
  c.className = 'module';

  const title = document.createElement('h2');
  title.textContent = name.toUpperCase();
  c.appendChild(title);

  const input = document.createElement('input');
  input.type = 'number'; input.placeholder = 'Value';
  const from = document.createElement('select');
  const to = document.createElement('select');
  module.units.forEach(u => {
    from.add(new Option(u,u));
    to.add(new Option(u,u));
  });
  const btn = document.createElement('button');
  btn.textContent = 'Convert';
  const res = document.createElement('div');

  btn.onclick = () => {
    const val = parseFloat(input.value);
    if (isNaN(val)) { res.textContent = 'Enter a number'; return; }
    res.textContent = module.convert(val, from.value, to.value);
  };

  c.append(input, from, to, btn, res);
  return c;
}

export function bindThemeToggle() {
  const btn = document.getElementById('themeToggle');
  btn.onclick = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? '🌙' : '☀️';
  };
}
