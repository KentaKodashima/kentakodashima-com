import styled from 'styled-components'

type StyledLayoutMainProps = {
  removeMarginTop: boolean
}

export const StyledLayoutMain = styled.main<StyledLayoutMainProps>`
  margin-top: ${({ removeMarginTop }) => removeMarginTop === true ? '0' : '100px'};
`