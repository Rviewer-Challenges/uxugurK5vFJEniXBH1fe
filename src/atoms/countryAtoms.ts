import { atom } from "recoil";
import { GdpCountry, gdpCountries } from "../data/countriesGdp";

function equal<T extends V, V>(target: T) {
    return (value: V) => value === target;
}

export const selectedCountry1atom = atom<GdpCountry>({
    key: "selectedCountry1",
    default: gdpCountries.find(equal("Russia"))
})

export const selectedCountry2atom = atom<GdpCountry>({
    key: "selectedCountry2",
    default: gdpCountries.find(equal("Turkey"))
})