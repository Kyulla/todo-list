import { ChoiceButtons, ThemeSelection } from "./styled-components";

export default function ThemeButton({handleDarkTheme, darktheme}: {handleDarkTheme: () => void; darktheme: boolean;}){
    return (
        <>
            <ChoiceButtons onClick={() => handleDarkTheme()}>
                <ThemeSelection darktheme={darktheme} />
            </ChoiceButtons>
        </>
    )
}