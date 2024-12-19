import ButtonSpinner from "@/components/partials/spinner/ButtonSpinner";
import React from "react";

const LoadMore = ({
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
  result,
  setPage,
  page,
  refView,
  isSearchOrFilter = false,
}) => {
  if (
    result?.count > 0 &&
    (page === result?.total_pages || !hasNextPage) &&
    !isSearchOrFilter
  ) {
    return (
      <>
        {isFetchingNextPage ? (
          <button
            type="button"
            disabled={isFetchingNextPage}
            className="loadmore h-full relative my-8 text-primary p-1.5 rounded-full w-36 
            disabled:opacity-50 disabled:cursor-not-allowed"
          ></button>
        ) : (
          <div className="loadmore my-8 p-1.5 text-center">End Of List</div>
        )}
      </>
    );
  }
  if (!hasNextPage && result?.count > 0 && !isSearchOrFilter) {
    return <div className="my-6 p-1.5">End of List</div>;
  }
  if (hasNextPage) {
    return (
      <>
        <div className="flex justify-center">
          <button
            type="button"
            ref={refView}
            disabled={isFetchingNextPage}
            onClick={() => {
              setPage((prev) => prev + 1);
              fetchNextPage();
            }}
            className="loadmore h-full relative my-8 text-primary p-1.5 rounded-full w-36
          disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFetchingNextPage ? (
              <ButtonSpinner />
            ) : (
              <span className="text-white">Load More</span>
            )}
          </button>
        </div>
      </>
    );
  }
};

export default LoadMore;
