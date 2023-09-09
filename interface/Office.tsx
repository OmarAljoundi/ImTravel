import { IOfficeLocations } from "./OfficeLocations";

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
  tourIds: string;
  totalTours: number;
  minPrice: number;
  maxPrice: number;
  socialMedia: any;
  seoTitle: string;
  seoDescription: string;
  seoTags: string;
  officeLocations: IOfficeLocations[];
}
