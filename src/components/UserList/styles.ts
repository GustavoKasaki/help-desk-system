import styled from 'styled-components'

export const Table = styled.table`
  max-width: 80%;
  text-align: center;
  border: 1px solid #000;

  th,
  td {
    border: 1px solid #000;
    padding: 12px;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .id,
  .password {
    width: 25%;
  }

  .displayName {
    width: 40%;
  }

  .tipo {
    width: 10%;
  }
`
