import { it, expect } from "vitest";
import { render } from "@testing-library/react"
import { App } from "../src/app";
import { Wrapper } from "./util";

it("Render app", () => {

    const { container } = render(
        <Wrapper>
            <App />
        </Wrapper>
    );

    expect(container.innerHTML).contain("h1");
    expect(container.innerHTML).contain("under-dotted");
    expect(container.innerHTML).contain("GDP");
    expect(container.innerHTML).contain("h6");
    expect(container.innerHTML).contain("is equal to");
});