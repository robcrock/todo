import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createGym(data: FormData) {
  "use server"

  const name = data.get("name")?.valueOf()
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid Name")
  }

  await prisma.gym.create({ data: { name } })
  redirect("/")
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Gym</h1>
      </header>
      <form action={createGym} className="flex gap-2 flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
