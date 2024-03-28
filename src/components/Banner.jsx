import { Link } from "react-router-dom";
const Banner = ({ title, description, backgroundImage, link, path, display }) => {
  return (
    <section className={`bg-cover ${backgroundImage} h-[600px]`}>
      <div className="container text-center flex flex-col justify-center items-center h-full">
        <h1 className="accia text-[48px] font-semibold text-primary leading-[65.28px]">
          {title}
        </h1>
        <p
          className="accia text-[24px] leading-[32px] text-darkTwo"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Link
          to={path}
          className={`text-xl mt-[64px] bg-primary rounded-[12px] text-white font-medium px-[38px] py-2 ${display}`}
        //   className=""
        >
          {link}
        </Link>
      </div>
    </section>
  );
};

export default Banner;
