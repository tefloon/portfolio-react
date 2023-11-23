import React from "react";

export default function SectionHeader({ header }: { header: string }) {
  return <h3 className="pb-8 text-center text-4xl">{header}</h3>;
}
