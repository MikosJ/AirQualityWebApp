import { Button, ButtonContainer, SideBarContainer, SideBarTitle, TitleContainer } from "./SideBarStyled.ts";
import React from "react";

interface SideBarProps {
    openModal: () => void;
}
export const SideBar: React.FC<SideBarProps> = ({ openModal }) => {
    return (
        <SideBarContainer>
            <TitleContainer>
                <img src={"src/icon.svg"} alt={"LOGO"} height={"80px"} />
                <SideBarTitle>
                    AirGI
                </SideBarTitle>
            </TitleContainer>
            <ButtonContainer>
                <Button onClick={openModal}>Wykres</Button>
                <Button onClick={() => console.log("działa")}>Średnie dla województw</Button>
            </ButtonContainer>
        </SideBarContainer>
    );
};