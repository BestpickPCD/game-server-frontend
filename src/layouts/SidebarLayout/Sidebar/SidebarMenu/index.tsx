import { useContext } from 'react';

import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItem,
  ListSubheader,
  alpha,
  styled,
  Link as MUILink
} from '@mui/material';
import { Link, NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import ExtensionIcon from '@mui/icons-material/Extension';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import CurrencyExchange from '@mui/icons-material/AttachMoney';
import TransferWithinAStationOutlined from '@mui/icons-material/CurrencyExchangeOutlined';
import StarTwoTone from '@mui/icons-material/StarTwoTone';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import { useModal } from 'src/utils/hooks';
import { FormattedMessage } from 'react-intl';
const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: 16px 0 0 2px;

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }

        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }

          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

const SidebarMenu = (): JSX.Element => {
  const { closeSidebar } = useContext(SidebarContext);
  const { toggle, visible } = useModal();

  const onClickDeveloper = () => {
    closeSidebar();
  };
  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              <FormattedMessage id="title.dashboard" />
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards"
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  <FormattedMessage id="title.dashboard" />
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <CustomAccordion expanded={!visible}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={toggle}>
            <FormattedMessage id="title.managements" />
          </AccordionSummary>
          <SubMenuWrapper>
            <CustomList>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/users"
                  startIcon={<SupervisedUserCircle />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.users-management" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/agents"
                  startIcon={<SupportAgentRounded />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.agents-management" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/currencies"
                  startIcon={<CurrencyExchange />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.currencies-management" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/vendors"
                  startIcon={<ExtensionIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.vendors-management" />
                </Button>
              </ListItem>
              {/* <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/games"
                  startIcon={<TableChartTwoToneIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Games Management
                </Button>
              </ListItem> */}
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/transactions"
                  startIcon={<TransferWithinAStationOutlined />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.transactions-management" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/betting-history"
                  startIcon={<TransferWithinAStationOutlined />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.betting-history" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/bet-limit"
                  startIcon={<CreditCardOffIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.bet-set" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/roles"
                  startIcon={<StarTwoTone />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  <FormattedMessage id="title.roles-management" />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  startIcon={<LeakAddIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                  to="/management/for-developers"
                  target="blank"
                >
                  <FormattedMessage id="label.for.developers" />
                </Button>
              </ListItem>
            </CustomList>
          </SubMenuWrapper>
        </CustomAccordion>
      </MenuWrapper>
    </>
  );
};

export default SidebarMenu;

const CustomAccordion = styled(Accordion)(
  ({ theme }) => `
  background: transparent;
  .MuiAccordionSummary-root{
    height: 32px;
    max-height: 32px !important;
    min-height: 32px !important;
    color: ${theme.colors.alpha.trueWhite[50]};
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 24.5px !important;
    line-height: 1.4;
  }
  .Mui-expanded{
    margin: 0
  }
  .MuiSvgIcon-root{
    color: rgba(255, 255, 255, 0.7)
  }

`
);
const CustomList = styled(List)(
  () => `
.MuiButton-root {
color: rgba(255, 255, 255, 0.7)
}
`
);
