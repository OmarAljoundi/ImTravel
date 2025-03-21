import { QueryOfficeSchema, QueryTourSchema } from "@/schema";
import {
  Paragraph,
  Document,
  Packer,
  TextRun,
  AlignmentType,
  HeadingLevel,
  ImageRun,
  PageBorderDisplay,
  PageBorderOffsetFrom,
  PageBorderZOrder,
  NumberFormat,
  PageNumberSeparator,
} from "docx";
import { saveAs } from "file-saver";

export const generate = async (
  tour: QueryTourSchema,
  office: QueryOfficeSchema
) => {
  const createStories = (): Paragraph[] => {
    const p: Paragraph[] = [];
    p.push(createSubHeading("يوميات البرنامج"));
    tour.tourSections?.map((i) => {
      p.push(
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({
              text: i.title,
              bold: true,
              size: 32,
              rightToLeft: true,
              break: 1,
              font: {
                name: "Segoe UI",
              },
            }),
            new TextRun({
              text: i.description,
              bold: false,
              size: 28,
              rightToLeft: true,
              break: 2,
              font: {
                name: "Segoe UI",
              },
            }),
          ],
        })
      );
    });

    return p;
  };
  const createSubHeading = (text: string): Paragraph => {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      alignment: AlignmentType.RIGHT,
      thematicBreak: true,
      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 42,
          color: office.primaryColor ?? "",
          font: {
            name: "Segoe UI",
          },
          rightToLeft: true,
          break: 2,
        }),
      ],
    });
  };
  const createHeading = (text: string): Paragraph => {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        beforeAutoSpacing: false,
        before: 0,
      },
      children: [
        new TextRun({
          text,
          bold: true,
          color: office?.primaryColor ?? "",
          size: 48,
          font: {
            name: "Segoe UI",
          },
          language: {
            value: "Arabic",
          },
        }),
      ],
    });
  };
  const createBullet = (text: string, text2?: string): Paragraph => {
    const x = new Paragraph({
      alignment: AlignmentType.RIGHT,

      children: [
        new TextRun({
          text: text,
          bold: true,
          size: 32,
          rightToLeft: true,
          break: 1,
          font: {
            name: "Segoe UI",
          },
        }),
      ],
    });
    if (text2) {
      x.addChildElement(
        new TextRun({
          text: text2,
          bold: false,
          size: 28,
          rightToLeft: true,
          break: 2,
          font: {
            name: "Segoe UI",
          },
        })
      );
    }
    return x;
  };

  const createTourIncludes = (): Paragraph[] => {
    const p: Paragraph[] = [];
    p.push(createSubHeading("ما يشمله البرنامج"));
    tour.tourIncludes?.map((i) => {
      p.push(createBullet(i.title, i.description.replaceAll(",", " ، ")));
    });
    return p;
  };
  const createTourExcludes = (): Paragraph[] => {
    const p: Paragraph[] = [];
    p.push(createSubHeading("ما لا يشمله البرنامج"));
    tour.tourExcludes?.map((i) => {
      p.push(createBullet(i.title, i.description.replaceAll(",", " ، ")));
    });
    return p;
  };

  const createTourInfo = (): Paragraph => {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 100,
        afterAutoSpacing: false,
        before: 500,
        beforeAutoSpacing: false,
      },
      style: "Intense Quote",
      shading: {
        fill: office.primaryColor ?? "",
      },
      children: [
        new TextRun({
          text: `مدة الرحلة: ${tour.numberOfDays}`,
          font: {
            name: "Segoe UI",
          },
          break: 0,
          color: "#ffffff",
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
        new TextRun({
          text: ` - الدول: ${tour.tourCountries?.join(" ، ")}`,
          font: {
            name: "Segoe UI",
          },

          break: 0,
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
          color: "#ffffff",
        }),
        new TextRun({
          text: ` - رمز الرحلة: ${tour.code}`,
          font: {
            name: "Segoe UI",
          },
          color: "#ffffff",
          break: 0,

          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
        new TextRun({
          text: ` - أيام الرحلة: ${tour.startDay?.join(" ، ")}`,
          font: {
            name: "Segoe UI",
          },

          color: "#ffffff",
          break: 0,
          size: 24,
          bold: true,
          language: {
            value: "Arabic",
          },
        }),
      ],
    });
  };

  const convertToBase64 = async () => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (result) {
          resolve(result);
        } else {
          reject(new Error("Failed to read the image as Base64."));
        }
      };

      fetch(office.logo ?? "", {
        headers: { "Cache-Control": "no-cache" },
        next: {
          revalidate: 0,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch the image. Status: ${response.status}`
            );
          }
          return response.blob();
        })
        .then((blob) => {
          reader.readAsDataURL(blob);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const createLogo = async (): Promise<Paragraph> => {
    try {
      const result = (await convertToBase64()) as string;
      const extension = getImageExtension(office.logo ?? "");
      return new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            data: Uint8Array.from(
              atob(result.replace(`data:image/${extension};base64,`, "")),
              (c) => c.charCodeAt(0)
            ),
            transformation: {
              width: 100,
              height: 100,
            },
            type: "png",
          }),
        ],
      });
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const createHotelInfo = (): Paragraph[] => {
    const p: Paragraph[] = [];
    p.push(createSubHeading("الفنادق"));
    tour.tourHotels?.map((i) => {
      p.push(
        new Paragraph({
          alignment: AlignmentType.LEFT,
          bullet: {
            level: 0,
          },
          children: [
            new TextRun({
              text: i,
              bold: true,
              size: 24,
              rightToLeft: true,
              break: 0,
            }),
          ],
        })
      );
    });
    return p;
  };

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            borders: {
              pageBorders: {
                display: PageBorderDisplay.ALL_PAGES,
                offsetFrom: PageBorderOffsetFrom.PAGE,
                zOrder: PageBorderZOrder.BACK,
              },
            },
            pageNumbers: {
              formatType: NumberFormat.BULLET,
              separator: PageNumberSeparator.EN_DASH,
              start: 1,
            },
          },
        },

        children: [
          await createLogo(),
          createHeading(tour.name!),
          createTourInfo(),
          ...createStories(),
          ...createTourIncludes(),
          ...createTourExcludes(),
          ...createHotelInfo(),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${tour.name}.docx`);
    console.log("Document created successfully");
  });
};

function getImageExtension(url: string): string | null {
  // Split the URL by the period (.) to isolate the last part of the URL
  const parts = url.split(".");

  // The image extension is the last part of the URL
  const extension = parts[parts.length - 1];

  return extension.toLowerCase(); // Convert to lowercase for consistency
}
