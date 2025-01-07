import chroma from 'chroma-js';
import { colornames } from 'color-name-list';

const getColorName = (hex) => {
  if (!colornames || colornames.length === 0) {
    console.error("Color list is undefined or empty.");
    return 'Unknown Color';
  }

  const match = colornames.find((color) => color.hex.toLowerCase() === hex.toLowerCase());

  if (!match) {
    // Jeśli nie znaleziono dokładnego dopasowania, znajdź najbliższy kolor
    const closest = colornames.reduce((prev, curr) => {
      const prevDistance = chroma.distance(hex, prev.hex);
      const currDistance = chroma.distance(hex, curr.hex);
      return currDistance < prevDistance ? curr : prev;
    });
    return closest ? closest.name : 'Unknown Color';
  }

  return match.name;
};

export const parseHexColor = (hex) => {
  if (!hex.startsWith('#')) {
    hex = `#${hex}`;
  }

  hex = hex.toLowerCase();

  if (!/^#[0-9a-f]{6}$/i.test(hex)) {
    throw new Error('Invalid HEX code. Please try again.');
  }

  const color = chroma(hex);
  const rgb = color.css(); // Formatuje jako 'rgb(r, g, b)'
  const hexNormalized = color.hex(); // Normalizowany HEX
  const name = getColorName(hexNormalized);

  // Zwracamy dane o kolorze w spójnej strukturze
  return {
    hex: hexNormalized,
    rgb,
    name: name || 'Unknown Color',
    css: `--${name.replace(/\s+/g, '-').toLowerCase()}: ${hexNormalized}`,
    scss: `$${name.replace(/\s+/g, '-').toLowerCase()}: ${hexNormalized}`,
    less: `@${name.replace(/\s+/g, '-').toLowerCase()}: ${hexNormalized}`,
  };
};
