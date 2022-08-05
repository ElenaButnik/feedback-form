import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 360px) {
    max-width: 767.98px;
    
  }

  @media screen and (min-width: 768px) {
    max-width: 1023.98px;
    
  }
  @media screen and (min-width: 1024px) {
    max-width: 1440px;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 147px;
  padding-bottom: 174px;
`;
export const Title = styled.h1`
  padding-bottom: 30px;
  padding-top: 179px;
  font-size: 40px;
  color: #3e3e3e;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 557px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  &:last-of-type {
    margin-bottom: 23px;
    height: 189px;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
    height: 93px;
  }

  ::placeholder {
    padding-left: 46px;
    padding-top: 31px;
  }
`;

export const Button = styled.button`
  width: 218px;
  max-width: 100%;
  height: 73px;
  font-size: 18px;
  line-height: 1;

  color: #ffffff;
  background-color: #fad34f;
  border-radius: 500px;
  border: none;
`;

export const Smile = styled.span`
  position: absolute;
  width: 88px;
  height: 85px;
  top: 5px;
  left: 5px;
`;
