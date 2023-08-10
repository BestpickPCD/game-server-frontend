import React, { useState } from 'react';
import {
  useGetUsersQuery,
  useUpdateUserMutation
} from 'src/services/userService';
import davidjs from 'src/modules/david/david.js';
import ListUser from 'src/modules/david/theme/list_user';
import HTML from 'src/modules/david/theme/html';

const Test = (): JSX.Element => {
  const [updateUser] = useUpdateUserMutation();

  const [vpage, setPage] = useState(0);
  const { data: udata, isLoading } = useGetUsersQuery(
    { size: 15, page: vpage },
    { refetchOnMountOrArgChange: true }
  );

  const bt_user_disable = async function (e) {
    e.preventDefault();
    const ob = e.currentTarget;
    const x = {
      id: ob.getAttribute('data-alias'),
      value: davidjs.int(ob.getAttribute('data-value'), true) ? 0 : 1
    };

    const ac = await updateUser({ id: x.id, body: { isActive: x.value } });
    if (ac) {
      ob.setAttribute('data-value', 1 - x.value);
    }
  };
  const page_Click = function (e) {
    e.preventDefault();
    let p: number = parseInt(e.currentTarget.getAttribute('data-attr'));
    if (!p) {
      p = 1;
    }
    setPage(p - 1);
  };

  if (!isLoading) {
    davidjs.set(bt_user_disable, 'user_hide');
    davidjs.set(page_Click, 'page_click');
    davidjs.set({ page: vpage + 1 }, 'page_data');
    davidjs.set(udata);
    const s = (
      <>
        {HTML.page_bar({
          left: [
            { icon: 'fa-solid fa-user-plus fa-fw', tip: 'New Users' },
            { icon: 'fa-solid fa-list-ul fa-fw', tip: 'List User' }
          ],
          right: [
            { icon: 'fa-solid fa-magnifying-glass fa-fw', tip: 'Search Users' }
          ]
        })}
        <div>
          <ListUser />
        </div>
      </>
    );

    return HTML.page(s);
  }
  return <>Loading ... </>;
};
export default Test;
