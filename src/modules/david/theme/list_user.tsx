import davidjs from 'src/modules/david/david.js';
import TableList from 'src/modules/david/theme/table/list';
import HTML from 'src/modules/david/theme/html';

export default (): JSX.Element => {
  const data = davidjs.get();

  if (!data) {
    return null;
  }

  const user_hide = davidjs.get('user_hide');
  const ida = data.data.data;
  const list = [];
  //const ida=data.list;const list=[];
  for (const i in ida) {
    const e = {
      cl01: HTML.on_off({
        value: ida[i].isActive ? 1 : 0,
        revert: 1,
        alias: ida[i].id,
        onclick: user_hide
      }),
      unamex: HTML.link(
        HTML.list(
          [
            <b>
              {HTML.icon('fa-solid fa-circle-user fa-fw')} {ida[i].name}
            </b>,
            `#${ida[i].id}. ${ida[i].username}`,
            `${ida[i].email}`
          ],
          'list_info'
        ),
        null
      ),
      uname: HTML.list([ida[i].name, ida[i].username]),
      u_direct: HTML.list([
        HTML.icon({ icon: 'fa-solid fa-key fa-fw', tip: 'Change Password' }),
        HTML.icon({ icon: 'fa-solid fa-dice fa-fw', tip: 'Game History' }),
        HTML.icon({
          icon: 'fa-solid fa-magnifying-glass-dollar fa-fw',
          tip: 'History Transactions'
        }),
        HTML.icon({
          icon: 'fa-solid fa-gear fa-fw',
          tip: 'Update Information'
        }),
        HTML.icon({ icon: 'fa-solid fa-trash fa-fw', tip: 'Delete This' })
      ])
    };
    list.push(Object.assign({}, ida[i], e));
  }
  davidjs.set(
    {
      head: {
        id: HTML.icon('fa-solid fa-hashtag fa-fw'),
        cl01: 'Block',
        uname: HTML.icon('fa-solid fa-user-check fa-fw', 'Users'),
        //"username":HTML.icon("fa-solid fa-user-check fa-fw","Users"),
        email: HTML.icon('fa-solid fa-envelope fa-fw', 'Email'),
        u_direct: ''
      },
      body: list
    },
    'table'
  );
  const s = (
    <>
      <TableList />
    </>
  );
  return (
    <>
      {HTML.page_data(s, {
        total: data.data.totalItems,
        size: data.data.size
      })}
    </>
  );
};
