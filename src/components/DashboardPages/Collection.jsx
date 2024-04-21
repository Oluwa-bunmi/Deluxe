import Header from "../Header";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { formattedAmount } from "../../utils/FormattedAmount";
const Collection = () => {
  const { products, addToCart } = useProducts();

  return (
    <div>
      <Header />
      <section className="container">
        <h2 className="font-bold text-primary text-xl leading-[28px] mt-[76px] mb-[32px]">
          Best Sellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[42px] items-start">
          {products.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between w-full h-full"
            >
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
                  {formattedAmount(item.price)}
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
