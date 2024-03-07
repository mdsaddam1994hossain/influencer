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
        <Pagination className='flex justify-center lg:justify-start'>
            <PaginationContent className="gap-3">
                <PaginationItem>
                    <PaginationPrevious onClick={handlePrevPage} className={`text-red-500 border border-red-500 ${currentPage === 1 ? ' border-opacity-50 text-opacity-50 hover:bg-white hover:text-red  ' : 'border-red-500 hover:text-white hover:bg-red-500 cursor-pointer'}`} />
                </PaginationItem>

                {pages.slice(startPage - 1, endPage).map((page) => (
                    <PaginationItem key={page} className={`${currentPage === page ? "bg-red-500 text-white hover:bg-red-500 w-[50px]" : ""} border border-red-500 rounded-md h-[50px] w-[48px] group overflow-hidden cursor-pointer`}>
                        <PaginationLink onClick={() => setCurrentPage(page)} className='hover:bg-red-500 group-hover:border-0 h-12 w-12 rounded-sm hover:text-white'>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext onClick={handleNextPage} className={`text-red-500 border border-red-500 ${currentPage === totalPages ? ' border-opacity-50 text-opacity-50 hover:bg-white hover:text-red  ' : 'border-red-500 hover:text-white hover:bg-red-500 cursor-pointer'}`}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationSection