import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import astro from '../img/astro.png'
import Profile from '../Profile/Profile'


const StyledHome = styled.div`
  margin: auto;
  margin-top: 30px;
  height: 86vh;
  width: 25vw;
  background: #fff;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;

`
const Header = styled.div`
  margin: 10px;

`
const Logo = styled.img`
  height: 45px;
`
const Line = styled.hr`
	border:0;
	border-top: 1px solid black;
`



function HomeScreen() {
  const [id, setId] = useState ('')
  const [age, setAge] = useState ('')
  const [name, setName] = useState ('')
  const [photo, setPhoto] = useState ('')
  const [bio, setBio] = useState ('')


  useEffect(async () => {
    const getProfile = await fetch('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person', {
      headers: {
        Authorization: 'elizabeth-barbosa-jackson'
      }
    })
  }, [])


  return (
    <StyledHome >
        <Header>
          <Logo src={astro} />
          <Line/>
        </Header>
        <Profile/>
    </StyledHome>
  );
}

export default HomeScreen;
