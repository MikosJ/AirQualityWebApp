import { Button, ButtonContainer, SideBarContainer, SideBarTitle, TitleContainer } from "./SideBarStyled.ts";
import React from "react";

interface SideBarProps {
    openModal: () => void;
    openAvgModal: () => void;
}
export const SideBar: React.FC<SideBarProps> = ({ openModal, openAvgModal }) => {
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
                <Button onClick={openAvgModal}>Średnie dla województw</Button>
            </ButtonContainer>
        </SideBarContainer>
    );
};