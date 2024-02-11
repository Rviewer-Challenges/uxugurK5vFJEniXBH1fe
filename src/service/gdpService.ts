import { GdpCountry, gdpList } from "../data/countriesGdp";

export const gdpService = {
    visualDivisionConstant: 5,

    visualize(country: GdpCountry) {
        return "💵".repeat(Math.floor(gdpList[country] / this.visualDivisionConstant));
    },

    convert(country1: GdpCountry, country2: GdpCountry) {
        const gdp1 = gdpList[country1];
        const gdp2 = gdpList[country2];
        return (gdp1 / gdp2).toFixed(3);
    }
}