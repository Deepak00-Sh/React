const productList = [
  {
    name: "Wildcraft backpack",
    color: "black",
    price: 1500,
    available: "5",
    image: "./images/wildcraftBag.webp",
  },
  {
    name: "wildcraft Jacket",
    color: "blue",
    price: 2500,
    available: 2,
    image: "./images/wildJacket.webp",
  },
  {
    name: "Nike Sneaker(size-8)",
    color: "white",
    price: 3250,
    available: 1,
    image: "/images/Nike.webp",
  },
];

export default function App() {
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
}

function ProductList({ productList }) {
  return (
    <div>
      <ul>
        {productList.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </div>
  );
}

function Product({ product }) {
  return <li>{product.name}</li>;
}
