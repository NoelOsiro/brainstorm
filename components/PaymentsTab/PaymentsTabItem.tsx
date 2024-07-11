import React from "react";
import { PaymentTab } from "@/types/payment";
import Image from "next/image";

const FeaturesTabItem = ({ paymentTab }: { paymentTab : PaymentTab }) => {
  const { title, account, name } = paymentTab ;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5"> Account: {account}</p>
          <p className="w-11/12">Account Name: {name}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
