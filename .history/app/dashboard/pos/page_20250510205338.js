import { getProduct } from "@/actions/prodoucts";
import { auth } from "@/auth";
import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

const posPage = async () => {
  const session = await auth();

  const {products} = JSON.parse(JSON.stringify(await getProduct()));

  return (
    <div className="p-4 bg-primary mt-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-primarytext">Point of Sale</h1>
        <SearchComponent
          placeHolder="Search product..."
          linkPage="/dashboard/pos"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-11 h-11">
              <Image
              fill={true}
                src={product.imageUrls[0]}
                alt={product.productName}
                className="w-24 h-24 object-cover mb-2"
              />
              </div>
              <h2 className="text-sm font-semibold truncate w-full max-w-[200px]">
                {product.productName}
              </h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
            </div>

            <button className="mt-3 bg-blue-600 text-white text-xs py-1 px-2 rounded hover:bg-blue-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default posPage;
