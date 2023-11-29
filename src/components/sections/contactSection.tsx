import React from "react";

import SectionHeader from "../elemenets/layout/sectionHeader";
import { categories } from "@/data/navData";
import { BsFillSendFill } from "react-icons/bs";
import { handleSendEmail } from "@/actions/formActions";

export default function ContactSection() {
  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    const res = await handleSendEmail(formData);
    if (res.status !== 200) {
      console.log(`Unsuccessful: ${res.message}`);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col px-2 sm:px-12 items-center w-full pb-8 scroll-mt-32"
    >
      <SectionHeader {...categories[4]} />
      <p className="pt-2 pb-5 text-center">
        Please contact me directly at{" "}
        <a href="mailto:antoni.gawlikowski@gmail.com" className="underline">
          antoni.gawlikowski@gmail.com
        </a>{" "}
        or through the below form.
      </p>

      <form
        action={handleFormSubmit}
        className="flex flex-col items-center sm:max-w-[95%] w-full"
      >
        <input
          name="senderEmail"
          type="email"
          required
          placeholder="Your email"
          className="max-w-[25rem] w-full mb-4 rounded-lg p-2 bg-neutral-300 text-neutral-900 dark:text-stone-100 dark:bg-neutral-700 border border-black/10"
        />
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your message"
          className="max-w-[25rem] w-full mb-2 rounded-lg p-2 bg-neutral-300 text-neutral-900 dark:text-stone-100 dark:bg-neutral-700 border border-black/10"
        ></textarea>
        <button type="submit">
          <span className="flex flex-row font-semibold text-stone-300 items-center gap-2 px-4 py-2 rounded-xl dark:bg-neutral-900 bg-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-blue-900 group group-focus:outline group-focus:outline-offset-2 dark:group-focus:outline-offset-4 group-focus:outline-4 outline-fuchsia-600">
            <BsFillSendFill className="hidden sm:block group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-400 " />
            Submit
          </span>
        </button>
      </form>
    </section>
  );
}
