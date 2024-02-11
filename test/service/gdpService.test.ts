import { expect, it } from "vitest";
import { GdpCountry } from "../../src/data/countriesGdp";
import { gdpService } from "../../src/service/gdpService";

it("Test visualize Gdp", () => {
    const country: GdpCountry = "Turkey";
    gdpService.visualDivisionConstant = 5;
    expect(gdpService.visualize(country)).to.contain("💵".repeat(190));
    gdpService.visualDivisionConstant = 10;
    expect(gdpService.visualize(country)).to.contain("💵".repeat(95));
});

it("Test GDP equality convertor", () => {
    const country1: GdpCountry = "United States of America";
    const country2: GdpCountry = "China";
    expect(gdpService.convert(country1, country2)).to.be.eq("1.282");
});