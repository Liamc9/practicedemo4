import { Outlet, useLocation } from "react-router-dom";
      import { useEffect } from "react";
import StripePaymentDisplay from "../components/stripePaymentDisplay"
import { GoogleIcon, HomeIcon } from "liamc9npm/dist/components/icons/Icons";
import AccordianCard from 'liamc9npm/dist/components/cards/AccordionCard';

export default function Home() {
      

        return (
          <>
            <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-white mx-20 my-40">
            <StripePaymentDisplay
  useCustomer={true}
  customerEmail="liam12crowley@gmail.com"
  attachPaymentMethod={true}
  currency="eur" // Specify the currency here
  destinationAccount="acct_1PP14o4CfuQN95oo" // Specify the Stripe Connect account ID if blank the payment just goes to me
/>       
<HomeIcon className = 'w-6 h-6 text-blue-500'/>
<GoogleIcon className = 'w-6 h-6 bg-blue-500'/>
<AccordianCard />
            </div>
          </>
        );
      }