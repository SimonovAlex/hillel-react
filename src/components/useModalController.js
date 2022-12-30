import {  useState } from "react"

export const useModalController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }

    const onOpen = () => {
        setIsOpen(true)
    }
    const toggle = () => {
        setIsOpen(v => !v)
    }

    return {
        isOpen,
        onClose, 
        onOpen,
        toggle,
    }
}