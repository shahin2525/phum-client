import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import PHInput from "../../../components/form/PHInput";

const CreateOfferedCourse = () => {
  // const [addSemester] = useCreateSemesterMutation();
  const { data: aSemesterData } = useGetAllAcademicSemesterQuery(undefined);
  console.log(aSemesterData);
  const aSemesterOptions = aSemesterData?.data?.map((semester) => ({
    value: semester._id,
    label: semester.name,
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
            label="Name"
            name="name"
            options={aSemesterOptions}
          ></PHSelect>
          <PHInput type="text" name="test" label="test" />
          {/* <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="EndMonth"
            name="endMonth"
            options={monthOptions}
          ></PHSelect> */}
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateOfferedCourse;
