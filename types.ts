export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Customer: {
        Row: {
          assignedTo: string | null
          contactMethod: string | null
          createdDate: string | null
          email: string | null
          id: number
          modifiedDate: string | null
          name: string | null
          notes: string | null
          phoneNumber: string | null
          status: number | null
          tourId: string | null
        }
        Insert: {
          assignedTo?: string | null
          contactMethod?: string | null
          createdDate?: string | null
          email?: string | null
          id?: number
          modifiedDate?: string | null
          name?: string | null
          notes?: string | null
          phoneNumber?: string | null
          status?: number | null
          tourId?: string | null
        }
        Update: {
          assignedTo?: string | null
          contactMethod?: string | null
          createdDate?: string | null
          email?: string | null
          id?: number
          modifiedDate?: string | null
          name?: string | null
          notes?: string | null
          phoneNumber?: string | null
          status?: number | null
          tourId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Customer_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      Employee: {
        Row: {
          id: string
          role: number | null
          userId: string | null
          username: string | null
        }
        Insert: {
          id?: string
          role?: number | null
          userId?: string | null
          username?: string | null
        }
        Update: {
          id?: string
          role?: number | null
          userId?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Employee_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Location: {
        Row: {
          active: boolean | null
          activeBusiness: boolean | null
          createdDate: string | null
          id: number
          imageSize: number | null
          imageSizeBusiness: number | null
          imageUrl: string | null
          imageUrlBusiness: string | null
          name: string | null
          nameBusiness: string | null
          seoAlt: string | null
          seoDescription: string | null
          seoTags: string | null
          seoTitle: string | null
          sortOrder: number | null
        }
        Insert: {
          active?: boolean | null
          activeBusiness?: boolean | null
          createdDate?: string | null
          id?: number
          imageSize?: number | null
          imageSizeBusiness?: number | null
          imageUrl?: string | null
          imageUrlBusiness?: string | null
          name?: string | null
          nameBusiness?: string | null
          seoAlt?: string | null
          seoDescription?: string | null
          seoTags?: string | null
          seoTitle?: string | null
          sortOrder?: number | null
        }
        Update: {
          active?: boolean | null
          activeBusiness?: boolean | null
          createdDate?: string | null
          id?: number
          imageSize?: number | null
          imageSizeBusiness?: number | null
          imageUrl?: string | null
          imageUrlBusiness?: string | null
          name?: string | null
          nameBusiness?: string | null
          seoAlt?: string | null
          seoDescription?: string | null
          seoTags?: string | null
          seoTitle?: string | null
          sortOrder?: number | null
        }
        Relationships: []
      }
      LocationTours: {
        Row: {
          id: number
          locationId: number | null
          tab: number | null
          title: string | null
          tourIds: string | null
        }
        Insert: {
          id?: number
          locationId?: number | null
          tab?: number | null
          title?: string | null
          tourIds?: string | null
        }
        Update: {
          id?: number
          locationId?: number | null
          tab?: number | null
          title?: string | null
          tourIds?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "LocationTours_locationId_fkey"
            columns: ["locationId"]
            referencedRelation: "Location"
            referencedColumns: ["id"]
          }
        ]
      }
      Office: {
        Row: {
          address: string | null
          bgPrimaryColor: string | null
          bgSecondaryColor: string | null
          contactNumber: string | null
          createdDate: string | null
          email: string | null
          id: number
          logo: string | null
          modifiedDate: string | null
          name: string | null
          primaryColor: string | null
          primaryFont: string | null
          secondaryColor: string | null
          slug: string | null
          status: boolean | null
          thirdColor: string | null
        }
        Insert: {
          address?: string | null
          bgPrimaryColor?: string | null
          bgSecondaryColor?: string | null
          contactNumber?: string | null
          createdDate?: string | null
          email?: string | null
          id?: number
          logo?: string | null
          modifiedDate?: string | null
          name?: string | null
          primaryColor?: string | null
          primaryFont?: string | null
          secondaryColor?: string | null
          slug?: string | null
          status?: boolean | null
          thirdColor?: string | null
        }
        Update: {
          address?: string | null
          bgPrimaryColor?: string | null
          bgSecondaryColor?: string | null
          contactNumber?: string | null
          createdDate?: string | null
          email?: string | null
          id?: number
          logo?: string | null
          modifiedDate?: string | null
          name?: string | null
          primaryColor?: string | null
          primaryFont?: string | null
          secondaryColor?: string | null
          slug?: string | null
          status?: boolean | null
          thirdColor?: string | null
        }
        Relationships: []
      }
      Tour: {
        Row: {
          active: boolean | null
          additionalInfo: string | null
          code: string | null
          createdDate: string | null
          hotels: string | null
          id: string
          imageUrl: string | null
          name: string | null
          numberOfDays: number | null
          price: number | null
          seoAlt: string | null
          seoDescription: string | null
          seoTag: string | null
          seoTitle: string | null
          startDay: string | null
          typeId: number | null
        }
        Insert: {
          active?: boolean | null
          additionalInfo?: string | null
          code?: string | null
          createdDate?: string | null
          hotels?: string | null
          id?: string
          imageUrl?: string | null
          name?: string | null
          numberOfDays?: number | null
          price?: number | null
          seoAlt?: string | null
          seoDescription?: string | null
          seoTag?: string | null
          seoTitle?: string | null
          startDay?: string | null
          typeId?: number | null
        }
        Update: {
          active?: boolean | null
          additionalInfo?: string | null
          code?: string | null
          createdDate?: string | null
          hotels?: string | null
          id?: string
          imageUrl?: string | null
          name?: string | null
          numberOfDays?: number | null
          price?: number | null
          seoAlt?: string | null
          seoDescription?: string | null
          seoTag?: string | null
          seoTitle?: string | null
          startDay?: string | null
          typeId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Tour_typeId_fkey"
            columns: ["typeId"]
            referencedRelation: "TourType"
            referencedColumns: ["id"]
          }
        ]
      }
      TourCountries: {
        Row: {
          icon: string | null
          id: number
          label: string | null
          tourId: string
        }
        Insert: {
          icon?: string | null
          id?: number
          label?: string | null
          tourId: string
        }
        Update: {
          icon?: string | null
          id?: number
          label?: string | null
          tourId?: string
        }
        Relationships: [
          {
            foreignKeyName: "TourCountries_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      TourExcludes: {
        Row: {
          details: string | null
          id: number
          title: string | null
          tourId: string
        }
        Insert: {
          details?: string | null
          id?: number
          title?: string | null
          tourId: string
        }
        Update: {
          details?: string | null
          id?: number
          title?: string | null
          tourId?: string
        }
        Relationships: [
          {
            foreignKeyName: "TourExcludes_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      TourIncludes: {
        Row: {
          details: string | null
          id: number
          title: string | null
          tourId: string
        }
        Insert: {
          details?: string | null
          id?: number
          title?: string | null
          tourId: string
        }
        Update: {
          details?: string | null
          id?: number
          title?: string | null
          tourId?: string
        }
        Relationships: [
          {
            foreignKeyName: "TourIncludes_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      TourPricing: {
        Row: {
          allMonth: boolean | null
          balconyRoom: number | null
          id: number
          innerRoom: number | null
          seeView: number | null
          singlePrice: number | null
          singular: boolean | null
          tourDate: string | null
          tourId: string | null
        }
        Insert: {
          allMonth?: boolean | null
          balconyRoom?: number | null
          id?: number
          innerRoom?: number | null
          seeView?: number | null
          singlePrice?: number | null
          singular?: boolean | null
          tourDate?: string | null
          tourId?: string | null
        }
        Update: {
          allMonth?: boolean | null
          balconyRoom?: number | null
          id?: number
          innerRoom?: number | null
          seeView?: number | null
          singlePrice?: number | null
          singular?: boolean | null
          tourDate?: string | null
          tourId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TourPricing_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      TourSections: {
        Row: {
          description: string | null
          id: number
          title: string | null
          tourId: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          title?: string | null
          tourId?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          title?: string | null
          tourId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TourSections_tourId_fkey"
            columns: ["tourId"]
            referencedRelation: "Tour"
            referencedColumns: ["id"]
          }
        ]
      }
      TourType: {
        Row: {
          id: number
          image: string | null
          type: string | null
        }
        Insert: {
          id?: number
          image?: string | null
          type?: string | null
        }
        Update: {
          id?: number
          image?: string | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_tour: {
        Args: {
          countries_data: Json
          excludes_data: Json
          includes_data: Json
          pricing_data: Json
          sections_data: Json
          tour_data: Json
        }
        Returns: Json
      }
      updateTour: {
        Args: {
          countries_data: Json
          excludes_data: Json
          includes_data: Json
          pricing_data: Json
          sections_data: Json
          tour_data: Json
          tour_id_param: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
