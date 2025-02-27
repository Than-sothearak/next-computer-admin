import ProductForm from "@/components/ProductForm";

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
    <>
    <ProductForm categories={categories}/></>
  );
}
