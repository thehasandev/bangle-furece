import React from 'react'
import EquipimentBanner from '../SequrityEquipiment/EquipimentBanner'
import EqupimentContant from '../SequrityEquipiment/EqupimentContant'
import EqupimentCard from '../SequrityEquipiment/EqupimentCard'
import EqupimentContantTwo from '../SequrityEquipiment/EqupimentContantTwo'

function SequrityEquipiment() {
  return (
    <div>
        <EquipimentBanner/>
        <div className='px-5 xl:px-0'>
             <EqupimentContant/>
             <EqupimentCard/>
             <EqupimentContantTwo/>
        </div>
    </div>
  )
}

export default SequrityEquipiment