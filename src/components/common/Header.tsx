import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useThemeStore } from '../../store/themeStore'

export default function Header() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <Wrapper>
      <Title to="/">Developer 📓 J-Hoon</Title>

      <SwitchContainer>
        <ThemeSwitch onClick={toggleTheme}>
          <SwitchThumb theme={theme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </SwitchThumb>
        </ThemeSwitch>
      </SwitchContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ theme: 'light' | 'dark' }>`
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  gap: 4rem;
`

const Title = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ThemeSwitch = styled.div<{ theme: 'light' | 'dark' }>`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => (theme === 'dark' ? '#333' : '#ddd')};
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  padding: 2px;
`

const SwitchThumb = styled.div<{ theme: 'light' | 'dark' }>`
  position: absolute;
  width: 26px;
  height: 26px;
  background: ${({ theme }) => (theme === 'dark' ? '#ffeb3b' : '#000')};
  border-radius: 50%;
  top: 2px;
  left: ${({ theme }) => (theme === 'dark' ? '32px' : '2px')};
  transition: left 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#ffeb3b')};
`
