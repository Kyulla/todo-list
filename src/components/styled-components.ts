import styled, { createGlobalStyle } from "styled-components";

interface GlobalStyleProps{
    handleDarkTheme: boolean;
}

interface ThemeSelectionProps{
    darktheme: boolean;
}

interface CheckedProps{
    state: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    body {
        background-color: ${props => props.handleDarkTheme? "#1b1c1c" : ""};
        color: ${props => props.handleDarkTheme? "whitesmoke" : ""};
    }
`; 

export const ChoiceButtons = styled.button`
    margin-right: 5px;
`;

export const ThemeSelection = styled.img<ThemeSelectionProps>`
    height: 25px;
    width: 25px;
    content: url(${props => props.darktheme? "https://png.pngtree.com/png-clipart/20220911/original/pngtree-shining-bright-light-bulb-png-image_8539561.png" : "https://pixsector.com/cache/cec946a5/avde0e25d106d5c8b716b.png"});
`;

export const Delete = styled.img`
    height: 25px;
    width: 25px;
    content: url("https://cdn-icons-png.freepik.com/512/1843/1843344.png")
`;

export const Checked = styled.img<CheckedProps>`
    height: 25px;
    width: 25px;
    content: url(${props => props.state? "https://w7.pngwing.com/pngs/270/706/png-transparent-check-mark-computer-icons-green-tick-mark-angle-text-logo-thumbnail.png" : "https://e7.pngegg.com/pngimages/749/563/png-clipart-computer-icons-check-mark-graphics-icon-design-symbol-miscellaneous-text.png"})
`;