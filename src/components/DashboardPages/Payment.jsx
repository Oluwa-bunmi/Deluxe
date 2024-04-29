import Dummy from "../Dummy";
const Payment = () => {
  return (
    <>
      <div className="container h-screen overflow-y-scroll">
        <p className="text-primary text-xl font-bold leading-[28px] mb-[40px] gap-[24px]">
          Paid Orders
        </p>
        <Dummy btnText="View Status" />
      </div>
    </>
  );
};

export default Payment;
