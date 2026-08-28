import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide uppercase",
  {
    variants: {
      tone: {
        mute: "bg-subtle text-muted",
        keep: "bg-keep-soft text-keep",
        archive: "bg-warn-soft text-warn",
        boundary: "bg-danger-soft text-danger",
        spec: "bg-subtle text-fg",
        bound: "bg-keep-soft text-keep",
        open: "bg-subtle text-muted",
        live: "bg-subtle text-fg",
        plan: "bg-subtle text-muted",
      },
    },
    defaultVariants: { tone: "mute" },
  },
);

function Badge({
  className,
  tone,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}

export { Badge };
