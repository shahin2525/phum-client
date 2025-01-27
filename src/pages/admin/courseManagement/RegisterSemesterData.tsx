import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";

import { TQueryParam } from "../../../types";

import { useGetAllSemesterRegistrationQuery } from "../../../redux/feature/admin/courseManagement.api";
import { TSemesterRegistration } from "../../../types/courseManagement.type";
import moment from "moment";

export type TTableData = Pick<
  TSemesterRegistration,
  "status" | "startDate" | "endDate"
>;
const RegisterSemesterData = () => {
  const { data: registerSemesterData, isFetching } =
    useGetAllSemesterRegistrationQuery(undefined);
  //   const metaData = studentData?.mete;

  console.log(registerSemesterData);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      //   "UPCOMING", "ONGOING", "ENDED"

      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "green";
        }
        if (item === "ONGOING") {
          color = "yellow";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Data",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",

      key: "x",
      render: () => {
        return (
          <Space>
            <Button>update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const tableData = registerSemesterData?.data?.map(
    ({ _id, academicSemester, status, endDate, startDate }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,

      status,
      endDate: moment(new Date(endDate)).format("MMMM"),
      startDate: moment(new Date(startDate)).format("MMMM"),
    })
  );

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    const queryParams: TQueryParam[] = [];
    if (extra.action === "filter") {
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
    }

    // setParams(queryParams);
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      {/* <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      /> */}
    </>
  );
};

export default RegisterSemesterData;
