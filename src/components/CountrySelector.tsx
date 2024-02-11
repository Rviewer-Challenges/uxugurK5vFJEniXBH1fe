import { Select } from "@mantine/core"
import { GdpCountry, gdpList } from "../data/countriesGdp";
import { RecoilState, useRecoilState } from "recoil";

export type CountrySelectorProps = {
    countryAtom: RecoilState<GdpCountry>
}

export default function CountrySelector(props: CountrySelectorProps) {
    const [country, setCountry] = useRecoilState(props.countryAtom);

    return (
        <Select
            maw="20rem"
            searchable
            data={Object.keys(gdpList)}
            value={country}
            onChange={e => setCountry(e as GdpCountry)} />
    )
}