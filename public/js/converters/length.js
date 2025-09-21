export const units = ["m", "km", "ft", "mi"];

export function convert(val, from, to) {
  const toMeters = { m: 1, km: 1000, ft: 0.3048, mi: 1609.34 };

  // Convert val to a number
  const num = parseFloat(val);
  if (isNaN(num)) return "Invalid number input";

  // Check if units exist
  if (!toMeters[from] || !toMeters[to]) return "Invalid unit";

  return (num * toMeters[from] / toMeters[to]).toFixed(4);
}
