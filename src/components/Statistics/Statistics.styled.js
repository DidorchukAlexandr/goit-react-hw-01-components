import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatContainer = styled.section`
  width: 350px;
  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  margin-bottom: 20px;
  background-color: whitesmoke;
`;

export const Title = styled.h2`
  padding: 25px;
  text-align: center;
  font-weight: 500;
`;

export const StatList = styled.ul`
  width: 350px;
  display: flex;
  margin: 0 auto;
`;

export const StatItem = styled.li`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
