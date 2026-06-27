import { motion } from "framer-motion";
import "./Splash.css";

export default function Splash() {

    return (

        <div className="splash">

            <motion.h1

                initial={{ scale: 0 }}

                animate={{ scale: 1 }}

                transition={{ duration: 1 }}

            >

                🐂

            </motion.h1>

            <motion.h2

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.5 }}

            >

                தன்மானப்படை

            </motion.h2>

            <motion.p

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 1 }}

            >

                வீரம் • ஒற்றுமை • பாரம்பரியம்

            </motion.p>

        </div>

    )

}