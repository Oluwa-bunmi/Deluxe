import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { formattedAmount } from "../utils/FormattedAmount";

const Favorites = () => {
  const favorites = useSelector((data) => data.favorites.favorites);
  return (
    <>
      <Navbar />
      <section className="pt-[150px] pb-[70px]">
        <div className="container">
          <h2 className="text-[32px] text-primary font-bold mb-12">Wishlist</h2>
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
                <p className="mt-[24px] leading-[28px] text-xl text-dark font-normal">
                  {favorite.productname}
                </p>
                <p className="mb-[16px] font-bold text-primary leading-[24px]">
                  {formattedAmount(favorite.price)}
                </p>
              </div>
              /* </div> */
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
