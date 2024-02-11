import { fireEvent, render } from "@testing-library/react";
import { expect, it } from "vitest";
import Convertor from "../../src/pages/Convertor";
import { Wrapper } from "../util";

it("Convertor page test", () => {
    const { container } = render(<Wrapper><Convertor /></Wrapper>)
    const [input1, input2] = container.querySelectorAll("input.mantine-Select-input") as NodeListOf<HTMLInputElement>;


    expect(input1.value).to.be.eq("Russia");
    expect(input2.value).to.be.eq("Turkey");

    const swapButton = container.querySelector("button")!;

    fireEvent.click(swapButton);

    expect(input1.value).to.be.eq("Turkey");
    expect(input2.value).to.be.eq("Russia");
});