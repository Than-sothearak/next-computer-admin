import { getCategories } from "@/actions/categories";
import ProductForm from "@/components/ProductForm";

export default async function addProductPage() {
  const fecthCategories = await getCategories()
  const getCategory =  JSON.parse(JSON.stringify(fecthCategories))
  const parentCategory = fecthCategories.filter(category => !category.parentCategory).map(item => item.category)

  return (
    <>
    <ProductForm categories={getCategory} parentCategory={parentCategory}/></>
  );
}
