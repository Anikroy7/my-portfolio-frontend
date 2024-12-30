import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center  text-center p-6">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-48 h-44 overflow-hidden flex items-center justify-center bg-white rounded-full">
          <Image
            alt=""
            className=";"
            height={100}
            src="https://cdn-icons-png.flaticon.com/128/493/493808.png"
            width={100}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Tell me about your next project
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 my-3">
        <a href="mailto:anikkumerroy7@gmail.com">
          <Button
            className="font-semibold"
            color="default"
            radius="full"
            size="md"
          >
            <FaEnvelope size={20} />
            Email Me
          </Button>
        </a>
        <a
          href="https://wa.me/01786335131"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            className="font-semibold"
            color="primary"
            radius="full"
            size="md"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </Button>
        </a>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-500 flex justify-between w-full">
        <p className="mb-4">
          © 2024 All rights reserved - Developed By <strong>anikRoy</strong>
        </p>
        <p className="flex gap-1 items-center">
          <Link
            className="hover:underline m-2"
            href={"https://www.linkedin.com/in/anik-roy-a14185241"}
            target="_blank"
          >
            LinkedIn
          </Link>
          <span>/</span>
          <Link
            className="hover:underline"
            href={"https://github.com/Anikroy7"}
            target="_blank"
          >
            Github
          </Link>
          <span>/</span>
          <Link className="hover:underline" href="/allBlogs">
            Blogs
          </Link>
        </p>
      </footer>
    </section>
  );
}
