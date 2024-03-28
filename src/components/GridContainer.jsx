const GridContainer = ({
  src,
  heading,
  subtitle,
  orderOne,
  orderTwo,
  space,
}) => {
  return (
    <section className={`pb-[86px] ${space}`}>
      <div className="container grid lg:grid-cols-2 gap-[100px] items-center">
        <img
          src={src}
          alt="a girl's neck adorned with accessories."
          className={`${orderOne}`}
        />
        <div className={`${orderTwo}`}>
          <h2 className="accia leading-[43px] font-semibold text-primary text-[32px]">
            {heading}
          </h2>
          <p
            className="leading-[28px] text-xl text-darkTwo"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>
    </section>
  );
};

export default GridContainer;
