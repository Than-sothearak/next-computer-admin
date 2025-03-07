import { getCategories } from "@/actions/categories";
import CategoryForm from "@/components/CategoryForm";

export default async function AddCategory() {
  const fecthCategories = await getCategories();
  const categories = JSON.parse(JSON.stringify(fecthCategories))
  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      <CategoryForm categories={categories} />
    </div>
  );
}