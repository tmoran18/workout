import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/db";
export default async function Home() {
  const exercises = await supabase.from("exercise_library").select("*");

  return <div className="container px-6 border">Hi</div>;
}
