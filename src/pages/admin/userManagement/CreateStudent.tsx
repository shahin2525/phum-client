import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Controller, FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../redux/feature/admin/academicManagement.api";
import { useCreateStudentMutation } from "../../../redux/feature/admin/userManagement.api";

const CreateStudent = () => {
  const [addStudent, { data, error }] = useCreateStudentMutation();
  console.log(data, error);
  const { data: sData, isLoading: sIsLoading } =
    useGetAllAcademicSemesterQuery(undefined);
  const { data: dData } = useGetAllAcademicDepartmentQuery(undefined, {
    skip: sIsLoading,
  });
  // console.log(data?.data);

  const semesterOptions = sData?.data?.map((semester) => ({
    value: semester._id,
    label: `${semester.name} ${semester.year}`,
  }));
  const departmentOptions = dData?.data?.map((department) => ({
    value: department._id,
    label: `${department.name}`,
  }));
  const studentDummyData = {
    // personal
    password: "student123",
    student: {
      name: {
        firstName: "I am ",
        middleName: "Student",
        lastName: "Number 1",
      },
      gender: "male",
      dateOfBirth: "1990-01-01",
      bloogGroup: "A+",
      // contact info
      email: "student2@gmail.com",
      contactNo: "1235678",
      emergencyContactNo: "987-654-3210",

      presentAddress: "123 Main St, Cityville",
      permanentAddress: "456 Oak St, Townsville",
      // guardian info
      guardian: {
        fatherName: "James Doe",
        fatherOccupation: "Engineer",
        fatherContactNo: "111-222-3333",
        motherName: "Mary Doe",
        motherOccupation: "Teacher",
        motherContactNo: "444-555-6666",
      },

      // local guardian info
      localGuardian: {
        name: "Alice Johnson",
        occupation: "Doctor",
        contactNo: "777-888-9999",
        address: "789 Pine St, Villageton",
      },
      // academic info
      admissionSemester: "65b0104110b74fcbd7a25d92",
      academicDepartment: "65b00fb010b74fcbd7a25d8e",
    },
  };
  const defaultStudentData = {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    // dateOfBirth: "1990-01-01",
    bloogGroup: "A+",
    // contact info
    email: "student4@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",

    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    // guardian info
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },

    // local guardian info
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    // academic info
    // admissionSemester: "65b0104110b74fcbd7a25d92",
    // academicDepartment: "65b00fb010b74fcbd7a25d8e",
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const studentData = {
      password: "programming1234",
      student: data,
    };
    // console.log(studentData);
    const formData = new FormData();

    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data?.profileImg);
    // profileImg

    addStudent(formData);
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultStudentData}>
          <Divider>Personal info</Divider>
          <Row gutter={4}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="FirstName" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect name="gender" label="Gender" options={genderOptions} />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <PHInput type="text" name="dateOfBirth" label="DateOfBirth" /> */}
              <PHDatePicker name="dateOfBirth" label="Data Of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloogGroup"
                label="BloodGroup"
                options={bloodGroupOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="profileImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item>
                    <Input
                      type="file"
                      {...field}
                      value={value?.fileName}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
          </Row>

          <Divider>contact info</Divider>
          <Row gutter={4}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="contactNo" label="Contact" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label=" EmergencyContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label=" PresentAddress"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label=" PermanentAddress"
              />
            </Col>
          </Row>

          <Divider>guardian info</Divider>
          <Row gutter={4}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="FatherContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="MotherName"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="MotherOccupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="MotherContactNo"
              />
            </Col>
          </Row>
          <Divider>Local Guardian</Divider>
          <Row gutter={6}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="ContactNo"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="address"
              />
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={6}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={semesterOptions}
                name="admissionSemester"
                label="Admission Semester"
                disabled={sIsLoading}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                name="academicDepartment"
                label="Academic Department"
                disabled={sIsLoading}
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
