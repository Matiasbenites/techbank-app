import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#e9c46a" : "#e9c46a")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #e9c46a;
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#010606")};
    color: ${({ primary }) => (primary ? "#010606" : "#fff")};
    box-shadow: 0 0 5px #e9c46a, 0 0 25px #e9c46a, 0 0 50px #e9c46a,
      0 0 200px #e9c46a;
  }
`;
