import AppRouter from "./routes";
// import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

// const AppRoutes = () => {
//     const location = useLocation();
//     const element = useRoutes(MAIN_ROUTES, location);
//
//     return (
//         <AnimatePresence mode="wait">
//             <motion.div
//                 key={location.pathname}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
//             </motion.div>
//         </AnimatePresence>
//     );
// };

export default function App() {
    return (
        <>
            <Toaster position="top-right" />
            <AppRouter />
        </>
    );
}
