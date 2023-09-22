import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mt-20 d-flex items-center justify-center text-teal-400">
      <p className="text-center">This is komodo project</p>
    </div>
  );
}
