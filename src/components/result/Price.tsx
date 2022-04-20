import {FlexColumn, PriceButton} from "../../styles/result";

interface PriceProps {
  price: number;
  currency: string
}

const Price = ({price, currency}: PriceProps) => {

  const priceWithCurrency = price + currency

  return (
    <FlexColumn>
      <PriceButton>{priceWithCurrency}</PriceButton>
    </FlexColumn>
  )
}

export default Price
