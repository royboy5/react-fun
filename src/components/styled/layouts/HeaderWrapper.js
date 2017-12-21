import FlexWrapper from './FlexWrapper'

const HeaderWrapper = FlexWrapper.withComponent('header').extend`
@media (min-width: 769px) {
  justify-content: space-between;
}
`

export default HeaderWrapper
