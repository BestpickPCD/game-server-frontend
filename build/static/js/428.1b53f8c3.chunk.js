'use strict';
(self.webpackChunkadmin_dashboard =
  self.webpackChunkadmin_dashboard || []).push([
  [428],
  {
    7395: (e, t, n) => {
      n.d(t, { Z: () => l });
      var a = n(6934),
        r = n(184);
      const i = (0, a.ZP)('span')((e) => {
          let { theme: t } = e;
          return '\n      background-color: '
            .concat(t.colors.alpha.black[5], ';\n      padding: ')
            .concat(t.spacing(0.5, 1), ';\n      font-size: ')
            .concat(t.typography.pxToRem(13), ';\n      border-radius: ')
            .concat(
              t.general.borderRadius,
              ';\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: '
            )
            .concat(
              t.spacing(3),
              ';\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: '
            )
            .concat(t.colors.primary.lighter, ';\n          color: ')
            .concat(
              t.palette.primary.main,
              '\n        }\n\n        &-black {\n          background-color: '
            )
            .concat(t.colors.alpha.black[100], ';\n          color: ')
            .concat(
              t.colors.alpha.white[100],
              ';\n        }\n        \n        &-secondary {\n          background-color: '
            )
            .concat(t.colors.secondary.lighter, ';\n          color: ')
            .concat(
              t.palette.secondary.main,
              '\n        }\n        \n        &-success {\n          background-color: '
            )
            .concat(t.colors.success.lighter, ';\n          color: ')
            .concat(
              t.palette.success.main,
              '\n        }\n        \n        &-warning {\n          background-color: '
            )
            .concat(t.colors.warning.lighter, ';\n          color: ')
            .concat(
              t.palette.warning.main,
              '\n        }\n              \n        &-error {\n          background-color: '
            )
            .concat(t.colors.error.lighter, ';\n          color: ')
            .concat(
              t.palette.error.main,
              '\n        }\n        \n        &-info {\n          background-color: '
            )
            .concat(t.colors.info.lighter, ';\n          color: ')
            .concat(t.palette.info.main, '\n        }\n      }\n');
        }),
        l = (e) => {
          let { color: t = 'secondary', children: n, ...a } = e;
          return (0, r.jsx)(i, {
            className: 'MuiLabel-' + t,
            ...a,
            children: n
          });
        };
    },
    645: (e, t, n) => {
      n.r(t), n.d(t, { default: () => ne });
      var a = n(5574),
        r = n(697),
        i = n(2791),
        l = n(1134),
        s = n(5048),
        o = n(6790),
        d = n(1827),
        c = n(5850),
        u = n(7837),
        m = n(4695),
        h = n(7590),
        g = n(8409),
        x = n(7891),
        p = n(9419),
        f = n(4167),
        v = n(5674),
        j = n(8007),
        b = n(4349),
        Z = n(184);
      const y = j.Ry().shape({
          name: j.Z_().required('Name is required!'),
          roleId: j.Rx().required('Role is required!'),
          rate: j.Rx().required('Rate is required!'),
          currencyId: j.Rx().required('Currency is required!'),
          username: j.Z_().required('Username is required!'),
          parentAgentId: j.Z_().nullable()
        }),
        C = (e) => {
          var t, n, a;
          let { open: s, detail: o, onClose: c, refetch: j, hide: C } = e;
          const { notify: I, message: w } = (0, u.p)(),
            [D, T] = (0, i.useState)(!1),
            [N, { isLoading: k }] = (0, d.h6)(),
            { data: A } = (0, v.ev)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== o && void 0 !== o && o.id)
              }
            ),
            { data: S } = (0, f.K4)(
              {},
              {
                refetchOnMountOrArgChange: !0,
                skip: !(null !== o && void 0 !== o && o.id)
              }
            ),
            {
              register: R,
              setValue: M,
              reset: W,
              handleSubmit: F,
              control: P,
              formState: { errors: U }
            } = (0, l.cI)({
              resolver: (0, m.X)(y),
              defaultValues: {
                name: '',
                roleId: 0,
                username: '',
                currencyId: 0,
                parentAgentId: ''
              }
            });
          (0, i.useEffect)(() => {
            null !== o && void 0 !== o && o.id
              ? (M('name', o.name),
                M('username', o.username),
                M('rate', Number(null === o || void 0 === o ? void 0 : o.rate)),
                M('roleId', o.roleId),
                M('currencyId', o.currencyId),
                M(
                  'parentAgentId',
                  null === o || void 0 === o ? void 0 : o.parentAgentId
                ))
              : W();
          }, [o]);
          const E = (0, i.useMemo)(() => {
              var e;
              return null === A ||
                void 0 === A ||
                null === (e = A.data) ||
                void 0 === e
                ? void 0
                : e.map((e) => ({ id: e.id, name: e.name, value: e.id }));
            }, [A]),
            z = (0, i.useMemo)(
              () =>
                null === S || void 0 === S
                  ? void 0
                  : S.map((e) => ({ id: e.id, name: e.name, value: e.id })),
              [S]
            );
          return (0, Z.jsx)(x.Z, {
            title:
              null !== o && void 0 !== o && o.id
                ? 'Edit '.concat(o.name)
                : 'Add Agent',
            onClose: c,
            open: s,
            isLoading: k,
            onOk:
              null !== o && void 0 !== o && o.id
                ? F(async (e) => {
                    try {
                      null !== o &&
                        void 0 !== o &&
                        o.id &&
                        (await N({
                          id: o.id,
                          body: {
                            name: e.name,
                            roleId: e.roleId,
                            rate: Number(e.rate),
                            currencyId: e.currencyId,
                            parentAgentId: e.parentAgentId
                          }
                        }).unwrap(),
                        I({ message: w.UPDATED })),
                        j(),
                        C(),
                        W();
                    } catch (n) {
                      var t;
                      I({
                        message:
                          (null === n ||
                          void 0 === n ||
                          null === (t = n.data) ||
                          void 0 === t
                            ? void 0
                            : t.message) || w.ERROR,
                        type: 'error'
                      });
                    }
                  })
                : () => T(!0),
            children:
              null !== o && void 0 !== o && o.id
                ? (0, Z.jsx)(r.Z, {
                    component: 'form',
                    id: 'form-users',
                    children: (0, Z.jsxs)('div', {
                      className: 'block',
                      children: [
                        (0, Z.jsx)(h.n, {
                          label: (0, Z.jsx)(b.Z, { id: 'label.username' }),
                          name: 'username',
                          sx: { my: 2 },
                          errors: U,
                          register: R,
                          disabled: !(null === o || void 0 === o || !o.id)
                        }),
                        (0, Z.jsx)(h.n, {
                          label: (0, Z.jsx)(b.Z, { id: 'label.name' }),
                          name: 'name',
                          errors: U,
                          register: R
                        }),
                        (0, Z.jsx)(r.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: (0, Z.jsx)(h.n, {
                            label: (0, Z.jsx)(b.Z, { id: 'label.rate' }),
                            name: 'rate',
                            errors: U,
                            register: R
                          })
                        }),
                        (0, Z.jsxs)(r.Z, {
                          display: 'flex',
                          gap: '1rem',
                          sx: { my: 2 },
                          children: [
                            (0, Z.jsx)(h.P, {
                              label: 'Role',
                              name: 'roleId',
                              control: P,
                              options: E
                            }),
                            (0, Z.jsx)(h.P, {
                              label: 'Currency',
                              name: 'currencyId',
                              control: P,
                              options: z
                            })
                          ]
                        }),
                        (0, Z.jsx)(g.R, {
                          control: P,
                          name: 'parentAgentId',
                          parent: {
                            id:
                              null === o ||
                              void 0 === o ||
                              null === (t = o.parent) ||
                              void 0 === t
                                ? void 0
                                : t.id,
                            name:
                              null === o ||
                              void 0 === o ||
                              null === (n = o.parent) ||
                              void 0 === n
                                ? void 0
                                : n.name,
                            value:
                              null === o ||
                              void 0 === o ||
                              null === (a = o.parent) ||
                              void 0 === a
                                ? void 0
                                : a.id
                          }
                        })
                      ]
                    })
                  })
                : (0, Z.jsx)(p.Z, {
                    isSubmit: D,
                    setIsSubmit: () => T(!1),
                    refetch: j,
                    onClose: c,
                    isAgentRegister: !0
                  })
          });
        },
        I = (0, i.memo)(C);
      var w = n(8901),
        D = n(890),
        T = n(4294),
        N = n(8096),
        k = n(4925),
        A = n(9321),
        S = n(3786),
        R = n(2970),
        M = n(946),
        W = n(8673),
        F = n(3504);
      const P = () => {
        const { visible: e, toggle: t } = (0, u.d)(),
          n = (0, u.d)(),
          [a, l] = (0, i.useState)(),
          [s, o] = (0, i.useState)(),
          [d, c] = (0, i.useState)(''),
          [m, h] = (0, i.useState)({ id: '', ids: [] }),
          [g, x] = (0, F.lr)();
        (0, i.useEffect)(() => {
          const e = localStorage.getItem('user');
          e && o(JSON.parse(e));
        }, []);
        const p = (e, n) => {
            c(n), l(e), t();
          },
          f = (e) => {
            h(e), n.toggle();
          };
        return {
          tableHeader: [
            { align: 'inherit', title: 'label.name', name: 'name' },
            {
              align: 'inherit',
              title: 'label.parent.name',
              name: 'agentParentName'
            },
            { align: 'inherit', title: 'label.affiliated.agent', name: '' },
            { align: 'inherit', title: 'label.rate', name: 'rate' },
            { align: 'right', title: 'label.balance', name: 'balance' },
            { align: 'right', title: 'label.loggedin', name: 'updatedAt' },
            { align: 'center', title: 'title.managements', name: 'management' },
            { align: 'right', title: 'label.actions' }
          ],
          visible: e,
          user: a,
          dialogType: d,
          parentAgentIds: m,
          affiliatedAgentModal: n,
          tableBody: (e) => {
            var t, n;
            return [
              {
                align: 'inherit',
                children: (0, Z.jsx)(Z.Fragment, {
                  children: (0, Z.jsx)(D.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: e.name
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, Z.jsx)(Z.Fragment, {
                  children: (0, Z.jsx)(D.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      null !==
                        (t =
                          null === e ||
                          void 0 === e ||
                          null === (n = e.parent) ||
                          void 0 === n
                            ? void 0
                            : n.name) && void 0 !== t
                        ? t
                        : '-'
                  })
                })
              },
              {
                align: 'inherit',
                children: (0, Z.jsxs)(r.Z, {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  children: [
                    (0, Z.jsx)(T.Z, {
                      variant: 'outlined',
                      onClick: () => f({ ids: e.parentAgentIds, id: e.id }),
                      children: (0, Z.jsx)(D.Z, {
                        whiteSpace: 'nowrap',
                        fontWeight: 600,
                        children: 'Top'
                      })
                    }),
                    (0, Z.jsx)(T.Z, {
                      variant: 'outlined',
                      color: 'success',
                      onClick: () => {
                        return (
                          (t = null === e || void 0 === e ? void 0 : e.id),
                          void x({ parentId: t })
                        );
                        var t;
                      },
                      children: (0, Z.jsx)(D.Z, {
                        whiteSpace: 'nowrap',
                        fontWeight: 600,
                        children: 'Lower Part'
                      })
                    })
                  ]
                })
              },
              {
                align: 'left',
                children: (0, Z.jsx)(Z.Fragment, {
                  children: (0, Z.jsxs)(D.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children: [parseFloat(e.rate).toFixed(2), '%']
                  })
                })
              },
              {
                align: 'right',
                children: (0, Z.jsx)(Z.Fragment, {
                  children: (0, Z.jsx)(T.Z, {
                    variant: 'outlined',
                    startIcon: (0, Z.jsx)(w.Z, {}),
                    href: 'transactions/'.concat(e.id),
                    children: e.balance
                  })
                })
              },
              {
                align: 'right',
                children: (0, Z.jsx)(Z.Fragment, {
                  children: (0, Z.jsx)(D.Z, {
                    variant: 'body1',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    noWrap: !0,
                    children:
                      (null === e || void 0 === e ? void 0 : e.loggedIn) &&
                      (0, M.Z)(
                        (0, W.Z)(
                          null === e || void 0 === e ? void 0 : e.loggedIn
                        ),
                        'dd/MM/yyyy HH:mm'
                      )
                  })
                })
              },
              {
                align: 'center',
                children: (0, Z.jsxs)(r.Z, {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  children: [
                    (0, Z.jsx)(T.Z, {
                      variant: 'outlined',
                      startIcon: (0, Z.jsx)(w.Z, {}),
                      onClick: () => p(e, 'transaction'),
                      disabled:
                        (null === s || void 0 === s ? void 0 : s.level) + 1 !==
                        e.level,
                      children: 'Payment'
                    }),
                    (0, Z.jsx)(T.Z, {
                      variant: 'outlined',
                      color: 'success',
                      startIcon: (0, Z.jsx)(w.Z, {}),
                      onClick: () => p(e, 'vendor'),
                      disabled:
                        (null === s || void 0 === s ? void 0 : s.level) + 1 !==
                        e.level,
                      children: 'Vendors'
                    })
                  ]
                })
              }
            ];
          },
          tableFilter: (e) => {
            let { status: t, dateFrom: n, dateTo: a } = e;
            return [
              (0, Z.jsx)(R.M, {
                label: (0, Z.jsx)(b.Z, { id: 'label.from' }),
                onChange: n.onChange
              }),
              (0, Z.jsx)(R.M, {
                label: (0, Z.jsx)(b.Z, { id: 'label.to' }),
                onChange: a.onChange
              }),
              (0, Z.jsxs)(N.Z, {
                sx: { m: 1, minWidth: 120 },
                children: [
                  (0, Z.jsx)(k.Z, {
                    id: 'isActive',
                    children: (0, Z.jsx)(b.Z, { id: 'label.status' })
                  }),
                  (0, Z.jsxs)(A.Z, {
                    labelId: 'isActive',
                    value: t.value,
                    label: (0, Z.jsx)(b.Z, { id: 'label.status' }),
                    onChange: (e) => t.onChange(e.target.value),
                    children: [
                      (0, Z.jsx)(S.Z, {
                        value: '',
                        children: (0, Z.jsx)(b.Z, { id: 'label.default' })
                      }),
                      (0, Z.jsx)(S.Z, {
                        value: 'active',
                        children: (0, Z.jsx)(b.Z, { id: 'label.active' })
                      }),
                      (0, Z.jsx)(S.Z, {
                        value: 'disable',
                        children: (0, Z.jsx)(b.Z, { id: 'label.disable' })
                      })
                    ]
                  })
                ]
              })
            ];
          },
          toggle: t,
          onAffiliatedAgents: f
        };
      };
      var U = n(9709),
        E = n(1889),
        z = n(8550),
        L = n(2302);
      function O(e) {
        let { user: t, onUpdateToReset: n } = e;
        const [a, l] = (0, i.useState)({
            userId: '',
            amount: 0,
            type: 'user.add_balance',
            note: '',
            token: ''
          }),
          { notify: s, message: o } = (0, u.p)();
        (0, i.useEffect)(() => {
          (a.userId = null === t || void 0 === t ? void 0 : t.id),
            l((e) => ({ ...e, status: 'success' }));
        }, [t]);
        const [d, { isLoading: c }] = (0, L.Dx)({});
        return (0, Z.jsxs)(E.ZP, {
          container: !0,
          spacing: 2,
          children: [
            (0, Z.jsx)(E.ZP, {
              item: !0,
              xs: 12,
              children: (0, Z.jsx)(D.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, Z.jsx)(b.Z, { id: 'title.add-transaction' })
              })
            }),
            (0, Z.jsxs)(r.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              paddingLeft: '18px',
              gap: '12px',
              marginTop: '8px',
              children: [
                (0, Z.jsx)(z.Z, {
                  label: 'Insert the amount here',
                  variant: 'outlined',
                  fullWidth: !0,
                  onInput: (e) => {
                    return (
                      (t = Number(e.target.value)),
                      (n = 'amount'),
                      void l((e) => ({ ...e, [''.concat(n)]: t }))
                    );
                    var t, n;
                  }
                }),
                (0, Z.jsx)(U.Z, {
                  loading: c,
                  onClick: async () => {
                    try {
                      (await d({ ...a, currencyId: t.currencyId }).unwrap()) &&
                        n(!0);
                    } catch (r) {
                      var e;
                      s({
                        message:
                          (null === r ||
                          void 0 === r ||
                          null === (e = r.data) ||
                          void 0 === e
                            ? void 0
                            : e.message) || o.ERROR,
                        type: 'error'
                      });
                    }
                  },
                  size: 'large',
                  variant: 'contained',
                  sx: { width: 120 },
                  children: (0, Z.jsxs)(r.Z, {
                    children: [
                      (0, Z.jsx)('span', { children: '+ \xa0' }),
                      (0, Z.jsx)('span', { children: 'Add' })
                    ]
                  })
                })
              ]
            })
          ]
        });
      }
      var V = n(8029),
        H = n(1918),
        q = n(7945);
      const B = { PaperProps: { style: { maxHeight: 224, width: 350 } } };
      function _(e) {
        let { user: t, onUpdateToReset: n } = e;
        const [a, l] = (0, i.useState)({
          userId: '',
          amount: 0,
          type: 'user.add_balance',
          note: '',
          token: ''
        });
        (0, i.useEffect)(() => {
          (a.userId = null === t || void 0 === t ? void 0 : t.id),
            l((e) => ({ ...e, status: 'success' }));
        }, [t]);
        const { data: s, refetch: o } = (0, q.sj)({ agentId: t.id });
        (0, i.useEffect)(() => {
          if (s) {
            c(s.data);
            const e = s.data.filter((e) => null !== e.selectedVendors);
            console.log(e), m(e);
          }
        }, [s]);
        const [d, c] = (0, i.useState)([]),
          [u, m] = (0, i.useState)([]),
          [h] = (0, q.is)();
        return (0, Z.jsxs)(E.ZP, {
          container: !0,
          spacing: 2,
          padding: 2,
          children: [
            (0, Z.jsx)(E.ZP, {
              item: !0,
              xs: 12,
              children: (0, Z.jsx)(D.Z, {
                gutterBottom: !0,
                variant: 'h5',
                component: 'div',
                children: (0, Z.jsx)(b.Z, { id: 'title.add-vendor' })
              })
            }),
            (0, Z.jsx)(r.Z, {
              justifyContent: 'center',
              display: 'flex',
              width: '100vh',
              children: (0, Z.jsxs)(N.Z, {
                sx: { m: 1 },
                children: [
                  (0, Z.jsx)(k.Z, {
                    id: 'demo-multiple-chip-label',
                    children: 'Available Vendors'
                  }),
                  (0, Z.jsx)(A.Z, {
                    sx: { width: '100%' },
                    labelId: 'demo-multiple-chip-label',
                    id: 'demo-multiple-chip',
                    multiple: !0,
                    value: u,
                    onChange: (e) => {
                      const {
                        target: { value: t }
                      } = e;
                      m(t);
                    },
                    input: (0, Z.jsx)(V.Z, {
                      id: 'select-multiple-chip',
                      label: 'Available Vendors'
                    }),
                    renderValue: (e) =>
                      (0, Z.jsx)(r.Z, {
                        sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
                        children: e.map((e) =>
                          (0, Z.jsx)(H.Z, { label: e.name }, e.id)
                        )
                      }),
                    MenuProps: B,
                    children: d.map((e) =>
                      (0, Z.jsx)(S.Z, { value: e, children: e.name }, e.id)
                    )
                  })
                ]
              })
            }),
            (0, Z.jsx)(U.Z, {
              onClick: async () => {
                (await h({ agentId: t.id, selectedVendors: u }).unwrap())
                  .message && (o(), n(!0));
              },
              size: 'large',
              variant: 'contained',
              sx: { width: '100%' },
              children: (0, Z.jsxs)(r.Z, {
                children: [
                  (0, Z.jsx)('span', { children: '+ \xa0' }),
                  (0, Z.jsx)('span', { children: 'Add' })
                ]
              })
            })
          ]
        });
      }
      var Y = n(4721),
        $ = n(493),
        J = n(5021),
        K = n(7639),
        X = n(6871),
        G = n(7395);
      const Q = (e) => {
          let { data: t, open: n, onClose: a } = e;
          const l = (0, X.s0)(),
            [s, o] = (0, i.useState)({}),
            d = () => {
              o({});
            },
            c = (0, i.useMemo)(
              () =>
                (0, Z.jsxs)('div', {
                  style: { height: '450px', overflow: 'auto' },
                  children: [
                    (0, Z.jsxs)(r.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, Z.jsxs)(G.Z, {
                          color: 'success',
                          children: ['Agents of ', s.name]
                        }),
                        (0, Z.jsx)(T.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Correction'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          onClick: () => {
                            l('/management/agents?parentId='.concat(s.id)),
                              o({});
                          },
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'SubList'
                        }),
                        (0, Z.jsx)(T.Z, {
                          onClick: () =>
                            l('/management/transactions/'.concat(s.id)),
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Payment details'
                        }),
                        (0, Z.jsx)(T.Z, {
                          onClick: () =>
                            l(
                              '/management/transactions/'.concat(
                                s.id,
                                '?type=charging'
                              )
                            ),
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Charging history'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Daily profit statistics'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Statistics by game'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'Pot distribution statistics'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Maximum bet amount limit'
                        }),
                        (0, Z.jsx)(T.Z, {
                          fullWidth: !0,
                          disabled: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Maximum winning amount limited'
                        })
                      ]
                    }),
                    (0, Z.jsx)(Y.Z, {}),
                    (0, Z.jsxs)(r.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, Z.jsx)(G.Z, {
                          color: 'success',
                          children: 'Developer'
                        }),
                        (0, Z.jsx)(T.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'API error log'
                        })
                      ]
                    }),
                    (0, Z.jsx)(Y.Z, {}),
                    (0, Z.jsxs)(r.Z, {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: 0,
                      children: [
                        (0, Z.jsx)(G.Z, { color: 'success', children: 'User' }),
                        (0, Z.jsx)(T.Z, {
                          onClick: () =>
                            l('/management/users?parentId='.concat(s.id)),
                          fullWidth: !0,
                          sx: { color: '#fff', justifyContent: 'flex-start' },
                          children: 'User List'
                        }),
                        (0, Z.jsx)(T.Z, {
                          disabled: !0,
                          fullWidth: !0,
                          sx: {
                            color: 'red !important',
                            justifyContent: 'flex-start'
                          },
                          children: 'Payment details'
                        })
                      ]
                    })
                  ]
                }),
              [s]
            );
          return (0, Z.jsx)(x.Z, {
            title: 'AffiliatedAgentModal',
            open: n,
            onClose: () => {
              a(), d();
            },
            children: (0, Z.jsx)($.Z, {
              children: t.map((e, t) =>
                (0, Z.jsx)(
                  J.ZP,
                  {
                    sx: { my: 2 },
                    children: (0, Z.jsx)(K.Z, {
                      onClose: d,
                      open:
                        (null === s || void 0 === s ? void 0 : s.id) === e.id,
                      disableFocusListener: !0,
                      disableHoverListener: !0,
                      disableTouchListener: !0,
                      title: c,
                      placement: 'right',
                      children: (0, Z.jsxs)(r.Z, {
                        onClick: () => {
                          o(e);
                        },
                        children: [
                          (0, Z.jsx)(D.Z, { mb: 1, children: e.name }),
                          (0, Z.jsxs)(G.Z, {
                            color: 'success',
                            children: ['@', e.username]
                          })
                        ]
                      })
                    })
                  },
                  t
                )
              )
            })
          });
        },
        ee = 'title.agents-management',
        te = (e, t) => (null === e || void 0 === e ? void 0 : e.includes(t)),
        ne = () => {
          const e = [
              { link: '/dashboards', name: 'title.dashboard' },
              { name: ee }
            ],
            { visible: t, hide: n, show: m } = (0, u.d)(),
            { reset: h } = (0, l.cI)(),
            { notify: g, message: x } = (0, u.p)(),
            {
              tableHeader: p,
              visible: f,
              user: v,
              dialogType: j,
              affiliatedAgentModal: b,
              parentAgentIds: y,
              tableBody: C,
              tableFilter: w,
              toggle: D
            } = P(),
            [T, N] = (0, i.useState)([]),
            [k, A] = (0, i.useState)(),
            [S, R] = (0, i.useState)([]),
            [M, W] = (0, i.useState)({
              page: 0,
              size: 10,
              totalPage: 1,
              totalItems: 10,
              sortBy: -1,
              search: '',
              sortDirection: 'asc',
              status: '',
              dateFrom: '',
              dateTo: ''
            }),
            [U] = (0, F.lr)(),
            { permissions: E } = (0, s.v9)((e) => e.common),
            [z] = (0, d.kC)(),
            [L, { isLoading: V }] = (0, d.Lp)(),
            {
              data: H,
              isFetching: q,
              refetch: B
            } = (0, d.aN)(
              {
                id: 1,
                page: M.page,
                size: M.size,
                search: M.search,
                dateFrom: M.dateFrom,
                dateTo: M.dateTo
              },
              { refetchOnMountOrArgChange: !0, skip: !te(E, 'get') }
            ),
            Y = (e) => {
              !0 === e && (g({ message: x.UPDATED }), D(), n(), B(), h());
            };
          (0, i.useEffect)(() => {
            if (H) {
              const e = U.get('parentId');
              if (e) {
                const t = H.data.data.filter((t) => t.parentAgentId === e);
                N(() => {
                  var e;
                  return (0, c.TY)(
                    t,
                    null === (e = p[M.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    M.sortDirection
                  );
                });
              } else
                N(() => {
                  var e;
                  return (0, c.TY)(
                    H.data.data,
                    null === (e = p[M.sortBy]) || void 0 === e
                      ? void 0
                      : e.name,
                    M.sortDirection
                  );
                });
            }
          }, [H, M, U]),
            (0, i.useEffect)(() => {
              null !== y && void 0 !== y && y.ids.length && T.length
                ? R(() =>
                    T.filter((e) =>
                      y.ids.some((t) => e.id === t || e.id === y.id)
                    )
                  )
                : R([]);
            }, [y, T]);
          return (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(o.Z, {
                title: ee,
                data: T,
                totalItems:
                  null === H || void 0 === H ? void 0 : H.data.totalItems,
                tableHeader: p,
                tableBody: C,
                headerTitle: ee,
                breadcrumbs: e,
                onOpenModal:
                  te(E, 'create') &&
                  (() => {
                    m(), A(null);
                  }),
                isLoading: q || V,
                onDelete:
                  te(E, 'delete') &&
                  (async (e) => {
                    try {
                      await L({ id: e }).unwrap(),
                        g({ message: x.DELETED }),
                        B();
                    } catch (t) {
                      g({ message: t.data.message || x.ERROR, type: 'error' });
                    }
                  }),
                onUpdate:
                  te(E, 'update') &&
                  (async (e) => {
                    try {
                      const t = await z({ id: e }).unwrap();
                      m(), A(t.data);
                    } catch (t) {
                      g({ message: x.ERROR, type: 'error' });
                    }
                  }),
                pagination: M,
                onPagination: W,
                tableFilter: w({
                  status: {
                    value: M.status,
                    onChange: (e) => W({ ...M, status: e })
                  },
                  dateFrom: {
                    value: M.dateFrom,
                    onChange: (e) => W({ ...M, dateFrom: (0, c.Zd)(e, 'from') })
                  },
                  dateTo: {
                    value: M.dateTo,
                    onChange: (e) => W({ ...M, dateTo: (0, c.Zd)(e, 'to') })
                  }
                })
              }),
              (0, Z.jsx)(I, {
                open: t,
                detail: k,
                onClose: n,
                refetch: B,
                hide: n
              }),
              (0, Z.jsx)(a.Z, {
                open: f,
                onClose: D,
                children: (0, Z.jsx)(r.Z, {
                  component: 'form',
                  padding: 2,
                  children:
                    'transaction' === j
                      ? (0, Z.jsx)(O, { user: v, onUpdateToReset: Y })
                      : (0, Z.jsx)(_, { user: v, onUpdateToReset: Y })
                })
              }),
              (0, Z.jsx)(Q, { onClose: b.toggle, open: b.visible, data: S })
            ]
          });
        };
    },
    8901: (e, t, n) => {
      var a = n(4836);
      t.Z = void 0;
      var r = a(n(5649)),
        i = n(184),
        l = (0, r.default)(
          (0, i.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z'
          }),
          'PaidOutlined'
        );
      t.Z = l;
    },
    3329: (e, t, n) => {
      var a = n(4836);
      t.Z = void 0;
      var r = a(n(5649)),
        i = n(184),
        l = (0, r.default)(
          (0, i.jsx)('path', {
            d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
          }),
          'Save'
        );
      t.Z = l;
    },
    8673: (e, t, n) => {
      n.d(t, { Z: () => s });
      Math.pow(10, 8);
      var a = 6e4,
        r = 36e5,
        i = n(4522),
        l = n(9297);
      function s(e, t) {
        (0, i.Z)(1, arguments);
        var n = t || {},
          s = null == n.additionalDigits ? 2 : (0, l.Z)(n.additionalDigits);
        if (2 !== s && 1 !== s && 0 !== s)
          throw new RangeError('additionalDigits must be 0, 1 or 2');
        if (
          'string' !== typeof e &&
          '[object String]' !== Object.prototype.toString.call(e)
        )
          return new Date(NaN);
        var p,
          f = (function (e) {
            var t,
              n = {},
              a = e.split(o.dateTimeDelimiter);
            if (a.length > 2) return n;
            /:/.test(a[0])
              ? (t = a[0])
              : ((n.date = a[0]),
                (t = a[1]),
                o.timeZoneDelimiter.test(n.date) &&
                  ((n.date = e.split(o.timeZoneDelimiter)[0]),
                  (t = e.substr(n.date.length, e.length))));
            if (t) {
              var r = o.timezone.exec(t);
              r
                ? ((n.time = t.replace(r[1], '')), (n.timezone = r[1]))
                : (n.time = t);
            }
            return n;
          })(e);
        if (f.date) {
          var v = (function (e, t) {
            var n = new RegExp(
                '^(?:(\\d{4}|[+-]\\d{' +
                  (4 + t) +
                  '})|(\\d{2}|[+-]\\d{' +
                  (2 + t) +
                  '})$)'
              ),
              a = e.match(n);
            if (!a) return { year: NaN, restDateString: '' };
            var r = a[1] ? parseInt(a[1]) : null,
              i = a[2] ? parseInt(a[2]) : null;
            return {
              year: null === i ? r : 100 * i,
              restDateString: e.slice((a[1] || a[2]).length)
            };
          })(f.date, s);
          p = (function (e, t) {
            if (null === t) return new Date(NaN);
            var n = e.match(d);
            if (!n) return new Date(NaN);
            var a = !!n[4],
              r = m(n[1]),
              i = m(n[2]) - 1,
              l = m(n[3]),
              s = m(n[4]),
              o = m(n[5]) - 1;
            if (a)
              return (function (e, t, n) {
                return t >= 1 && t <= 53 && n >= 0 && n <= 6;
              })(0, s, o)
                ? (function (e, t, n) {
                    var a = new Date(0);
                    a.setUTCFullYear(e, 0, 4);
                    var r = a.getUTCDay() || 7,
                      i = 7 * (t - 1) + n + 1 - r;
                    return a.setUTCDate(a.getUTCDate() + i), a;
                  })(t, s, o)
                : new Date(NaN);
            var c = new Date(0);
            return (function (e, t, n) {
              return (
                t >= 0 && t <= 11 && n >= 1 && n <= (g[t] || (x(e) ? 29 : 28))
              );
            })(t, i, l) &&
              (function (e, t) {
                return t >= 1 && t <= (x(e) ? 366 : 365);
              })(t, r)
              ? (c.setUTCFullYear(t, i, Math.max(r, l)), c)
              : new Date(NaN);
          })(v.restDateString, v.year);
        }
        if (!p || isNaN(p.getTime())) return new Date(NaN);
        var j,
          b = p.getTime(),
          Z = 0;
        if (
          f.time &&
          ((Z = (function (e) {
            var t = e.match(c);
            if (!t) return NaN;
            var n = h(t[1]),
              i = h(t[2]),
              l = h(t[3]);
            if (
              !(function (e, t, n) {
                if (24 === e) return 0 === t && 0 === n;
                return n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
              })(n, i, l)
            )
              return NaN;
            return n * r + i * a + 1e3 * l;
          })(f.time)),
          isNaN(Z))
        )
          return new Date(NaN);
        if (!f.timezone) {
          var y = new Date(b + Z),
            C = new Date(0);
          return (
            C.setFullYear(y.getUTCFullYear(), y.getUTCMonth(), y.getUTCDate()),
            C.setHours(
              y.getUTCHours(),
              y.getUTCMinutes(),
              y.getUTCSeconds(),
              y.getUTCMilliseconds()
            ),
            C
          );
        }
        return (
          (j = (function (e) {
            if ('Z' === e) return 0;
            var t = e.match(u);
            if (!t) return 0;
            var n = '+' === t[1] ? -1 : 1,
              i = parseInt(t[2]),
              l = (t[3] && parseInt(t[3])) || 0;
            if (
              !(function (e, t) {
                return t >= 0 && t <= 59;
              })(0, l)
            )
              return NaN;
            return n * (i * r + l * a);
          })(f.timezone)),
          isNaN(j) ? new Date(NaN) : new Date(b + Z + j)
        );
      }
      var o = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        },
        d = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        c =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        u = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function m(e) {
        return e ? parseInt(e) : 1;
      }
      function h(e) {
        return (e && parseFloat(e.replace(',', '.'))) || 0;
      }
      var g = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function x(e) {
        return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
      }
    }
  }
]);
//# sourceMappingURL=428.1b53f8c3.chunk.js.map
