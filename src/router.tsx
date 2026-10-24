import type { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
];
