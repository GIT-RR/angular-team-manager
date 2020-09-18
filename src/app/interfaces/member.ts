export interface Member {
  id: number;
  email: string;
  name: string;
  gender: string;
  genderDesc?: string;
  role: string;
  roleDesc?: string;
  isActive: boolean;
}
