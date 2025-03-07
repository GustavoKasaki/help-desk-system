import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { ButtonContainer } from './styles'

export interface Props {
  type?: 'button' | 'submit'
  titulo?: string
  width?: string
  icon?: React.ElementType
  iconOnly?: boolean
  href?: string
  isActive?: boolean
  onClick?: () => void
  form?: string
}

const Button = ({
  titulo,
  width,
  icon: Icon,
  iconOnly,
  href,
  type = 'button',
  form,
  onClick
}: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return href ? (
    <Link href={`${href}`}>
      <ButtonContainer
        className={isActive ? 'isActive' : ''}
        type="submit"
        width={width}
        iconOnly={iconOnly}
        onClick={onClick}
      >
        <p>{titulo}</p>
        {Icon && <Icon />}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer
      as="button"
      type={type}
      className={isActive ? 'isActive' : ''}
      width={width}
      iconOnly={iconOnly}
      form={form}
      onClick={onClick}
    >
      <p>{titulo}</p>
      {Icon && <Icon />}
    </ButtonContainer>
  )
}

export default Button
