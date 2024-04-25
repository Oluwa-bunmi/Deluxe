import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { formattedAmount } from "../utils/FormattedAmount";
import { selectFavoritesCount } from "../store/reducers/favorite.reducer";

const Favorites = () => {
  const favorites = useSelector((data) => data.favorites.favorites);
  const favoritesCount = useSelector(selectFavoritesCount);
  return (
    <>
      <Navbar />
      <section className="pt-[150px] pb-[70px]">
        <div className="container">
          <h2 className="text-[32px] text-primary font-bold mb-12">
            Wishlist({favoritesCount})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[42px] items-start">
            {favorites.map((favorite, index) => (
              // <div className="">
              <div
                key={index}
                className="flex flex-col justify-between w-full h-full"
              >
                <img
                  src={`data:image/png;base64,${favorite.Photo}`}
                  alt={favorite.productname}
                />
                <div>
                  <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                    {favorite.productname}
                  </p>
                  <p className="mb-[16px] font-bold text-primary leading-[24px]">
                    {formattedAmount(favorite.price)}
                  </p>
                  <button
                    // onClick={() => addToCart(item)}
                    className="w-full bg-primary py-2 rounded-lg text-white font-medium text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
