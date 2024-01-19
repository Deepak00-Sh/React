export default function App() {
  return (
    <div className="h-screen bg-indigo-700">
      <Header />
      <div className="p-6 md:p-10 md:m-6">
        <Product />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="grid place-content-center">
      <span className="m-6 text-4xl text-white font-bold">Shopify Online</span>
    </div>
  );
}

function ProductList() {
  return <div></div>;
}

function Product() {
  return (
    <div className="w-2/5 md:w-1/5 bg-white">
      <div>Image</div>
      <div>content</div>
    </div>
  );
}
