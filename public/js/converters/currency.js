export const units = ["USD", "EUR", "GBP", "JPY"];

let rates = { USD:1, EUR:0.92, GBP:0.79, JPY:146.5 }; // fallback

export function convert(val, from, to) {
  const num = parseFloat(val);
  if (isNaN(num)) return "Invalid number input";
  if (!rates[from] || !rates[to]) return "Invalid currency";

  return (num / rates[from] * rates[to]).toFixed(2);
}

export async function updateRates() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    if (data && data.rates) rates = data.rates;
  } catch (err) {
    console.warn("Currency update failed, using fallback");
  }
}
