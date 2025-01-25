import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from "./academicManagement.type";

export interface TStudent {
  id: string;
  user: string;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  admissionSemester: TAcademicSemester;
  isDeleted: boolean;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  _id: string;
  __v: number;
  fullName: string;
}

export interface TName {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface TGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
}

export interface TLocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
}
