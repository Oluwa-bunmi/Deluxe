import Header from "../Header";
import { Link } from "react-router-dom";
// import useProducts from "../../hooks/useProducts";
import useProducts from "../../hooks/useProducts";
import { formattedAmount } from "../../utils/FormattedAmount";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/reducers/favorite.reducer";
const Collection = () => {
  const { products, addToCart } = useProducts();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleFavoriteClick = (product) => {
    const isFavorite = favorites.some((item) => item._id === product._id);
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  return (
    <div>
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
              {/* <Link to={`/product?id=${item._id}`}> */}
              <div className="relative">
                <div className=" h-[160px]">
                  <img
                    src={`data:image/png;base64,${item.Photo}`}
                    alt={item.productname}
                    className="h-full w-full"
                  />
                </div>
                {favorites.some((favItem) => favItem._id === item._id) ? (
                  <IoMdHeart
                    onClick={() => handleFavoriteClick(item)}
                    className="absolute top-[10px] right-[10px] text-[25px] text-primary cursor-pointer"
                  />
                ) : (
                  <IoMdHeartEmpty
                    onClick={() => handleFavoriteClick(item)}
                    className="absolute top-[10px] right-[10px] text-[25px] text-primary cursor-pointer"
                  />
                )}
              </div>
              <div>
                <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                  {item.productname}
                </p>
                <p className="mb-[16px] font-bold text-primary leading-[24px]">
                  {formattedAmount(item.price)}
                </p>
                {cart.some((favItem) => favItem._id === item._id) ? (
                  <p>Added to cart</p>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collection;
