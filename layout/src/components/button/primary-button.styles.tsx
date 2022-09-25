import styled, {css} from 'styled-components';

const buttonStyles = css`
  background-color: #14805e;
  color: #fff;
  border: none;

  &:hover {
    background-color: #14805e;
    color: #fff;
    border: none;
  }

  &:active {
    background-color: #14805e;
    color: #fff;
    border: none;
  }

  &:disabled,
  &[disabled] {
    background-color: #c2c2c2;
  }

  &:disabled:hover,
  &[disabled]:hover {
    background-color: #c2c2c2;
    color: white;
    border: none;
    cursor: unset;
  }
`;

const secondaryButtonStyles = css`
  background: rgba(255, 255, 255, .1);
  border: solid 1px #222e41;
  font-weight: 500;
  color: #222e41;

  &:hover {
    border: solid 1px #8200ff;
    font-weight: 500;
    color: #8200ff;
  }

  &:active {
    border: solid 1px #ac55ff;
    font-weight: 500;
    color: #a879d5;
  }

  &:disabled,
  &[disabled] {
    border: solid 1px #c2c2c2;
    font-weight: 500;
    color: #c2c2c2;
  }

  &:disabled:hover,
  &[disabled]:hover {
    border: solid 1px #c2c2c2;
    font-weight: 500;
    color: #c2c2c2;
    cursor: unset;
  }
`;

const getButtonStyles = props => {
    return props.secondary ? secondaryButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  border-radius: 24px;

  font-weight: bold;
  cursor: pointer;

  font-family: Poppins-Medium;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    min-width: 90px;
    min-height: 24px;
    font-size: 12px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    min-width: 180px;
    min-height: 40px;
    font-size: 16px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    max-width: 256px;
    min-height: 48px;
    font-size: 16px;
  }


  @media only screen and (min-width: 1280px) {
    font-size: 16px;
    padding: 15px 68px;
  }

  ${getButtonStyles}
`;