import React, { FC } from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
    totalItems: number | undefined;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (v: number) => void;
    pageRangeDisplayed: number; // New prop to determine the range of pages to display
}

const PaginationSection: FC<Props> = ({
    totalItems=0,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    pageRangeDisplayed // Default to 10 if not provided
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // Calculate the range of pages to display
    const startPage = Math.max(currentPage - Math.floor(pageRangeDisplayed / 2), 1);
    const endPage = Math.min(startPage + pageRangeDisplayed - 1, totalPages);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } 
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        <Pagination className='flex justify-center lg:justify-start mt-6 lg:mt-12'>
            <PaginationContent className="gap-3">
                <PaginationItem>
                    <PaginationPrevious onClick={handlePrevPage} className={`text-blackDark border border-blackDark ${currentPage === 1 ? ' border-opacity-50 text-opacity-50 hover:bg-white hover:text-red  ' : 'border-blackDark hover:text-white hover:bg-blackDark cursor-pointer'}`} />
                </PaginationItem>

                {pages.slice(startPage - 1, endPage).map((page) => (
                    <PaginationItem key={page} className={`${currentPage === page ? "bg-blackDark text-white hover:bg-blackDark w-[50px]" : ""} border border-blackDark rounded-md h-[50px] w-[48px] group overflow-hidden cursor-pointer`}>
                        <PaginationLink onClick={() => setCurrentPage(page)} className='hover:bg-blackDark group-hover:border-0 h-12 w-12 rounded-sm hover:text-white'>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext onClick={handleNextPage} className={`text-blackDark border border-blackDark ${currentPage === totalPages ? ' border-opacity-50 text-opacity-50 hover:bg-white hover:text-red  ' : 'border-blackDark hover:text-white hover:bg-blackDark cursor-pointer'}`}>
                        next
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationSection