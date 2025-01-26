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
// import { TStudent } from "../../../types/userManagement.type";
export type TTableData = Pick<
  TStudent,
  "fullName" | "id" | "email" | "contactNo"
>;
const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    // { name: "limit", value: "3" },
    ...params,
  ]);
  const metaData = studentData?.mete;

  console.log(studentData);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "name",
    },

    {
      title: "Roll",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Action",

      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
              {" "}
              <Button>details</Button>
            </Link>
            <Button>update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
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

    setParams(queryParams);
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
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
