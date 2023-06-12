"use client";

import Link from "next/link";

type GymItemProps = {
  id: string;
  name: string;
};

export function GymItem({ id, name }: GymItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <Link className="hover:bg-slate-700 outline-none" href={`/gym/${id}`}>
        {name}
      </Link>
    </li>
  );
}
