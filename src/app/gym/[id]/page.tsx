import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

// async function createMembership(gymId: string, data: FormData) {
async function createMembership(data: FormData) {
  "use server";

  console.log("data", data);

  const gymId = data.get("gymId")?.valueOf() as string;

  const name = data.get("name")?.valueOf() as string;
  const price = data.get("price")?.valueOf();
  const duration = data.get("duration")?.valueOf();

  await prisma.membership.create({
    data: {
      name,
      price: Number(price),
      duration: Number(duration),
      gym: { connect: { id: gymId } },
    },
  });

  redirect("..");
}
export default function Page({ id }: { id: string }) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Membership</h1>
      </header>
      <form action={createMembership} className="flex gap-2 flex-col">
        <label htmlFor="gymId">Gym Id</label>
        <input
          type="text"
          name="gymId"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          defaultValue={id}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          name="duration"
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
  );
}
