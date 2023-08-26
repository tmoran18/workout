import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/db";
export default async function Home() {
  const exercises = await supabase.from("exercise_library").select("*");

  return (
    <div className="container px-6">
      <Button className="font-sans uppercase w-full text-xl p-6 border-[2.5px] border-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl tracking-wider bg-orange-600 bg-[url('../../public/diamonds.svg')] bg-repeat text-white my-5 ">
        TESTING THIS BUTTON
      </Button>
    </div>
  );
}
