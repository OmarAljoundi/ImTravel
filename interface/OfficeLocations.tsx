export interface IOfficeLocations {
  id: number;
  officeId: number;
  tourIds: string;
  name: string;
  imageUrl: string;
  imageSize: number;
  seoTitle: string;
  active: boolean;
  seoDescription: string;
  seoTag: string;
  createdDate: Date | null;
}
