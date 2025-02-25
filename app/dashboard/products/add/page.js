import ChooseImageFile from "@/components/ChooseImageFile";

export default function addProductPage() {
  const categories = [
    "Laptops",
    "Desktops",
    "Monitors",
    "Keyboards",
    "Mice",
    "Headsets",
    "Graphics Cards",
    "Processors",
    "Motherboards",
    "RAM",
    "Storage Devices",
    "Power Supplies",
    "Cooling Systems",
    "Computer Cases",
    "Networking Equipment",
    "Software",
  ];
  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      <form className="space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Title</label>
            <input
      type="text"
      className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
    />
          </div>

          <div>
            <label className="block font-medium">Price</label>
            <input className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" />
          </div>

          <div>
            <label className="block font-medium">Color</label>
            <input type="text" className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <select className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none">
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Stock</label>
            <input type="number" className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" />
          </div>

          <div>
            <label className="block font-medium">Size</label>
            <input type="text" className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" />
          </div>
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" rows="4"></textarea>
        </div>
     
     <ChooseImageFile />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
