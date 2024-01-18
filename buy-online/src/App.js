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
    <div className="container mx-auto">
      <Header />
      <ProductList productList={productList} />
    </div>
  );
}

function Header() {
  return <div className="header">BUY-ONLINE</div>;
}

function ProductList({ productList }) {
  return (
    <div className="flex flex-npwrap">
      {productList.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product">
      <span className="productName">{product.name}</span>
    </div>
  );
}
