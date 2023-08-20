export interface IOffice {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  logo: string;
  thirdColor: string;
  secondaryColor: string;
  primaryColor: string;
  bgSecondaryColor: string;
  bgPrimaryColor: string;
  primaryFont: string;
  status: boolean;
  createdDate: Date | null;
  modifiedDate: Date | null;
  slug: string | null;
}
