import { useState } from "react";
import styles from "../style";
import { currencies } from "../constants";
import TextField from "./TextField";
import Button from "./Button";

const Converter = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [result, setResult] = useState<number | null>(null);

  const conversionRates: Record<string, number> = {
    "USD-EUR": 0.84,
    "EUR-USD": 1.16,
    "USD-GBP": 0.74,
    "GBP-USD": 1.35,
    "EUR-GBP": 0.87,
    "GBP-EUR": 1.15,
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value);
  };

  const handleConversion = () => {
    const key = `${fromCurrency}-${toCurrency}`;

    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    const rate = conversionRates[key];
    if (rate) {
      setResult(amount * rate);
    } else {
      setResult(null);
    }
  };

  return (
    <section
      id="converter"
      className={`${styles.paddingY} sm:px-16 px-6 flex flex-1 flex-col w-full`}
    >
      <div className={`${styles.flexStart} sm:flex-row flex-col items-center`}>
        <h1 className={`${styles.heading2}`}>
          Choose <br className="sm:block hidden" /> currencies
        </h1>
        <p className={`${styles.paragraph}`}>
          Choose from which currency you want to start, to the one you want the
          result
        </p>
      </div>

      <div
        className={`flex flex-col w-[100%] py-6 bg-textfield-container rounded-lg mt-5 ${styles.flexCenter}`}
      >
        <div className="flex flex-1 flex-col justify-between rounded-full w-full max-w-lg mx-auto p-6 space-y-4">
          <div className="flex-col flex">
           
            <TextField
              id="currency1"
              value={amount.toString() || ""}
              onChange={handleAmountChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">From</label>
              <select
                title="From"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className="w-full p-2 border rounded"
              >
                {currencies.map(({ currency, id }) => (
                  <option key={currency} value={currency}>
                    {currency} ({id})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">To</label>
              <select
                title="To"
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className="w-full p-2 border rounded"
              >
                {currencies.map(({ currency, id }) => (
                  <option key={currency} value={currency}>
                    {currency} ({id})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Button text="Convert" action={handleConversion} />

        {result !== null && (
        <div className="mt-4 p-4 bg-white rounded">
          <p className="text-sm font-medium font-poppins">
            {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
          </p>
        </div>
      )}
      </div>
    </section>
  );
};

export default Converter;
