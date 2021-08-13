import React, { useMemo, useState } from 'react'
import { data } from './data'
import Pagination from './components/Pagination'

let PageSize = 10

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <div className='container mt-5'>
      <h2 className='text-primary text-center my-5'>Pagination Component</h2>
      <table className='table table-success table-striped rounded'>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
