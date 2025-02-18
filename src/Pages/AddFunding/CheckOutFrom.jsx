import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckOutFrom = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [funding, setFunding] = useState(0)
    const [clientSecret, setClientSecret] = useState("")
    console.log(clientSecret);
    const navigate=useNavigate()

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (funding > 0) {
            axios.post("https://blood-donation-server-hazel-gamma.vercel.app/create-payment-intent", { price: funding })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [funding])
    const handleAddFunding = async (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const fundingAmount = from.amount.value;
        const date = from.date.value;

        const paymentInfo = {
            name, fundingAmount, date
        }

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast.error(error.message)
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymus',
                        email: user?.email || 'anonymus'
                    },

                }
            }
        )

        if (confirmError) {
            console.log(confirmError.message);
        }
        else {
            console.log('payment intent:', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                const payment = {
                    name: user?.displayName,
                    amount: paymentIntent.amount,
                    date: paymentIntent.created,
                }

                axios.post("https://blood-donation-server-hazel-gamma.vercel.app/payment", payment)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged) {
                            toast.success("transaction successful")
                            navigate(-1)
                            
                        }
                    })


            }
        }

    }
    return (
        <div>
            <form className="card-body" onSubmit={handleAddFunding}>

                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered lg:w-[500px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Funding Amount</span>
                        </label>
                        <input type="number" onChange={(e) => setFunding(e.target.value)} name="amount" placeholder="Enter Amount of donation" className="input input-bordered lg:w-[500px]" required />

                    </div>
                </div>

                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Date </span>
                        </label>
                        <DatePicker readOnly className="input input-bordered w-full lg:w-[500px]" name="date" selected={startDate} onChange={(date) => setStartDate(date)} required />

                    </div>
                </div>
                <div className="flex justify-center">

                    <CardElement
                        className="mt-5 mb-5 w-full lg:w-[500px] "
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <button  className="bg-black text-white btn w-full lg:w-[500px] " type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>



            </form>
        </div>
    );
};

export default CheckOutFrom;