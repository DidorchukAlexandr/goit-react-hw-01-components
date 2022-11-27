import styled from '@emotion/styled';

export const Status = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 8px;
`;

export const Img = styled.img`
  border-radius: 5px;
  margin-right: 20px;
  margin-left: 30px;
`;

export const Text = styled.span`
  font-weight: bold;
`;
