import React from 'react'
import Container from '../Common/Container'

import ReactPlayer from 'react-player'

function ProtectionVideo() {
  return (
    <section>
        <Container>
            <div className='flex justify-center'>
             <ReactPlayer url='https://youtu.be/mK40ExqJWRE' />
            </div>
        </Container>
    </section>
  )
}

export default ProtectionVideo