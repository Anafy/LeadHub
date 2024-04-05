import { useRef, useState } from "react";



export default function FAQItem ({title, descr}: {title: string, descr: string}) {

    const accRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)

    return (
        <div className='faq__item' onClick={() => setOpen(value => !value)}>
            <div className="faq__item__top row">
                <span>
                    {title}
                </span>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                    transform: open ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                    <g clipPath="url(#clip0_110_1429)">
                        <path d="M31.6663 20.6667C31.6663 21.2189 31.2186 21.6667 30.6663 21.6667H22.6663C22.1141 21.6667 21.6663 22.1144 21.6663 22.6667V30.6667C21.6663 31.2189 21.2186 31.6667 20.6663 31.6667H19.333C18.7807 31.6667 18.333 31.2189 18.333 30.6667V22.6667C18.333 22.1144 17.8853 21.6667 17.333 21.6667H9.33301C8.78072 21.6667 8.33301 21.2189 8.33301 20.6667V19.3333C8.33301 18.781 8.78072 18.3333 9.33301 18.3333H17.333C17.8853 18.3333 18.333 17.8856 18.333 17.3333V9.33333C18.333 8.78104 18.7807 8.33333 19.333 8.33333H20.6663C21.2186 8.33333 21.6663 8.78104 21.6663 9.33333V17.3333C21.6663 17.8856 22.1141 18.3333 22.6663 18.3333H30.6663C31.2186 18.3333 31.6663 18.781 31.6663 19.3333V20.6667Z" fill="#00FAA9"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_110_1429">
                            <rect width="40" height="40" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div ref={accRef} className="faq__item__text" style={{
                height: open && accRef.current ? `${accRef.current.scrollHeight}px` : '0px'
            }}>
                <p>
                    {descr}
                </p>
            </div>
        </div>
    )
}