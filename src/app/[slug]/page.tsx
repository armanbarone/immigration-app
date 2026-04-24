import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import HomePageClient from "@/components/sections/HomePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ClientHomePage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  return <HomePageClient client={client} />;
}
