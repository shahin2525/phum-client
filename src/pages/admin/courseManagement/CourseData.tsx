import { Button, Modal, Table, TableColumnsType } from "antd";

import { TCourse } from "../../../types/courseManagement.type";

import {
  useAddFacultiesMutation,
  useCreateCourseFacultyMutation,
  useGetAllCourseQuery,
} from "../../../redux/feature/admin/courseManagement.api";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/userManagement.api";

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
        return <HandleFacultyModal facultyInfo={item} />;
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

const HandleFacultyModal = ({ facultyInfo }) => {
  // console.log(facultyInfo.key);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultyData } = useGetAllFacultyQuery(undefined);
  const [addFaculty] = useAddFacultiesMutation();

  const facultyOptions = facultyData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  // console.log("faculty", facultyData);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (data) => {
    console.log(data);
    // const courseFaculty = {
    //   courseId: facultyInfo?.key,
    //   data,
    // };
    // console.log(courseFaculty);
    // addFaculty(courseFaculty);
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };

    console.log(facultyData);

    addFaculty(facultyData);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Faculty
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            options={facultyOptions}
            mode="multiple"
            label="Faculties"
            name="faculties"
          />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default CourseData;
