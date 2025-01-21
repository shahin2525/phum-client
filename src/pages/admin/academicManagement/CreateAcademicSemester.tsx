import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
/*
'Autumn',
  'Summer',
  'Fall',
  ['01', '02', '03'];
*/
const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log("data", Number(data.name) - 1);
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const code = nameOptions[Number(data?.name) - 1]?.value;
    const year = data?.year;

    const semesterData = {
      name,
      code,
      year,
    };
    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onsubmit}>
          <PHSelect label="name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="year" name="year" options={yearOptions}></PHSelect>
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
