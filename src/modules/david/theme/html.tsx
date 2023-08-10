import davidjs from 'src/modules/david/david.js';

const html = new (function () {
  const data = { page: {} };
  this.icon = function (icon = null, name = null, url = null) {
    const icc = [null, null, null];
    const mh = [];
    let df = {};
    if (typeof icon == 'string') {
      df = { icon: icon };
    }
    const a = Object.assign(
      {},
      {
        icon: icon,
        name: name,
        url: url,
        attr: null,
        onclick: null,
        tip: null
      },
      icon,
      df,
      this.props,
      { attrs: null }
    );
    if (a.icon) {
      icc[0] = (
        <>
          <span className={a.icon} data-ic="1">
            {' '}
          </span>
        </>
      );
      mh.push('icon');
    }
    if (a.name) {
      icc[1] = (
        <>
          <span data-lb="1">{a.name}</span>
        </>
      );
      mh.push('label');
    }
    if (a.tip) {
      icc[2] = this.tip(null, a.tip);
    }
    const ch = (
      <>
        <span className="dv_icon_main" data-tip={icc[2] ? 1 : 0}>
          <span
            className="dv_icon"
            data-v={mh.join(' ')}
            onClick={a.onclick}
            data-attr={a.attr}
          >
            {icc[0]}
            {icc[1]}
          </span>
          {icc[2]}
        </span>
      </>
    );
    if (a.url) {
      return this.link(ch, a.url, a.name);
    }
    return ch;
  };
  this.icons = function (m = null, name = 'Dv_list_icons') {
    if (typeof m != 'object') {
      return null;
    }
    const ms = [];
    const mx = Object.values(m);
    for (const i in mx) {
      ms.push(this.icon(mx[i]));
    }
    return this.list(ms, name);
  };
  this.tip = function (child = null, text = null) {
    const dd = Object.assign(
      {
        child: child,
        text: text
      },
      child
    );
    let c_child = null;
    if (dd.child) {
      c_child = (
        <>
          <div className="dv_tip_content">{dd.child}</div>
        </>
      );
    }
    return (
      <>
        <div className="dv_tip">
          {c_child}
          <div className="dv_tip_text">{dd.text}</div>
        </div>
      </>
    );
  };
  this.link = function (child = null, url = null, name = null) {
    return (
      <>
        <a href={url} title={name}>
          {child}
        </a>
      </>
    );
  };
  this.on_off = function (d = null) {
    const dd = Object.assign(
      {},
      {
        name: null,
        value: 0,
        revert: 0,
        onchange: null,
        onclick: null,
        alias: null
      },
      d
    );
    let on_off_click = dd.onclick;
    if (on_off_click === null) {
      on_off_click = function (e) {
        const ii = parseInt(e.currentTarget.getAttribute('data-value')) ? 1 : 0;
        e.currentTarget.setAttribute('data-value', 1 - ii);
      };
    }
    dd.val = dd.value ? 1 : 0;
    if (dd.revert) {
      dd.val = 1 - dd.val;
    }
    return (
      <div
        className="dv_on_off"
        onClick={on_off_click}
        data-value={dd.val}
        data-alias={dd.alias}
      >
        <input type="hidden" name={dd.name} onChange={dd.onchange} />
        <span> </span>
      </div>
    );
  };
  this.list = function (d = null, cname = 'David_list_li') {
    let dd = d;
    if (!Array.isArray(dd)) {
      dd = [];
    }
    dd.filter((x) => x);
    return (
      <>
        <div className={cname}>
          <ul>
            {dd.map((val) => (
              <>
                <li>{val}</li>
              </>
            ))}
          </ul>
        </div>
      </>
    );
  };
  this.draw = function (s1, s2 = null, s3 = null, s4 = null) {
    const a = [s1, s2, s3, s4].filter((x) => x);
    return (
      <>
        {a.map((val) => (
          <>{val}</>
        ))}
      </>
    );
  };
  this.page_set = function (ops = null) {
    data.page = Object.assign({}, data.page, ops);
    return data.page;
  };
  this.page_bar = function (ops = null) {
    const dd = Object.assign(
      {
        left: null,
        right: null
      },
      ops,
      this.props
    );

    if (dd.left && typeof dd.left == 'object') {
      dd.left = this.icons(dd.left);
    }
    if (dd.right && typeof dd.right == 'object') {
      dd.right = this.icons(dd.right);
    }
    return (
      <>
        <div className="David_page_bar">
          <div className="pleft">{dd.left}</div>
          <div className="pright">{dd.right}</div>
        </div>
      </>
    );
  };
  this.page_data = function (child = null, opx = null) {
    const pclick = davidjs.get('page_click');
    const ops = Object.assign(
      {
        url: null,
        page: 0,
        page_zero: true,
        max: null,
        size: 10,
        total: null,
        page_click: pclick
      },
      davidjs.get('page_data'),
      opx
    );

    //ops.down=ops.page_zero?1:0;
    ops.page = parseInt(ops.page);
    if (!ops.page || ops.page < 1) {
      ops.page = 1;
    }

    if (ops.max === null && ops.total && ops.size) {
      ops.max = Math.ceil(ops.total / ops.size);
    }
    if (ops.max < 2) {
      return <>{child}</>;
    }

    const e = { v: [null, null, null, null, null] };
    e.v[0] = this.icon({
      icon: 'fa-solid fa-arrow-left fa-fw',
      onclick: ops.page_click,
      attr: 1
    });
    e.v[4] = this.icon({
      icon: 'fa-solid fa-arrow-right fa-fw',
      onclick: ops.page_click,
      attr: ops.max
    });
    e.v[1] = this.icon({
      icon: 'fa-solid fa-caret-left fa-fw',
      onclick: ops.page_click,
      attr: ops.page - 1
    });
    e.v[3] = this.icon({
      icon: 'fa-solid fa-caret-right fa-fw',
      onclick: ops.page_click,
      attr: ops.page + 1
    });
    e.v[2] = this.icon(null, ops.page + '/' + ops.max);
    return (
      <>
        {child}
        {this.list(e.v, 'David_pagedata_li')}
      </>
    );
  };
  this.page = function (child = null, ops = null) {
    if (ops) {
      this.page_set(
        Object.assign(
          {},
          {
            title: null,
            header: null,
            footer: null,
            page_click: null
          },
          ops
        )
      );
    }
    function page_header() {
      return (
        <>
          <div className="PageHeader">
            <div className="wrap_body"> </div>
          </div>
        </>
      );
    }
    function page_footer() {
      return (
        <>
          <div className="PageFooter">
            <div className="wrap_body"> </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="wrap_body_right" data-author="David">
          {page_header()}
          <div className="PageContent">
            <div className="wrap_body">{child}</div>
          </div>
          {page_footer()}
        </div>
      </>
    );
  };
})();
export default html;

function Icon(): JSX.Element {
  return html.icon(this.pros);
}

export { Icon };
