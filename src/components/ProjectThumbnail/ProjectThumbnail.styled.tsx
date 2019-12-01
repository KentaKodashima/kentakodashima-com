import styled from 'styled-components'

export const StyledThumbnailWrapper = styled.div`
  flex: 0 1 32%;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;

  &:hover {
    transform: translateY(-10px);
    transition: all 0.2s ease-in;
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
  }
`
export const StyledThumbnailAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
`

export const StyledTextWrapper = styled.div`
  padding: 16px;
`

export const StyledThumbnailTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizeThumbnailTitle};
  margin-bottom: 8px;
`

export const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizeThumbnailDescription};
  margin: 0;
`