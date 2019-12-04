import styled from 'styled-components'

export const ArticleThumbnailWrapper = styled.div`
  flex: 0 1 49%;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
  
  &:hover {
    transform: translateY(-10px);
    transition: all 0.2s ease-in;
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
  }
`

export const ArticleThumbnailAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
`

export const ArticleThumbnailTextWrapper = styled.div`
  padding: 16px;
`

export const ArticleThumbnailTextTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.thumbnailTitle};
  margin-bottom: 8px;
`

export const ArticleThumbnailTextDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  margin: 0;
  color: ${({ theme }) => theme.middle};
`

export const ArticleThumbnailBar = styled.div`
  width: 40%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.middle};
  margin: 8px 0;
`