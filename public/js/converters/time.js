export const units = ["sec", "min", "hr", "day"];

export function convert(val, from, to) {
  const toSec = { sec: 1, min: 60, hr: 3600, day: 86400 };

  // Convert val to a number
  const num = parseFloat(val);
  if (isNaN(num)) return "Invalid number input";

  // Check if units exist
  if (!toSec[from] || !toSec[to]) return "Invalid unit";

  return (num * toSec[from] / toSec[to]).toFixed(4);
}
