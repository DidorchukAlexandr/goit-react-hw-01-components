import styled from '@emotion/styled';
// import { findByLabelText } from '@testing-library/react';

export const ProfileCard = styled.div`
  width: 350px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;

  background-color: whitesmoke;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  border-radius: 300px;
  width: 150px;
  margin-bottom: 20px;
  background-color: lightgrey;
`;

export const Name = styled.p`
  font-size: 24px;
  line-height: 1.26;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.22;
  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  padding: 30px 10px;
  width: 116px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(150 164 164);
     &: not(:last-child) {
       border-right: 1px solid #514f5d85;
    &: first-child {
       border-bottom-left-radius: 5px;
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const StatQuantity = styled.span`
  font-size: 16;
  font-weight: bold;
`;
