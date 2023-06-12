import { GymItem } from "@/components/GymItem"
import { TodoItem } from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

function getGyms() {
  return prisma.gym.findMany()
}

export default async function Home() {
  const gyms = await getGyms()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Gyms</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/gym"
        >
          New Gym
        </Link>
      </header>
      <ul>
        {gyms.map(gym => (
          <GymItem key={gym.id} {...gym} />
        ))}
      </ul>
    </>
  )
}
