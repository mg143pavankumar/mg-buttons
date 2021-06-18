import styled from "styled-components";

const primaryColor = "#022F47";
const secondaryColor = "#14CDDB";

const SlideableButton = styled.button`
  background-color: ${({ bgSecondaryColor }) =>
    bgSecondaryColor ? bgSecondaryColor : secondaryColor};
  padding: ${({ paddingAll }) => (paddingAll ? paddingAll : "10")}px;
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18")}px;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10"}px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "140")}px;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};

  position: relative;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeight};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ bgPrimaryColor }) =>
      bgPrimaryColor ? bgPrimaryColor : primaryColor};
    border-top-left-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    border-bottom-left-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ bgPrimaryColor }) =>
      bgPrimaryColor ? bgPrimaryColor : primaryColor};
    border-top-right-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    border-bottom-right-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "10"}px;
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  :hover:before {
    width: 0%;
    opacity: 0;
  }

  :hover:after {
    width: 0%;
    opacity: 0;
  }
`;

export default SlideableButton;
