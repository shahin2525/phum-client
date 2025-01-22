import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemesterQuery(undefined);
  console.log("academic semester", semesterData);

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
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

  const tableData = semesterData?.data.map((item) => ({
    name: item.name,
    year: item.year,
    startMonth: item.startMonth,
    endMonth: item.endMonth,
  }));

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table<DataType>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
