import type { MetaFunction } from "@remix-run/node";
import Features from "~/components/Features";

export const meta: MetaFunction = () => {
  return [
    { title: "Features - Sorad Dynamics" },
    { name: "description", content: "Discover all the powerful features designed to transform your school management experience." },
  ];
};

export default function FeaturesRoute() {
  return <Features />;
}