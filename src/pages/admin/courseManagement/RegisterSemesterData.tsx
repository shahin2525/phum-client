import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";

import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/feature/admin/userManagement.api";
import { Link } from "react-router-dom";
import { useGetAllSemesterRegistrationQuery } from "../../../redux/feature/admin/courseManagement.api";
import { TSemesterRegistration } from "../../../types/courseManagement.type";
// import { TStudent } from "../../../types/userManagement.type";
export type TTableData = Pick<
  TSemesterRegistration,
  "academicSemester" | "status" | "startDate" | "endDate"
>;
const RegisterSemesterData = () => {
  //   const [params, setParams] = useState<TQueryParam[]>([]);
  //   const [page, setPage] = useState(1);
  //   const { data: registerSemesterData, isFetching } = useGetAllStudentsQuery([
  //     { name: "page", value: page },
  //     { name: "sort", value: "id" },
  //     // { name: "limit", value: "3" },
  //     ...params,
  //   ]);
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
      endDate,
      startDate,
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
