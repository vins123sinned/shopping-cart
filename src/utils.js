function truncateTitle(title, maxChar, suffix = "...") {
  if (!title) return;
  return title.length > maxChar
    ? title.slice(0, maxChar).trim() + suffix
    : title;
}

function formatPrice(price) {
  return Number(price).toFixed(2);
}

const productLinkMap = {
  "men's clothing": "mens-clothing",
  "women's clothing": "womens-clothing",
  jewelery: "jewelry",
  electronics: "electronics",
};

const productHeadingMap = {
  "men's clothing": "Men's Clothing",
  "women's clothing": "Women's Clothing",
  jewelery: "Jewelry",
  electronics: "Electronics",
};

export { truncateTitle, formatPrice, productLinkMap, productHeadingMap };
