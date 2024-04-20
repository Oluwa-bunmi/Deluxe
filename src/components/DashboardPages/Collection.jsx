import Header from "../Header";
import demo from "../../assets/newdemo.png";
import { Link } from "react-router-dom";
import UseProducts from "../../hooks/UseProducts";
const Collection = () => {
  const { products, addToCart } = UseProducts();

  return (
    <div>
      <Header />
      {/* <section className="container">
        <h2 className="font-bold text-primary text-xl leading-[28px] mb-[32px]">
          Newly added
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[42px] items-center">
          <div className="flex flex-col justify-between">
            <Link to="/product">
              <img
                src={demo}
                // alt={item.productname}
              />
            </Link>
            <div>
              <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                Luxury White Earring
              </p>
              <p className="mb-[16px] font-bold text-primary leading-[24px]">
                ₦3000
              </p>
              <button
                onClick={() => {
                  // handleAddToCart(product);
                  //   toast.success(`${item.productname} added to cart`);
                  toast.success(`Luxury White Earring added to cart`);
                }}
                className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Link to="/product">
              <img
                src={demo}
                // alt={item.productname}
              />
            </Link>
            <div>
              <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                Luxury White Earring
              </p>
              <p className="mb-[16px] font-bold text-primary leading-[24px]">
                ₦3000
              </p>
              <button
                onClick={() => {
                  // handleAddToCart(product);
                  //   toast.success(`${item.productname} added to cart`);
                  toast.success(`Luxury White Earring added to cart`);
                }}
                className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Link to="/product">
              <img
                src={demo}
                // alt={item.productname}
              />
            </Link>
            <div>
              <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                Luxury White Earring
              </p>
              <p className="mb-[16px] font-bold text-primary leading-[24px]">
                ₦3000
              </p>
              <button
                onClick={() => {
                  // handleAddToCart(product);
                  //   toast.success(`${item.productname} added to cart`);
                  toast.success(`Luxury White Earring added to cart`);
                }}
                className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Link to="/product">
              <img
                src={demo}
                // alt={item.productname}
              />
            </Link>
            <div>
              <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                Luxury White Earring
              </p>
              <p className="mb-[16px] font-bold text-primary leading-[24px]">
                ₦3000
              </p>
              <button
                onClick={() => {
                  // handleAddToCart(product);
                  //   toast.success(`${item.productname} added to cart`);
                  toast.success(`Luxury White Earring added to cart`);
                }}
                className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container">
        <h2 className="font-bold text-primary text-xl leading-[28px] mt-[76px] mb-[32px]">
          Best Sellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[42px] items-center">
          {products.map((item, i) => (
            <div key={i} className="flex flex-col justify-between">
              <Link to={`/product?id=${item._id}`}>
                <img
                  src={`data:image/png;base64,${item.Photo}`}
                  alt={item.productname}
                />
              </Link>
              <div>
                <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                  {item.productname}
                </p>
                <p className="mb-[16px] font-bold text-primary leading-[24px]">
                  ₦{item.price}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collection;
