import useProducts from "../hooks/useProducts";
import { formattedAmount } from "../utils/FormattedAmount";

const Dummy = ({ btnText }) => {
  const { products } = useProducts();
  return (
    <div className="grid gap-[32px]">
      {products.map((item, i) => (
        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-[24px]">
          <img
            src={`data:image/png;base64,${item.Photo}`}
            alt={item.productname}
            className="w-[276px] h-[239px]"
          />
          <div>
            <p className="text-black font-normal text-xl">{item.productname}</p>
            <p className="text-primary text-xl font-bold">
              {formattedAmount(item.price)}
            </p>
            <button className="w-[152px] h-[48px] mt-[40px] rounded-lg text-base bg-primary text-white font-medium">
              {btnText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default Dummy;