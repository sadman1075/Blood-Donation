import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

const Funding = () => {
    const [paymentInfos,setPaymentInfos]=useState()
    const {data}=useQuery({
        queryKey:["payment"],
        queryFn:async()=>fetch("http://localhost:5000/payment")
        .then(res=>res.json())
        .then(data=>setPaymentInfos(data))
    })
  
    return (
        <div>
            <div className="pt-20 lg:pt-32">
                <h1 className="text-5xl font-bold text-center mb-20">Funding</h1>
                <div className="flex justify-end pb-6 mr-5 lg:mr-10">
                    <Link className="btn bg-black text-white" to={"/add-funding"}>Give Funding</Link>

                </div>
                <div className="flex justify-center">
                    <div className="overflow-x-auto lg:w-[1000px] ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Funding Amount</th>
                                    <th>Date</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentInfos?.map(paymentInfo => <tr key={paymentInfo._id}>


                                        <td>{paymentInfo.name}</td>
                                        <td>$ {paymentInfo.amount/100} </td>
                                        <td>{format(new Date(paymentInfo.date), "P")}</td>
                                   
                                      

                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Funding;