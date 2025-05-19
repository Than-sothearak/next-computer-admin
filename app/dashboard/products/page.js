import { getProduct } from "@/actions/prodoucts";
import { auth } from "@/auth";
import Pagination from "@/components/Pagination";
import SearchComponent from "@/components/SearchComponent";
import TableComponent from "@/components/TableComponent";
import Link from "next/link";

const productPage = async ({ searchParams }) => {
  const session = await auth();
  const { query } = await searchParams;

  const pathname = "products"
  const { page } = (await searchParams) || 1;
  const { products, count, ITEM_PER_PAGE } = await getProduct(query, page);
  const countPage = Math.ceil(parseFloat(count / ITEM_PER_PAGE)) || 1;
 
  const productColumns = [
    
    { header: "Name", accessor: "productName" },
    { header: "Price", accessor: "price" },
    { header: "Category", accessor: "category" },
    { header: "Stock", accessor: "stock" },
    { header: "Created At", accessor: "createdAt" },
  ];

  return (
    <div className="p-4 bg-primary mt-4 rounded-lg">
      <div className="flex justify-between items-center gap-4">
        <div>
          <SearchComponent
            placeHolder="Search for product..."
            linkPage="/dashboard/products"
          />
        </div>
        <Link
          href="/dashboard/products/add"
          className="bg-blue-500 text-secondarytext px-2 py-1 text-center rounded-md hover:bg-blue-900 text-sm"
        >
          Add new
        </Link>
      </div>
      <TableComponent
        productCount={count}
        session={session}
        data={JSON.parse(JSON.stringify(products))}
        pageName="products"
        columns={productColumns}
        currentPage={page || 1}
        itemPerPage={ITEM_PER_PAGE}
      />
      {/* Pagination Buttons */}
      <Pagination 
      totalPages={countPage} 
      pathname={pathname}
      currentPage={page} query={query} />
    </div>
  );
};

export default productPage;
