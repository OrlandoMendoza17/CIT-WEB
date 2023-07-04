import React from 'react'

const CategoryItem = ({ name, image }: Category) => {
  return (
    <div className="rounded-lg bg-slate-100 hover:bg-secondary hover:text-white font-medium cursor-pointer p-4 grid gap-8 items-center" style={{ gridTemplateColumns: "auto 1fr" }}>
      <img width={30} src={image} alt="" />
      <span>{name}</span>
    </div>
  )
}

export default CategoryItem