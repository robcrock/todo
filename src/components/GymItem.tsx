"use client"

type GymItemProps = {
  id: string
  name: string
}

export function GymItem({ id, name }: GymItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <label
        htmlFor={id}
        className="cursor-pointer"
      >
        {name}
      </label>
    </li>
  )
}
