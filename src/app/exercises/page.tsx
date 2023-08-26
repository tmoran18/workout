import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "../../lib/supabase";
import { NavBar } from "@/components/nav-bar";
export default async function Home() {
  const { data: exercises } = await supabase.from("exercise_library").select();

  return (
    <div className="container text-white px-6">
      <h2 className="text-3xl text-center">Exercises</h2>
    </div>
  );
}
