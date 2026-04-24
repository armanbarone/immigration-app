import { notFound } from "next/navigation";
import { getClient } from "@/data/clients";
import { getAllSlugs } from "@/data/clients";
import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `${client.firmName} | Immigration Attorney | ${client.city}, ${client.state}`,
    description: client.metaDescription,
  };
}

export default async function SlugLayout({ params, children }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  return <ClientLayout client={client}>{children}</ClientLayout>;
}
