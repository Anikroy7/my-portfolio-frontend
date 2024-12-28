import { TEducation } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";

const EducationCard = ({ icon, title, subtitle, description, session }: TEducation) => {
    return (
        <motion.div
            className="flex items-start gap-4 shadow-md rounded-lg p-6 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Icon/Logo */}
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                <Avatar
                    className="w-20 h-20 text-large"
                    src={icon}
                />
            </div>

            {/* Details */}
            <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
                <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
                <p className="text-gray-700 mt-2 leading-relaxed">{session}</p>
            </div>
        </motion.div>
    );
};

export default EducationCard