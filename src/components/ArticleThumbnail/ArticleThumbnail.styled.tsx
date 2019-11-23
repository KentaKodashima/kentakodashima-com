import styled from 'styled-components'

export const ArticleThumbnailWrapper = styled.div`
  flex: 0 1 49%;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
`

export const ArticleThumbnailAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
`

export const ArticleThumbnailTextWrapper = styled.div`
  padding: 16px;
`

export const ArticleThumbnailTextTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizeThumbnailTitle};
  margin-bottom: 8px;
`

export const ArticleThumbnailTextDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizeBodyText};
  margin: 0;
  color: ${({ theme }) => theme.middle};
`

export const ArticleThumbnailBar = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${({ theme }) => theme.middle};
  margin: 8px 0;
`