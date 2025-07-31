// Full products list
const products = [
  {
    id: "1",
    name: "Classic Grey Hoodie",
    price: 350.00,
    desc: "A timeless, comfy grey hoodie made from sustainable materials.",
    img: "images/images (3).jpeg",
    alt: "Classic Grey Hoodie"
  },
  {
    id: "2",
    name: "Vintage Black Hoodie",
    price: 350.00,
    desc: "Sleek black zip-up hoodie with a soft interior.",
    img: "images/images.jpeg",
    alt: "Vintage Black Hoodie"
  },
  {
    id: "3",
    name: "Blue Hoodie",
    price: 350.00,
    desc: "Soft blue pullover hoodie, cozy and warm.",
    img: "images/download.jpeg",
    alt: "Blue Hoodie"
  },
  {
    id: "4",
    name: "Red Hoodie",
    price: 350.00,
    desc: "Vibrant red hoodie designed for sports.",
    img: "images/download (1).jpeg",
    alt: "Red Hoodie"
  },
  {
    id: "5",
    name: "Green Hoodie",
    price: 350.00,
    desc: "Eco-friendly hoodie made with recycled materials.",
    img: "images/download (2).jpeg",
    alt: "Green Hoodie"
  },
  {
    id: "6",
    name: "Yellow Hoodie",
    price: 350.00,
    desc: "Light yellow hoodie perfect for cool summer evenings.",
    img: "images/images (1).jpeg",
    alt: "Yellow Hoodie"
  },
  {
    id: "7",
    name: "Orange Hoodie",
    price: 350.00,
    desc: "Bright orange hoodie that brings energy and style.",
    img: "images/images (2).jpeg",
    alt: "Orange Hoodie"
  },
  {
    id: "8",
    name: "Purple Hoodie",
    price: 350.00,
    desc: "Bold purple hoodie with streetwear vibes.",
    img: "images/images (3).jpeg",
    alt: "Purple Hoodie"
  }
];

// Add product to cart by ID
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    alert("Product not found!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: product.name, price: product.price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
