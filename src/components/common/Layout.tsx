import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { useThemeStore } from '../../store/themeStore'
import { darkTheme, lightTheme } from '../../theme/theme'
import { TLayoutProps } from '../../types/commonType'

export default function Layout({ children }: TLayoutProps) {
  const { theme } = useThemeStore()

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <Wrapper>
          <GlobalStyle></GlobalStyle>
          <Header />
          <Contents>{children}</Contents>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
const Contents = styled.div`
  margin: 20px 0;

  @media (max-width: 1024px) {
    margin: 20px 0;
  }
`
