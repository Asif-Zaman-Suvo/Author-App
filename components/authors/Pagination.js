import React from 'react';

const Pagination = ({infoPerPage,totalData,paginate}) => {
    const pageNumbers=[];

    for (let i=1 ; i<= Math.ceil(totalData/infoPerPage) ; i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className=''>
            <ul className="flex justify-between items-center">
                {
                    pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <a onClick={()=>paginate(number)} className='page-link cursor-pointer'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    );
};

export default Pagination;