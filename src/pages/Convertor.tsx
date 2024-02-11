import { Box, Button, Flex } from "@mantine/core";
import { useRecoilState } from "recoil";
import { selectedCountry1atom, selectedCountry2atom } from "../atoms/countryAtoms";
import CountrySelector from "../components/CountrySelector";
import { gdpList } from "../data/countriesGdp";

export default function Convertor() {

    const [country1, setCountry1] = useRecoilState(selectedCountry1atom);
    const [country2, setCountry2] = useRecoilState(selectedCountry2atom);

    const gdp1 = gdpList[country1];
    const gdp2 = gdpList[country2];
    const divisionConstant = 5;

    function swap() {
        setCountry1(country2);
        setCountry2(country1);
    }

    return (
        <Flex direction="column" gap="md">
            <Flex direction="row" gap="0" style={{ justifyContent: "space-evenly", alignItems: "end" }}>
                <Flex direction="column">
                    <span className="lg-text">1</span>
                    <CountrySelector countryAtom={selectedCountry1atom} />
                </Flex>

                <Flex direction="column">
                    <Button children="Swap" onClick={swap} />
                </Flex>

                <Flex direction="column">
                    <span className="lg-text" children={gdp1 / gdp2} />
                    <CountrySelector countryAtom={selectedCountry2atom} />
                </Flex>
            </Flex>
            <Flex direction="row" gap="0">
                <Box w="50%" px={2}>{"💶".repeat(Math.floor(gdp1 / divisionConstant))}</Box>
                <Box w="50%" px={2}>{"💶".repeat(Math.floor(gdp2 / divisionConstant))}</Box>
            </Flex>
        </Flex>
    )
}