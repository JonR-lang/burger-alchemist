import { useMemo } from "react";
import ReactCountryFlag from "react-country-flag";

import {
  getCountries,
  getCountryCallingCode,
  Country,
} from "react-phone-number-input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CountrySelectProps = {
  value: Country;
  onChange: (value: Country) => void;
  labels: Record<string, string>;
};

const CountrySelect = ({ value, onChange, labels }: CountrySelectProps) => {
  const countries = useMemo(() => getCountries(), []);

  return (
    <Select
      defaultValue={value}
      onValueChange={(value: Country) => onChange(value)}>
      <SelectTrigger className='w-[80px] pb-1'>
        <SelectValue asChild>
          <p>
            {<ReactCountryFlag countryCode={value} />} +
            {getCountryCallingCode(value)}
          </p>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {countries.map((country) => (
            <SelectItem key={country} value={country}>
              {<ReactCountryFlag countryCode={country} />} {labels[country]} +
              {getCountryCallingCode(country)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
