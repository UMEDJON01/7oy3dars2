import { useLoaderData, Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Products List
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="block"
            >
              <li className="card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden bg-white">
                <div className="card-body p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-lg font-bold text-green-600">
                      ${product.price}
                    </span>
                  </div>
                  <div className="mt-2">
                    <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      View Details
                    </button>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsList;
