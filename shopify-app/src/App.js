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
    <div className="w-52 md:w-1/5 bg-white rounded-lg overflow-hidden ">
      <div>
        <img
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/n/f/q/-original-imagu8ykzszeqy6g.jpeg?q=70&crop=false"
          alt="bag"
          className="h-52 w-52 md:w-56"
        />
      </div>
      <div className="p-3">
        <span className=" font-semibold">Wildcraft Men Hoodie</span>
        <p className="text-sm text-slate-500">
          Stylish and Comforatable hoddies for men{" "}
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div>
      <button>Add to cart</button>
    </div>
  );
}
