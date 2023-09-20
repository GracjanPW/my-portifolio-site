import React from 'react'

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
  }

export default function Card(props:ICard) {
  return (
    <div
        {...props}
        className={'bg-card-light rounded-md shadow-md border border-card-border-light overflow-hidden'+ (props.className ? ' '+props.className: '')}
    >
        {
            props.children
        }
    </div>
  )
}
