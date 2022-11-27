import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  background-color: #fff;
  border-collapse: collapse;
  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  thead {
    background-color: #1e90ff;
  }
  tbody {
    text-align: center;
  }
  tr:nth-of-type(even) {
    background-color: #81d4fa;
  }
  th {
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 10px 15px;
    background: #4a4949;
    font-size: 16px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  td {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 16px;
    vertical-align: top;
  }
`;
