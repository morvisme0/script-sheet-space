import { createFileRoute } from "@tanstack/react-router";
import { PdfApp } from "@/components/pdf-app";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Slate PDF — Mobile Document Workspace" },
    { name: "description", content: "Read, edit, organize, convert, scan, and compress PDFs in one polished mobile workspace." },
    { property: "og:title", content: "Slate PDF — Mobile Document Workspace" },
    { property: "og:description", content: "A fast, focused workspace for every PDF task." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <PdfApp />;
}
