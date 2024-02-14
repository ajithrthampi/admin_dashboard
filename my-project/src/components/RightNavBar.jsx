import { motion } from "framer-motion"

const RightNavBar = () => {
    return (
        <motion.div initial={
            {
                opacity: 0,
                x: 200
            }
        }
            animate={
                {
                    opacity: 1,
                    x: 0
                }
            }
            exit={
                {
                    opacity: 0,
                    x: 200
                }
            }
            className='w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]'>

        </motion.div>
    )
}

export default RightNavBar