import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  justify-content: space-between;
  align-items: center;
`

export default FlexWrapper
