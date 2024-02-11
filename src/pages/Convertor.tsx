import { Box, Button, Flex } from "@mantine/core";
import { useRecoilState } from "recoil";
import { selectedCountry1atom, selectedCountry2atom } from "../atoms/countryAtoms";
import CountrySelector from "../components/CountrySelector";
import { gdpService } from "../service/gdpService";

export default function Convertor() {

    const [country1, setCountry1] = useRecoilState(selectedCountry1atom);
    const [country2, setCountry2] = useRecoilState(selectedCountry2atom);

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
                    <span className="lg-text" children={gdpService.convert(country1, country2)} />
                    <CountrySelector countryAtom={selectedCountry2atom} />
                </Flex>
            </Flex>
            <Flex direction="row" gap="0">
                <Box w="50%" px={2}>{gdpService.visualize(country1)}</Box>
                <Box w="50%" px={2}>{gdpService.visualize(country2)}</Box>
            </Flex>
        </Flex>
    )
}