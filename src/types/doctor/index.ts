export interface IDoctor {
  id: string;
  name: string;
  email: string;
  profilePhoto?: string;
  contactNumber: string;
  address?: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: "male" | "female";
  appointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  averageRating: number;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  specialties?: ISpecialties[];
}
export interface ISpecialties {
  specialtiesId: string;
  isDeleted?: boolean;
}
export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
