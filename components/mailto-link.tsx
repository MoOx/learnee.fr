"use client";

import Link from "next/link";
import { mail, sendStringAsMailString } from "@/lib/utils";

interface MailtoLinkProps {
  subject?: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}

export function MailtoLink({
  subject,
  className,
  children,
  "aria-label": ariaLabel,
}: MailtoLinkProps) {
  const email = sendStringAsMailString(mail);
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
