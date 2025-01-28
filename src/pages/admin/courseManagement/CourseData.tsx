import { Button, Modal, Table, TableColumnsType } from "antd";

import { TCourse } from "../../../types/courseManagement.type";

import { useGetAllCourseQuery } from "../../../redux/feature/admin/courseManagement.api";
import { useState } from "react";

// export type TTableData = Pick<TCourse, "code" | "title">;
const CourseData = () => {
  const { data: courseData, isFetching } = useGetAllCourseQuery(undefined);
  //: TableColumnsType<TTableData>
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
        return <HandleFacultyModal data={item} />;
      },
      width: "1%",
    },

    //
  ];

  const tableData = courseData?.data?.map(({ _id, code, title }) => ({
    key: _id,
    title: title,

    code: code,
  }));

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
    </>
  );
};

const HandleFacultyModal = ({ data }) => {
  console.log(data.key);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CourseData;
