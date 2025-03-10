import { BiCheck } from "react-icons/bi";
import ChooseImageFile from "./ChooseImageFile";

export default function ProductForm({ categories, productId }) {

  return (
    <div className=" mt-4 rounded-lg">
      {productId}
      <form className="space-y-2 text-sm">
        <div className="flex max-lg:flex-wrap gap-4">
          <div className="space-y-4 w-full p-4 bg-slate-800 rounded-lg">
            <h1 className="font-bold text-lg">Basic Infomation</h1>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Brand Name</label>
                <input
                  type="text"
                  placeholder="Enter brand name..."
                  className="w-full p-2 rounded-md mt-2 bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="mb-2 block font-medium">Category</label>
                  <select className=" w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none">
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium">Price</label>
                  <input
                    placeholder="202.09$"
                    type="number"
                    className="w-full p-2 rounded-md mt-2 bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium">Product Name</label>
                <input className="mt-2 w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none" />
              </div>

              <div>
                <label className="block font-medium">Stock</label>
                <input
                  type="number"
                  className="mt-2 w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                className="mt-2 w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                rows="4"
              ></textarea>
            </div>

            <ChooseImageFile />
          </div>
          <div className="max-xl:w-1/2 max-lg:w-full flex flex-col gap-4">
            <div className=" bg-slate-800 p-4 w-full flex  flex-col  gap-4 rounded-lg">
              <div className="space-y-4 w-full bg-slate-800 rounded-lg">
                <h1 className="text-lg font-bold">Visibility</h1>
              </div>
              <div className="flex gap-4">
                <div>
                  <input type="radio" id="published" name="status" /> {" "}
                  <label>Published</label>
                </div>
                <div>
                  <input type="radio" id="hidden" name="status" /> {" "}
                  <label>Hidden</label>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                The product will effect by choose the Visibility.
              </p>
            </div>

            <div className=" bg-slate-800 p-4 w-full flex  flex-col  gap-4 rounded-lg">
              <div className="space-y-4 w-full bg-slate-800 rounded-lg">
                <h1 className="text-lg font-bold">Parent Category</h1>
              </div>
              <select className=" w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none">
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500">
                Select a category that will be the parent of the current one.
              </p>
            </div>
            <div className=" bg-slate-800 p-4 w-full flex  flex-col  gap-4 rounded-lg">
              <div className="flex justify-start items-center gap-2 w-full bg-slate-800">
                <div><h1 className="text-lg font-bold">Product Image</h1></div>
              
               <BiCheck className="bg-slate-300 rounded-full text-black"/>
            
              </div>
              <div className="grid gap-2 grid-cols-2">
                <div className="rounded-md w-full min-h-48  bg-slate-500 col-span-2"><img className="rounded-md object-cover h-full w-full "src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0627132/1.jpg?7855"/></div>
                <div className="rounded-md w-full min-h-32 bg-slate-500"><img className="rounded-md object-cover h-full w-full "src="https://i.ebayimg.com/images/g/5vsAAeSwWMpnrr5e/s-l300.jpg"/></div>
                <div className="rounded-md w-full min-h-32 bg-slate-500"><img className="rounded-md object-cover h-full w-full "src="https://media.takealot.com/covers_images/d5eba0e0756b480181e0aa3f1e430c1a/s-pdpxl.file"/></div>
              </div>
              <p className="text-xs text-slate-500">
                Product images.
              </p>
            </div>
          </div>
        </div>

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
