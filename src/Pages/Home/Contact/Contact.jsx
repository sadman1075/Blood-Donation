
const Contact = () => {
    const handleContact = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const message = from.message.value;
        const contactInfo = {
            name, email, phone, message
        }
        console.log(contactInfo);
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen rounded-3xl">
                <div className="hero-content ">
                    <div className="card bg-base-100 w-full  shadow-2xl">
                        <h1 className="text-center text-5xl font-bold mt-6">Contact Us</h1>
                        <form className="card-body w-[330px] lg:w-[800px]" onSubmit={handleContact}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type=" email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phone" placeholder="Enter Your Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea
                                    placeholder="Enter any Message"
                                    name="message"
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