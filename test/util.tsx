import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const Wrapper = (props: PropsWithChildren) => <RecoilRoot><MantineProvider>{props.children}</MantineProvider></RecoilRoot>