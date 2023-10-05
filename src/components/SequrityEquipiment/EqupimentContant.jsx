import React from 'react'

import Container from '../Common/Container'
import SubHeading from '../Common/SubHeading'
import EquipimentItemCard from './EquipimentItemCard'

// import EqupimentOne from "../../assets/equpimentOne.jpg"
// import EqupimentTwo from "../../assets/equpimentTwo.jpg"
// import EqupimentThree from "../../assets/equpimentThree.jpg"
// import EqupimentFour from "../../assets/equpimentFour.jpg"

function EqupimentContant() {
  return (
    <section>
        <Container>
            <p className='font-roboto font-normal mt-5 text-base  text-[#444444]'>For those who are engaged in security work, some instruments are required to maintain security. These security guard equipment are provided by a security service provider company. These tools are the must-have tools for every security company. In the modern age, it is not possible to maintain security services properly without these tools. </p>
            <p className='font-roboto font-normal mt-5 text-base  text-[#444444]'>These materials are; CC camera, drone, walkie-talkie, metal detector, archway gate, product scanner machine, security searchlight, security flashlight, etc. All security-related instruments, all machinery used in security work are available in the Generation Solution of Security Ltd. Our company provides security services using these security equipment’s. So if you take our service, you don’t have to worry about the safety of your company or factory.</p>
            <SubHeading text="Necessity Of Security Tools For Security Guards"/>
            <p className='font-roboto font-normal mt-5 text-base  text-[#444444]'>Safety officers convey bunches of stuff, and any good safety officer will have the gear needed to ensure themselves as well as the property they are appointed to. Here is a rundown of the main 9 must have security equipment that most security officials will have. Check the list below:</p>
        
        <div className='mt-16'>
            <EquipimentItemCard Heading="1. Solid and High-Visibility Clothing" paragaraph="Safety officer Clothing is one of the main things a Security Guard should have. They need to wear good quality uniforms and be highly visible." src="https://i.ibb.co/6mTwfq4/equpiment-One.jpg" alt="EqupimentOne"/>
            <EquipimentItemCard Heading="2. Flashlight / Searchlight" paragaraph="2. Flashlight / Searchlight" src="https://i.ibb.co/KjN8qND/equpiment-Two.jpg" alt="EqupimentTwo"/>
            <EquipimentItemCard Heading="3. Security Officers Baton" paragaraph="Safety officer batons are one more significant piece of gear that security guards use to secure themselves. All the more significantly, notwithstanding, they are a weapon that can guard a property without being utilized. Simply the way that you have one in your belt that individuals can see will for the most part be to the point of ensuring things keep cool-headed. Individuals realize that if you somehow managed to haul this weapon out, it could cause some harm." src="https://i.ibb.co/Bybh3Qf/equpiment-Three.jpg" alt="EqupimentThree"/>
            <EquipimentItemCard Heading="4. Security Guard Belt" paragaraph="Safety officer batons are one more significant piece of gear that safety officers use to secure themselves. All the more significantly, notwithstanding, they are a weapon that can guard a property without being utilized. Simply the way that you have one in your belt that individuals can see will for the most part be to the point of ensuring things keep cool-headed. Individuals realize that if you somehow managed to haul this weapon out, it could cause some harm." src="https://i.ibb.co/85g4rFD/equpiment-Four.jpg" alt="EqupimentFour"/>
        </div>
        
        </Container>

    </section>
  )
}

export default EqupimentContant