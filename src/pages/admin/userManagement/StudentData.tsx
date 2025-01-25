import { Button, Space, Table, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/feature/admin/userManagement.api";
// import { TStudent } from "../../../types/userManagement.type";
export type TTableData = Pick<TStudent, "fullName" | "_id" | "id">;
const StudentData = () => {
  const [param, setParam] = useState<TQueryParam[] | undefined>(undefined);
  const { data: studentData, isFetching } = useGetAllStudentsQuery(param);
  console.log(studentData);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "name",
    },

    {
      title: "roll",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",

      key: "x",
      render: () => {
        return (
          <Space>
            <Button>details</Button>
            <Button>update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

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

    setParam(queryParams);
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default StudentData;
