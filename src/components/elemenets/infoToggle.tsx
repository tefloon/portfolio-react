import React from "react";

import { panelAtom } from "@/jotai/panelAtom";
import { useAtom } from "jotai";
import { BsFillInfoSquareFill } from "react-icons/bs";

export default function InfoToggle() {
  const [panelState, setPanelState] = useAtom(panelAtom);

  let buttonClass = `flex px-5 grow justify-items-center items-center`;

  return (
    <>
      <button
        onClick={() => setPanelState({ isOpen: !panelState.isOpen })}
        className={buttonClass}
      >
        <BsFillInfoSquareFill />
      </button>
    </>
  );
}
