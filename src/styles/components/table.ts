import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    table {
      border-spacing: 0 8px;

      width: 100%;
      tbody {
        tr {
          background: #fff;

          td {
            padding: 20px 32px;
            border: none;
            text-align: center;
            max-width: 425px;
          }

          td:first-child {
            border-radius: 8px 0 0 8px;
            text-align: left;
          }
          td:last-child {
            border-radius: 0 8px 8px 0;
          }
        }
        & + tr {
          margin-top: 8px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    table {
      thead {
        display: none;
      }

      tbody {
        tr {
          display: flex;
          flex-direction: column;
          background: #fff;
          padding: 20px 32px;

          & + tr {
            margin-top: 8px;
            margin-left: 0;
          }

          td {
            & + td {
              margin-top: 8px;
            }
          }
        }
      }
    }
  }
`;
