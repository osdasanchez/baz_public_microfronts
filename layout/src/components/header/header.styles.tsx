import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 361px) {
    min-height: 48px;
  }
  @media only screen and (min-width: 769px) {
    min-height: 78px;
  }

  @media (max-width: 1023px) {
    &.margin_header {
      margin-bottom: 84px;
    }
  }
`;

export const HeaderWraper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
`;

export const BoxContent = styled.div`
  width: 94%;
  height: 100%;
  max-width: 1138px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .logo {
    width: 55px;
    height: auto;
    align-self: center;
    cursor: pointer;

    @media only screen and (min-width: 361px) {
      width: 73.3px;
      height: auto;
    }
    @media only screen and (min-width: 769px) {
      width: 104px;
      height: auto;
    }
  }

  .children-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54.3px;
    height: 32px;
    align-self: center;
  }
`;

export const ReferencePositionFilterNews = styled.div`
  position: relative;
`;

export const IconFilterNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const inactiveFilter = {
    pointerEvents: "none",
};

export const activeFilter = {
    pointerEvents: "all",
};

export const ContainerSearchMovies = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  width: 100%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 752px;
  }

  @media (max-width: 1023px) {
    top: 137px;
    max-width: 464px;
    min-width: 316px;
  }

  @media (max-width: 768px) {
    top: 107px;
  }

  @media (max-width: 360px) {
    top: 98px;
    min-width: 0;
    width: 92%;
  }
`;
