const We = (props) => {
  const { img1, img2, title1, title2, desk1, desk2 } = props;
  return (
    <div>
      <div className="grid grid-cols-1 mt-8 items-center sm:grid-cols-2 sm:mt-15  md:gap-10 md:mt-15 scroll-animation">
        {/* Kiri */}
        <div className="box" data-aos="fade-left">
          <img src={img1} />
        </div>
        <div className="box" data-aos="fade-left">
          <h1 className="font-bold md:text-xl">{title1}</h1>
          <p className="my-1 text-[12px] md:text-md lg:text-[15px] sm:my-1 md:my-2 text-slate-900 tracking-wide">
            {desk1}
          </p>
        </div>
        {/* Kanan */}
        <div
          className="box order-1 sm:order-0  md:order-0"
          data-aos="fade-right"
        >
          <h1 className="font-bold md:text-xl">{title2}</h1>
          <p className="my-1 text-[12px] md:text-md lg:text-[15px] sm:my-1 md:my-2 text-slate-900">
            {desk2}
          </p>
        </div>
        <div className="box" data-aos="fade-right">
          <img src={img2} />
        </div>
      </div>
    </div>
  );
};

export default We;
