import { createFileRoute } from "@tanstack/react-router";
import { BindPage } from "@/components/canon/bind-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BindPage />;
}
