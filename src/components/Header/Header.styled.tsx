import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Container } from '../Container'

export const StyledHeader = styled(motion.header)`
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.base};
  z-index: 2;
`

export const StyledHeaderContainer = styled(Container)`
  height: 100%;
`

export const StyledHeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const StyledHeaderLogo = styled.h1`
  margin: 0;
`