import { fireEvent, render, screen } from "@testing-library/react";
import { atom } from "recoil";
import { expect, it, vi } from "vitest";
import CountrySelector from "../../src/components/CountrySelector";
import { GdpCountry } from "../../src/data/countriesGdp";
import { Wrapper } from "../util";

HTMLElement.prototype.scrollIntoView = vi.fn();

it("Country selector test", async () => {
    const countryAtom = atom<GdpCountry>({
        key: "countryAtom",
        default: "Albania"
    });

    const { container } = render(<Wrapper><CountrySelector countryAtom={countryAtom} /></Wrapper>)

    const input = container.querySelector("input")!;
    
    expect(input.value).to.be.eq("Albania");

    fireEvent.click(input);

    const option = await screen.findByText("Paraguay");

    fireEvent.click(option);

    expect(input.value).to.be.eq("Paraguay");

});