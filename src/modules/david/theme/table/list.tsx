import david from 'src/modules/david/david.js';

const TableRows = function (data = null): JSX.Element {
  const head = Object.keys(data.head);
  const body = data.body;

  return (
    <>
      {body.map((val) => (
        <>
          <tr key={val.id}>
            {head.map((key) => (
              <>
                <td key={key}>{val[key]}</td>
              </>
            ))}
          </tr>
        </>
      ))}
    </>
  );
};
const TableBody = function (data = null): JSX.Element {
  return <>{TableRows(data)}</>;
};
const TableHeader = function (data = null): JSX.Element {
  const head = data.head;
  const dhead = Object.keys(head);
  return (
    <>
      <tr>
        {dhead.map((val) => (
          <>
            <td key={val} data-key={val}>
              {head[val]}
            </td>
          </>
        ))}
      </tr>
    </>
  );
};

const TableList = function (): JSX.Element {
  const data = david.get('table');
  if (!data) {
    return (
      <>
        <h2>Empty Records</h2>
      </>
    );
  }

  return (
    <>
      <div className="DavidTable">
        <table>
          <thead>{TableHeader(data)}</thead>
          <tbody>{TableBody(data)}</tbody>
        </table>
      </div>
    </>
  );
};
export default TableList;
