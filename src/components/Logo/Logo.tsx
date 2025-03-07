import Image from 'next/image'

import logo from '../../../public/logo.png'

import { LogoContainer } from './styles'

const Logo = () => (
  <LogoContainer>
    <Image src={logo} alt={'Logo'} />
  </LogoContainer>
)

export default Logo
