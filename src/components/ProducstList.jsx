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
              <li className="card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <div className="card-body p-4 bg-white">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h2>
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
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
