import success from "../assets/success.png";
const Modal = ({msg}) => {
  return (
    <div className="fixed bg-white w-full h-screen flex items-center justify-center z-[999] ">
      <div className="p-8 ">
        <h1 className="text-[48px] text-primary accia text-center">Success!</h1>
        <img
          src={success}
          alt="success image."
          className="mt-[56px] mb-[32px] block mx-auto"
        />
        <p className="text-xl text-primary font-medium leading-[28px]">
          {msg}
        </p>
      </div>
    </div>
  );
};

export default Modal;
