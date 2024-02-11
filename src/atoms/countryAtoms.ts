import { atom } from "recoil";
import { GdpCountry } from "../data/countriesGdp";

export const selectedCountry1atom = atom<GdpCountry>({
    key: "selectedCountry1",
    default: "Russia"
})

export const selectedCountry2atom = atom<GdpCountry>({
    key: "selectedCountry2",
    default: "Turkey"
})