// Shared pieces for the site's line drawings (Journey).

export const round = (n) => Math.round(n * 10) / 10;

// A moringa tree: a slender trunk, a few arching branches and pairs of leaflets along each.
// `x` is where the trunk meets the ground, `ground` the ground's y, `h` the tree's height.
// `gap` is how far each leaflet sits from its branch.
export const tree = (x, ground, h, gap = 8) => {
  const branches = [];
  const leaves = [];
  [
    [0.45, -1, 0.5],
    [0.6, 1, 0.55],
    [0.75, -1, 0.42],
    [0.88, 1, 0.4],
    [1, -1, 0.3],
    [1, 1, 0.28],
  ].forEach(([f, dir, l]) => {
    const y0 = ground - h * f;
    const len = h * l;
    const x1 = x + dir * len;
    const y1 = y0 - len * 0.45;
    const cx = x + dir * len * 0.5;
    const cy = y0 - len * 0.5;
    branches.push(`M${x} ${round(y0)} Q${round(cx)} ${round(cy)} ${round(x1)} ${round(y1)}`);
    for (let k = 1; k <= 4; k++) {
      const t = k / 4;
      const px = (1 - t) ** 2 * x + 2 * (1 - t) * t * cx + t * t * x1;
      const py = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t * t * y1;
      leaves.push([round(px), round(py - gap)], [round(px), round(py + gap)]);
    }
  });
  return {
    trunk: `M${x} ${ground} C${x - 6} ${round(ground - h * 0.35)} ${x + 8} ${round(ground - h * 0.7)} ${x} ${ground - h}`,
    branches,
    leaves,
  };
};
