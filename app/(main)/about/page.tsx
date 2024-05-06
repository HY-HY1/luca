import React from "react";

const About = () => {
  return (
    <div className="w-full h-[100vh]">
      <div
        className="relative h-[200px] w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(&apos;https://t4.ftcdn.net/jpg/01/81/65/85/360_F_181658575_6gz3Gx96iRndmBtXv2llVsGOGsfdT1AP.jpg&apos;)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center">
          <h1 className="text-black bg-slate-100 text-4xl max-w-[90vw] m-auto">
            About RYZENS
          </h1>
        </div>
      </div>
      <div className="w-[60vw] m-auto">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">RYZENS Wholesale</h1>
          <p>
            At RYZENS Wholesale, we strive to source great products for you at
            the best prices we can. We curate a vast range of products from both
            UK and internationally authorized distributors of various brands.
            Additionally, we import our own products, enhancing our catalog&apos;s
            diversity.
          </p>
          <br />
          <p>
            RYZENS Wholesale distinguishes itself in the wholesale marketplace
            by fostering valuable relationships and supporting customers in
            their trade growth. We offer competitive pricing and assist in
            developing their SKU&apos;s, ensuring their success in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
