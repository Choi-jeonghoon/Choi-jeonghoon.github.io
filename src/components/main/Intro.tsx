import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AiFillGithub, AiFillMail } from 'react-icons/ai'

export default function Intro() {
  return (
    <>
      <Container>
        <ProfileImage>
          <StaticImage src="../../images/JH_0.jpeg" alt="Profile Image" />
        </ProfileImage>
        <Menu>
          <SubText></SubText>
          <MainText>I&apos;m Junior Developer Jeong-Hoon</MainText>
          <LinksContainer>
            <StyledLink
              href="https://github.com/Choi-jeonghoon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
              GitHub
            </StyledLink>
            <StyledLink
              href="mailto:devjeongssi94@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillMail />
              Mail
            </StyledLink>
            <StyledLink
              href="https://github.com/Choi-jeonghoon/Choi-jeonghoon.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
              Blog_GitHub
            </StyledLink>
          </LinksContainer>
        </Menu>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 10px;
  }
`

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 20px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const SubText = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    text-align: center;
  }
`

const MainText = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    font-size: 18px;
    align-items: center;
  }
`

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1px;
  padding: 10px 15px;

  font-weight: 500;
  color: white;
  background-color: #555;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #777;
    transform: scale(1.05);
  }

  &:active {
    background-color: #444;
  }

  & > svg {
    font-size: 20px;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 2px 7px;
  }
`
