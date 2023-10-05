import React from 'react'
import Container from '../Common/Container'

import EquipimentItemCard from './EquipimentItemCard'

// import EqupimentFive from "../../assets/equpimentFive.jpg"
// import EqupimentSix from "../../assets/equpimentSix.jpg"
// import EqupimentSeven from "../../assets/equpimentSeven.jpg"
// import EqupimentEight from "../../assets/equpimentEight.jpg"
// import EqupimentNine from "../../assets/equpimentNine.jpg"

function EqupimentContantTwo() {
  return (
   <section>
    <Container>
       <div className='mt-16'>
            <EquipimentItemCard Heading="5. Security Guard Boots" paragaraph="A good quality pair of safety officer boots is critical.Most safety officers I’ve addressed say that a decent pair of boots can have the effect between returning home with sore legs and a sore back, and returning home agreeable with practically no throbbing painfulness." src="https://i.ibb.co/LxLjT30/equpiment-Five.jpg" alt="EqupimentFive"/>
            <EquipimentItemCard Heading="6. Cell Phone" paragaraph="All safety officers should convey a cell. Albeit a significant part of the correspondence, you will do as a security officer might be through a walkie-talkie or other radio-type gadget, a mobile phone will empower you to rapidly call the legitimate specialists or local group of fire-fighters when needed to." src="https://i.ibb.co/KD0kxTL/equpiment-Six.jpg" alt="EqupimentSix"/>
            <EquipimentItemCard Heading="7. Heated Vest" paragaraph="Numerous security guards work in colder environments where it very well may be awkward to work and capacity appropriately. Regardless of whether you live in a hotter environment, you might have to work around evening time now and again where the temperature can drop definitely and make you freeze.A warmed vest can deal with this for yourself and keep you agreeable and zeroed in even on the coldest of evenings." src="https://i.ibb.co/hRFmvSQ/equpiment-Seven.jpg" alt="EqupimentSeven"/>
            <EquipimentItemCard Heading="8. First Aid Kit" paragaraph="A first aid kit pack is ideal for safety officers to have, for themselves’ purposes, however for individuals in and around the area that they are doled out to." src="https://i.ibb.co/sQ4kzC0/equpiment-Eight.jpg"  alt="EqupimentEight"/>
            <EquipimentItemCard Heading="9. Notepad and Pen" paragaraph="A first aid kit pack is ideal for safety officers to have, for themselves’ purposes, however for individuals in and around the area that they are doled out to." src="https://i.ibb.co/FHRSBw4/equpiment-Nine.jpg" alt="EqupimentNine"/>
            
            
        </div>
    </Container>
   </section>
  )
}

export default EqupimentContantTwo