import styled from 'styled-components'

export const StyledContactForm = styled.form`
  display: block;
`

export const StyledContactFormInput = styled.input`
  display: block;
  width: 100%;
  height: 52px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.accent};
  padding: 8px;
  font-size: 1.6rem;
`

export const StyledContactFormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 152px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.accent};
  padding: 8px;
  font-size: 1.6rem;
`

export const StyledSubmitButton = styled.button`
  display: block;
  width: 180px;
  border: none;
  padding: 16px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.base };
  background-color: ${({ theme }) => theme.colors.accent };
  font-size: ${({ theme }) => theme.fontSize.regular };
  font-weight: bold;
`