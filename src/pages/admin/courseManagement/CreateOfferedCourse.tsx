import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";

import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicFacultiesQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/feature/admin/academicManagement.api";
import PHInput from "../../../components/form/PHInput";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import PHTimePicker from "../../../components/form/PHTimePicker";
import PHSelect from "../../../components/form/PHSelect";
import { daysOptions } from "../../../constants/global";
import {
  useGetAllCourseQuery,
  useGetAllSemesterRegistrationQuery,
} from "../../../redux/feature/admin/courseManagement.api";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/userManagement.api";

const CreateOfferedCourse = () => {
  const [courseId, setCourseId] = useState(" ");
  console.log(courseId);
  // const [addSemester] = useCreateSemesterMutation();
  const { data: sRegistrationData } =
    useGetAllSemesterRegistrationQuery(undefined);
  console.log(sRegistrationData);
  const { data: aSemesterData } = useGetAllAcademicSemesterQuery(undefined);
  const { data: aFacultyData } = useGetAllAcademicFacultiesQuery(undefined);
  const { data: aDepartmentData } = useGetAllAcademicDepartmentQuery(undefined);
  const { data: faculty } = useGetAllFacultyQuery(undefined);
  const { data: course } = useGetAllCourseQuery(undefined);
  // console.log(aSemesterData);
  const sRegistrationOptions = sRegistrationData?.data?.map((item) => ({
    value: item._id,
    label: `${item.academicSemester?.name} ${item.academicSemester?.year}`,
  }));
  const aSemesterOptions = aSemesterData?.data?.map((semester) => ({
    value: semester._id,
    label: `${semester.name} ${semester.year}`,
  }));
  const aFacultyOptions = aFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const aDepartmentOptions = aDepartmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const facultyOptions = faculty?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));
  const courseOptions = course?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // console.log("data", Number(data.name) - 1);
    // const toastId = toast.loading("creating .....");
    // const name = nameOptions[Number(data?.name) - 1]?.label;
    // const code = nameOptions[Number(data?.name) - 1]?.value;
    // const year = data?.year;
    // const startMonth = data?.startMonth;
    // const endMonth = data?.endMonth;

    // const semesterData = {
    //   name,
    //   code,
    //   year,
    //   startMonth,
    //   endMonth,
    // };
    // try {
    //   const res = (await addSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res?.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("semester create successfully", { id: toastId });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   toast.error("something went wrong", { id: toastId });
    // }

    // console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onsubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            name="semesterRegistration"
            label="Semester Registration"
            options={sRegistrationOptions}
          />
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={aFacultyOptions}
          />
          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={aDepartmentOptions}
          />
          <PHSelectWithWatch
            onValueChange={setCourseId}
            name="course"
            label="Course"
            options={courseOptions}
          />
          <PHSelect
            disabled={!courseId}
            label="Faculty"
            name="faculty"
            options={facultyOptions}
          ></PHSelect>
          <PHInput type="text" name="section" label="Section" />
          <PHInput type="text" name="maxCapacity" label="Max Capacity" />

          <PHSelect name="days" label="Days" options={daysOptions} />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateOfferedCourse;
