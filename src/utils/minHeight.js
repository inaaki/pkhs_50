//measured form devtools
export const NAV_HEIGHT = '68.5px';

function minHeight(navHeight = NAV_HEIGHT) {
  return `calc(100vh - ${navHeight})`;
}

export default (x) => minHeight(x);
