function truncateTitle(title, maxChar, suffix = "...") {
  if (!title) return;
  return title.length > maxChar
    ? title.slice(0, maxChar).trim() + suffix
    : title;
}

function formatPrice(price) {
  return Number(price).toFixed(2);
}

export { truncateTitle, formatPrice };
