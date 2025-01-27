import {
  Button,
  Dropdown,
  MenuProps,
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
import { FieldValues } from "react-hook-form";

export type TTableData = Pick<
  TSemesterRegistration,
  "status" | "startDate" | "endDate"
>;
const RegisterSemesterData = () => {
  const { data: registerSemesterData, isFetching } =
    useGetAllSemesterRegistrationQuery(undefined);
  //   const metaData = studentData?.mete;

  console.log(registerSemesterData);
  //   "UPCOMING", "ONGOING", "ENDED"
  const items: MenuProps["items"] = [
    {
      key: "UPCOMING",
      label: "UPCOMING",
    },
    {
      key: "ONGOING",
      label: "ONGOING",
    },
    {
      key: "ENDED",
      label: "ENDED",
    },
  ];
  const handleStatusDropdown = (data: FieldValues) => {
    console.log(data);
  };

  const menuProps = {
    items,
    onClick: handleStatusDropdown,
  };
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
          <Dropdown menu={menuProps}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Button>update</Button>
              </Space>
            </a>
          </Dropdown>
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

  //   const onChange: TableProps<TTableData>["onChange"] = (
  //     pagination,
  //     filters,
  //     sorter,
  //     extra
  //   ) => {
  //     const queryParams: TQueryParam[] = [];
  //     if (extra.action === "filter") {
  //       filters.name?.forEach((item) =>
  //         queryParams.push({ name: "name", value: item })
  //       );
  //       filters.year?.forEach((item) =>
  //         queryParams.push({ name: "year", value: item })
  //       );
  //     }

  //     // setParams(queryParams);
  //   };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
        // showSorterTooltip={{ target: "sorter-icon" }}
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
