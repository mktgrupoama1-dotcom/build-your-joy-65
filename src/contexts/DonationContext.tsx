import { createContext, useContext, useState, ReactNode } from "react";

type DonationType = "monthly" | "once";

interface DonationState {
  type: DonationType;
  amount: number | null;
  setType: (t: DonationType) => void;
  setAmount: (a: number | null) => void;
}

const DonationContext = createContext<DonationState | null>(null);

export const DonationProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<DonationType>("monthly");
  const [amount, setAmount] = useState<number | null>(30);

  return (
    <DonationContext.Provider value={{ type, amount, setType, setAmount }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const ctx = useContext(DonationContext);
  if (!ctx) throw new Error("useDonation must be used within DonationProvider");
  return ctx;
};
