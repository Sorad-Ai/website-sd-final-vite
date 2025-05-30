import type { MetaFunction } from "@remix-run/node";
import Product from "~/components/Product";

export const meta: MetaFunction = () => {
  return [
    { title: "Product - Sorad Dynamics" },
    { name: "description", content: "Complete school management solution designed specifically for Nepali schools." },
  ];
};

export default function ProductRoute() {
  return <Product />;
}