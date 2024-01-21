const list = [
  {
    name: "Puma Bagback",
    info: "34L Puma backpack with 5 year of manufacturing warrenty",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h50/hcc/16036165320734/-473Wx593H-460571671-black-MODEL.jpg",
    availableQuantity: 5,
  },
  {
    name: "Armani Exchange",
    info: "13 Laptop BagPack with Embossed Logo",
    image:
      " https://assets.ajio.com/medias/sys_master/root/20231103/pAYM/654525d5afa4cf41f57382d6/-473Wx593H-410394390-00035-MODEL7.jpg",
    availableQuantity: 2,
  },
  {
    name: "The ClownFish",
    info: "Genuine Leather Laptop BackPack",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230629/2zkI/649ce1bdeebac147fc348eaa/-473Wx593H-465997434-black-MODEL.jpg",
    availableQuantity: 6,
  },
  {
    name: "The ClownFish",
    info: "17'' Laptop Backpack with Adjustable Shoulder Straps",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230629/DMc9/649caceba9b42d15c91669c4/-473Wx593H-465956870-grey-MODEL6.jpg",
    availableQuantity: 10,
  },
  {
    name: "GODS",
    info: "Graphic Printed Laptop BackPack",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230628/zCi3/649ba301a9b42d15c9055e6d/-473Wx593H-465691600-black-MODEL.jpg",
    availableQuantity: 5,
  },
  {
    name: "REDHORNS",
    info: "Men 16 Striped Anti-Theft Laptop Backpack",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231225/mTls/6589b749afa4cf41f5e9fe9f/-473Wx593H-466912682-silver-MODEL6.jpg",
    availableQuantity: 2,
  },
];

export default function App() {
  return (
    <div className="h-screen bg-zinc-700">
      <Header />
      <div className="p-6 md:p-10 md:m-6">
        <ProductList />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="grid place-content-center">
      <span className="m-6 text-4xl text-white font-bold ">
        👜 BagPack Station
      </span>
    </div>
  );
}

function ProductList({ list }) {
  return (
    <div>
      {list.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

function Product({ product }) {
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
