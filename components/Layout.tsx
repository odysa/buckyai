import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                {children}
            </div>
        </div>
    )
}