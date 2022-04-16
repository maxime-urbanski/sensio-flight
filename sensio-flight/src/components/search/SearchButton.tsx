import { Button } from '../../styles/layout'

interface SearchButtonProps {
  info: string
}

const SearchButton = ({ info }: SearchButtonProps): JSX.Element => {
  return (
    <Button>{info}</Button>
  )
}

export default SearchButton;
