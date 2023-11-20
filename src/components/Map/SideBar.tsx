import {Button, ButtonContainer, SideBarContainer, SideBarTitle, TitleContainer} from "./SideBarStyled.ts";

export const SideBar = () => {

    return (
        <SideBarContainer>
            <TitleContainer>
                <SideBarTitle>
                    AirGI
                </SideBarTitle>
            </TitleContainer>
            <ButtonContainer>
                <Button onClick={()=>console.log("działa")}>Wykres</Button>
                <Button onClick={()=>console.log("działa")}>Średnie dla województw</Button>
            </ButtonContainer>
        </SideBarContainer>
    )
}