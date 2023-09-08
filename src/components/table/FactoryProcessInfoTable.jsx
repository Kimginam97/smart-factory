import { Table } from 'react-bootstrap';

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

const FactoryProcessInfoTable = (props) => {
  const currentFacility = props.currentFacility

  return (
    <>
      <div style={style.title}>공정정보</div>
      <Table
        className="table-dark table-bordered border-secondary"
        bordered
        responsive
      >
        <thead className="text-center" style={style.thead}>
          <tr>
            <th style={style.th}>순번</th>
            <th style={style.th}>Process</th>
            <th style={style.th} colSpan={2}>
              In
            </th>
            <th style={style.th} colSpan={2}>
              Out
            </th>
          </tr>
          <tr>
            <th style={style.th} colSpan={2}></th>
            <th style={style.th}>Date</th>
            <th style={style.th}>Time</th>
            <th style={style.th}>Date</th>
            <th style={style.th}>Time</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td style={style.td}>{currentFacility.turn}</td>
            <td style={style.td}>{currentFacility.process}</td>
            <td style={style.td}>{currentFacility.inDate}</td>
            <td style={style.td}>{currentFacility.inTime}</td>
            <td style={style.td}>{currentFacility.outIn}</td>
            <td style={style.td}>{currentFacility.outTime}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default FactoryProcessInfoTable;
