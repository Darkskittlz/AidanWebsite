// app/page.tsx
import { cn } from "@/cosmic/utils";
import { buttonVariants } from "@/cosmic/elements/Button";
import { Section } from "./PageSection";
import { cosmic } from "@/cosmic/client";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function Page({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  try {
    const { object: page } = await cosmic.objects
      .findOne(query)
      .props("slug,title,metadata")
      .depth(1)
      .status(status ? status : "published");

    return (
      <div>
      </div>
    );
  } catch (e: any) {
    if (e.status === 404) return notFound();
  }
}
