import resolveConfig from 'tailwindcss/resolveConfig'

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('@/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
<<<<<<< HEAD
  // maximumSignificantDigits: 3,
  // notation: 'compact',
  // minimumFractionDigits: 2,
}).format(value);
=======
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value)
>>>>>>> 2db35cf9bf392e589631efb31b30da8fd3199e3c

export const formatThousands = (value) => Intl.NumberFormat('pt-BR', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value)
