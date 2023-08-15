import { Card, Container, Grid } from '@mui/material';
import { ReactNode, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Breadcrumbs } from '../Breadcrumbs/type';
import PageHeader from './PageHeader';
import Table from './Table';
import { PaginationAndSort, TableBody, TableHeader } from './tableType';

interface TableProps<D, P> {
  title: string;
  data: D[];
  tableHeader?: TableHeader[];
  headerTitle?: string;
  headerSubtitle?: string;
  isLoading?: boolean;
  breadcrumbs?: Breadcrumbs[];
  pagination?: P;
  tableFilter?: ReactNode[];
  extraOptions?: ReactNode[];
  totalItems?: number;
  onPagination?: (value) => void;
  onUpdate?: (value: string | number) => void;
  onDelete?: (value: string | number) => void;
  onOpenModal?: () => void;
  tableBody?: (item: TableBody[]) => TableBody[];
}

const TableComponent = ({
  title,
  data = [],
  tableHeader = [
    {
      align: 'inherit',
      title: 'Title'
    }
  ],
  headerTitle = '',
  headerSubtitle = '',
  isLoading = false,
  breadcrumbs,
  pagination,
  tableFilter,
  totalItems,
  extraOptions,
  onOpenModal,
  tableBody,
  onDelete,
  onUpdate,
  onPagination
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
TableProps<any, PaginationAndSort>): JSX.Element => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageTitleWrapper>
      <PageHeader
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        onOpenModal={onOpenModal}
        breadcrumbs={breadcrumbs}
      />
    </PageTitleWrapper>
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Card>
            <Table
              data={data}
              totalItems={totalItems}
              tableHeader={tableHeader}
              tableBody={tableBody}
              isLoading={isLoading}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onPagination={onPagination}
              pagination={pagination}
              tableFilter={tableFilter}
              extraOptions={extraOptions}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </>
);

export default memo(TableComponent);
