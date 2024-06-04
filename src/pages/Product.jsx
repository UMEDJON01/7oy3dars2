import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { customFetch } from "../utils/index";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Product() {
  const { product } = useLoaderData();
  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type === "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type === "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const AddToBag = () => {
    const newProduct = {
      amount: productAmount,
    };
    console.log(newProduct);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {product.title}
        </h1>
        <div className="carousel carousel-center max-w-4xl mx-auto p-4 space-x-4 bg-gray-100 rounded-lg shadow-md">
          {product.images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-lg h-96 object-cover"
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setAmount("decrease")}
            className={`btn btn-secondary bg-red-500 text-white px-4 py-2 rounded-lg ${
              productAmount === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={productAmount === 1}
          >
            -
          </button>
          <h3 className="text-2xl font-semibold">{productAmount}</h3>
          <button
            onClick={() => setAmount("increase")}
            className="btn btn-secondary bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            +
          </button>
        </div>
        <hr className="my-6 w-full border-gray-300" />
        <button
          className="btn btn-primary bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
          onClick={AddToBag}
        >
          Add To Bag
        </button>
      </div>
    </>
  );
}

export default Product;
