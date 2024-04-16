import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PageProp = {
  page: number;
  totalProducts: number;
  totalProductsPerPage: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToPage: (pageNumber: number) => void;
};

const PaginationWrapper = ({
  page,
  onNext,
  onPrev,
  onGoToPage,
  totalProducts,
  totalProductsPerPage,
}: PageProp) => {
  const pagesCount = Math.ceil(totalProducts / totalProductsPerPage);

  const isPrevDisabled = page === 1;
  const isNextDisabled = page === pagesCount;

  const renderPageNumbers = () => {
    const maxPagesToShow = 3;
    const pageNumbers = [];
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    //This block of code is to place the initial pagination correctly
    if (startPage > 2 && endPage === pagesCount) {
      pageNumbers.push(
        <PaginationItem key='startEllipsis'>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={i === page} onClick={() => onGoToPage(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (pagesCount > endPage) {
      pageNumbers.push(
        <PaginationItem key='ellipsis'>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={onPrev}
              aria-disabled={isPrevDisabled}
              className='cursor-pointer'
            />
          </PaginationItem>
          {renderPageNumbers()}

          {!isNextDisabled && (
            <>
              <PaginationItem>
                <PaginationNext onClick={onNext} className='cursor-pointer' />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationWrapper;
