import React from 'react'
import styled from 'styled-components'
import golf from '../img/golf.jpg'

const Image = styled.img`
width: 300px;
`

function Profile() {
  return (
    <div>
      <Image src={golf}/>
    </div>
  );
}

export default Profile;
