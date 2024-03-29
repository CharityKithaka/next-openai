import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Chat from "@/components/Chat";
import "openai/shims/node";
import OpenAI from "openai";

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: '123' }),
}))

jest.mock("@tanstack/react-query", () => ({
  useMutation: jest.fn().mockReturnValue({ mutate: jest.fn(), isPending: false, data: {}  }),
}));

describe("Chat Component", () => {
  it("should submit a message and show a success toast", async () => {
    const { getByPlaceholderText, getByText } = render(<Chat />);

    const input = getByPlaceholderText("Message ChatGPT");
    fireEvent.change(input, { target: { value: "Hello" } });

    const button = getByText("ask question");
    fireEvent.click(button);

    await waitFor(() => expect(getByText("Hello")).toBeInTheDocument());
  });
});
