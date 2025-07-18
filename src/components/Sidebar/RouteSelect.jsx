import React from 'react'
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const RouteSelect = () => {
  return (
    <div className='space-y-1'>
        <Route Icon={FiHome} selected={true} title="Dashboard" />
        <Route Icon={FiUsers} selected={false} title="Team" />
        <Route Icon={FiPaperclip} selected={false} title="Invoices" />
        <Route Icon={FiLink} selected={false} title="Integrations" />
        <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  )
}

const Route = ({selected, Icon, title}) => {
    return (
        <button className={`flex items-center justify-start gap-2 w-full
        rounded px-2 py-1.5 text-sm transition-[box-shadow_background-color_color] ${
            selected 
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`}>
            <Icon className={selected ? "text-pink-500" : ""}/>
            <span>{title}</span>
        </button>
)}
export default RouteSelect