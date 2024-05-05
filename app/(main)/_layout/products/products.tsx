import React from "react";

interface Product {
  title: string;
  backgroundImage: string;
}

const Card: React.FC<Product> = ({ title, backgroundImage }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg shadow-md">
      <div
        className="h-40 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const productsData = [
    {
      title: "Home & Garden",
      backgroundImage: "https://t3.ftcdn.net/jpg/03/17/61/02/360_F_317610235_VOxsIfYiNChJNo2GelwXJWlCI0So7rXS.jpg",
    },
    {
      title: "Sports & Fitness",
      backgroundImage: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    },
    {
      title: "Pet Supplies",
      backgroundImage: "https://cdn.shopify.com/s/files/1/1600/7061/files/3_57d3ac14-ff6f-4daa-b771-66a069fe7498.jpg?v=1693304833",
    },
    // Add more product data as needed
  ];

  return (
    <div className="w-full min-h-[350px] max-w-screen-lg mx-auto px-4">
      <h1 className="py-4 text-xl font-bold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productsData.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            backgroundImage={product.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
