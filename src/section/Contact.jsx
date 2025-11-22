import { FaWhatsapp } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {

    const contactData = [
        {
            icon : <FaWhatsapp />,
            text : "WhatsApp",
            source : "03055997241",
            link : "http://WhatsApp.com"
        },
        {
            icon : <MdOutlineMailOutline />,
            text : "Email",
            source : "mt4458649@gmail.com",
            link : "www.gmail.com"
        },
        {
            icon : <FaLinkedinIn />,
            text : "LinkedIn",
            source : "mtalha09316",
            link : "http://www.LinkedIn.com"
        }
    ];

    return(
        <section className="c-space text-white mb-10">
            <p className="head-text mb-10">Contact Us</p>
            <div className=" w-[55%] py-7 px-7 flex ">
                <form action="" className="w-[60%] contact-form">
                    <label htmlFor="" className="contact-label">Name</label><br />
                    <input type="text" className="contact-input" />
                    <br />
                    <label htmlFor="" className="contact-label">Email</label><br />
                    <input type="email" className="contact-input" />
                    <br />
                    <label htmlFor="" className="contact-label">Message</label><br />
                    <textarea name="" id="" rows={7} cols={34} className="contact-input"></textarea><br />
                    <button className="bg-blue-950 text-lg tracking-widest w-72 p-3 outline-none rounded-lg">Submit</button>
                </form>
                <div className="w-[35%] flex flex-col items-center justify-between py-3">
                        {
                            contactData.map((data) => {
                                return(
                                    <div className="flex flex-col items-center justify-center w-44 h-36 bg-white rounded-lg overflow-hidden">
                                        <span className="text-[1.5rem] mb-1 text-blue-950">{data.icon}</span>
                                        <p className="font-bold text-blue-950">{data.text}</p>
                                        <p className="text-white-600 text-[0.9rem]">{data.source}</p>
                                        <p><a href="" className="flex items-center text-blue-950 mt-2 gap-2 text-[0.95rem]">Text Me <LuMoveRight /> </a></p>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            
        </section>
    )
}

export default Contact