import {FlexColumn} from "../../styles/result";

interface CompanyProps {
  airline: string;
}

const Company = ({airline}: CompanyProps) => {
  const imgSrc = "/img" + airline + ".svg"

  return (
    <FlexColumn>
      <img src={imgSrc} alt="" />
    </FlexColumn>
  )
}

export default Company
