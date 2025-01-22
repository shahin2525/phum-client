import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;
const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemesterQuery([
    { name: "year", value: "2025" },
  ]);
  console.log("academic semester", semesterData);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",

      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "StartMonth",
      dataIndex: "startMonth",
    },
    {
      title: "EndMonth",
      dataIndex: "endMonth",
    },
  ];

  const tableData = semesterData?.data!.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
