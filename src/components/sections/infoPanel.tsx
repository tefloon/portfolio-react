"use client";

import { panelAtom } from "@/jotai/panelAtom";
import { useAtom } from "jotai";
import React from "react";

export default function InfoPanel() {
  const [panelState, _] = useAtom(panelAtom);

  return (
    <>
      <aside
        className={`fixed xl:static z-50 transition-all ${
          panelState?.isOpen
            ? "w-[30rem] bg-opacity-90 text-opacity-100"
            : "w-0 bg-opacity-0 text-opacity-0"
        }`}
      >
        <div
          className={`fixed w-[20rem] h-full bg-neutral-500 ${
            panelState.isOpen ? "" : "hidden"
          }`}
        >
          <h3 className={`text-center text-2xl`}>Siema</h3>
          <p>{panelState.isOpen.toString()}</p>
        </div>
      </aside>
    </>
  );
}
