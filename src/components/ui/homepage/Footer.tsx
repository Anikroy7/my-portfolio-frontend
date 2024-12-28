import { Button } from "@nextui-org/button";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="flex flex-col items-center justify-center  text-center p-6">
            {/* Icon */}
            <div className="mb-6">
                <div className="w-48 h-44 overflow-hidden flex items-center justify-center bg-white rounded-full">
                    <img
                        className=";"
                        src="https://cdn-icons-png.flaticon.com/128/493/493808.png"
                        alt=""
                    />
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Tell me about your next project
            </h1>

            {/* Buttons */}
            <div className="flex gap-4 my-3">

                <Button size="md" className="font-semibold" color="default" radius="full">
                    <FaEnvelope size={20} />
                    Email Me
                </Button>
                <Button size="md" className="font-semibold" color="primary" radius="full"><FaWhatsapp size={20} />
                    WhatsApp</Button>

            </div>

            {/* Footer */}
            <footer className="text-sm text-gray-500 flex justify-between w-full">
                <p className="mb-4">© 2024 All rights reserved - Developed By <strong>anikRoy</strong></p>
                <p>
                    <a
                        href="#"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>{" "}
                    /{" "}
                    <a
                        href="#"
                        className="hover:underline"
                    >
                        Github
                    </a>{" "}
                    /{" "}
                    <a
                        href="#"
                        className="hover:underline"
                    >
                        Blogs
                    </a>
                </p>
            </footer>
        </section>
    );
}
