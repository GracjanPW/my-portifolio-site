import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import StackOverflow from "@/components/icons/StackOverflow";
import React from "react";

export default function index() {
  return (
    <div className="container-fluid m-auto py-10 flex flex-row justify-between">
      <div>
        <a href="https://www.linkedin.com/in/gracjan-wojciechowski-798647185/">
          <LinkedIn />
          LinkedIn
        </a>
        <a href="https://github.com/GracjanPW">
          <Github />
          Github
        </a>
        <a href="https://stackoverflow.com/users/15390573/gracjanw">
          <StackOverflow />
          Stackoverflow
        </a>
      </div>

      <form
        className="max-w-md p-5 shadow-md rounded-md"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="apikey"
          value="686b54b5-bced-423b-a530-408c91c21295"
        />
        <input
          type="checkbox"
          name="botcheck"
          id=""
          style={{ display: "none" }}
        ></input>
        <h1 className="text-xl font-semibold">Contact Me:</h1>
        <input
          className="w-full my-4 p-3"
          name="from_name"
          type="text"
          placeholder="Name"
          required
        />

        <input
          className="w-full my-4 p-3"
          name="replyto"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="w-full my-4 p-3"
          name="subject"
          type="text"
          placeholder="Subject"
          required
        />
        <br />
        <textarea
          className="w-full min-h-[200px] my-4 p-3"
          name="content"
          placeholder="message..."
          required
        />
        <br />
        <button
          className="rounded-md w-full p-3 border-black border"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
