import styled from "styled-components";
import imgForBcg from "../../images/bcg.jpg";

export const ImageBcg = styled.div`
  position: relative;
  margin-top: -20px;
  margin-right: -300px;
  margin-left: 158px;

  width: 2000px;
  height: 924px;
  border-radius: 50%;
  background-image: url(${imgForBcg});
  background-color: blue;
  background-size: 66% 100%;
  background-repeat: no-repeat;
  background-position: left top;
`;

export const Smile = styled.span`
  position: absolute;
  top: 525px;
  left: -40px;
  z-index: 1;
`;

export const SmilePink = styled.span`
  position: absolute;
  top: 545px;
  left: -95px;
  z-index: 0;
`;
