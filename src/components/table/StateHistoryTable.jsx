import { Table } from 'react-bootstrap';

import '../table/custom-table.scss';

const style = {
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem',
  },
  th: {
    color: 'white',
  },
  td: {
    color: 'white',
    backgroundColor: 'rgb(255,255,255,0)',
  },
  thead: {
    backgroundColor: 'black',
  },
};

const StateHistoryTable = (props) => {
  const currentFacility = props.currentFacility
  const length = (currentFacility.stateHistory.length>=0) ? currentFacility.stateHistory.length : 0

  return (
    <>
      <div style={style.title}>상태이력조회</div>
      <Table
        className="table-dark table-bordered border-secondary"
        bordered
        responsive
      >
        <thead className="text-center" style={style.thead}>
          <tr>
            <th style={style.th}>이상 감지 일자</th>
            <th style={style.th}>내역</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td style={style.td}>{currentFacility.stateHistory[length-2]}</td>
            <td style={style.td}>전력이상</td>
          </tr>
          <tr>
            <td style={style.td}>{currentFacility.stateHistory[length-1]}</td>
            <td style={style.td}>전력이상</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default StateHistoryTable;
