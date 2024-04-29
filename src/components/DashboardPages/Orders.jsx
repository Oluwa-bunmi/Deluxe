import Dummy from "../Dummy";
import Header from "../Header";

const Orders = () => {
  return (
    <>
      <div className="container">
        <p className="text-primary text-xl font-bold leading-[28px] mb-[40px] gap-[24px]">
          My Orders
        </p>
        <Dummy btnText="Make Payment" />
      </div>
    </>
  );
};

export default Orders;
