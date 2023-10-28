import { FC } from "react";
import { Skeleton } from "../../ui/skeleton";
import { HeartIcon } from "lucide-react";

type LoadingOptions = {
  numberOfCards: number;
};

const TourCardLoading: FC<LoadingOptions> = ({ numberOfCards }) => {
  return (
    <>
      {Array.from(new Array(numberOfCards)).map((i) => (
        <article
          className="col-span-12 md:col-span-6 xl:col-span-4 px-3 xl:px-0"
          key={i}
        >
          <div className="bg-white shadow-xl rounded-2xl p-2">
            <div className="rounded-2xl relative group">
              <div className="property-card__img">
                <Skeleton className="w-full h-[238px] rounded-2xl" />
              </div>

              <Skeleton className="absolute z-10 inline-block text-primary top-4 right-4 rounded-full  p-2.5">
                <HeartIcon />
              </Skeleton>
            </div>
            <div className="p-2 sm:p-4 lg:p-5">
              <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <Skeleton
                      className="inline-block  text-white px-2 py-1 text-[14px] h-7 w-8 rounded-md"
                      key={i}
                    ></Skeleton>
                  ))}
                </div>
              </div>
              <Skeleton className="text-base sm:text-xl font-medium text-neutral-700 mb-4"></Skeleton>
            </div>
            <div className="property-card__body py-0 mx-5">
              <div className=" border-t border-dashed"></div>
            </div>
            <div className="px-2 sm:px-5 pb-5 pt-3">
              <div className="flex flex-wrap justify-between items-center font-naskh">
                <Skeleton className="text-primary text-xl font-medium w-20 h-5"></Skeleton>

                <Skeleton className="w-[100px] h-[20px]"></Skeleton>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default TourCardLoading;
