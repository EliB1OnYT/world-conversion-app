export const units = ["sec", "min", "hr", "day"];

export function convert(val, from, to) {
  const toSec = { sec:1, min:60, hr:3600, day:86400 };
  return (val * toSec[from] / toSec[to]).toFixed(4);
}
