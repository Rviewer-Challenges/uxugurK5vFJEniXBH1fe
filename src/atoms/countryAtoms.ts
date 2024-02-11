import { atom } from "recoil";
import { GdpCountry, gdpList } from "../data/countriesGdp";

export const selectedCountry1atom = atom<GdpCountry>({
    key: "selectedCountry1",
    default: Object.keys(gdpList).at(0)
})

export const selectedCountry2atom = atom<GdpCountry>({
    key: "selectedCountry2",
    default: Object.keys(gdpList).at(1)
})