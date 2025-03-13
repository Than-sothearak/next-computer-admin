import { getCategories } from "@/actions/categories";
import ProductForm from "@/components/ProductForm";

export default async function addProductPage() {
  const fecthCategories = await getCategories()
  const getCategory =  JSON.parse(JSON.stringify(fecthCategories))
  const parentCategory = JSON.parse(JSON.stringify(fecthCategories.filter(category => !category.parentCategory)))

  return (
    <>
    <ProductForm categories={getCategory} parentCategory={parentCategory}/></>
  );
}
