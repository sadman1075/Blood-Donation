
const Contact = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen rounded-3xl">
                <div className="hero-content ">
                    <div className="card bg-base-100 w-full  shadow-2xl">
                        <h1 className="text-center text-5xl font-bold mt-6">Contact Us</h1>
                        <form className="card-body lg:w-[800px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Enter Your Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea
                                    placeholder="Enter any Message"
                                    className="textarea textarea-bordered textarea-lg "></textarea>                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;