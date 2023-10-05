import React from 'react'
import ContractBanner from '../Contract/ContractBanner'
import ContractContant from '../Contract/ContractContant'

function Contract() {
  return (
    <div>
       <ContractBanner/>
        <div className='px-5 xl:px-0'>
            <ContractContant/>
        </div>
    </div>
  )
}

export default Contract