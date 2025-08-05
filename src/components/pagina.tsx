export default function Pagina({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex absolute left-0 right-0 top-0 bottom-0 m-auto w-full h-full items-center justify-center overflow-y-auto overflow-x-hidden">
            <div className="flex absolute w-[85%] h-full">
                {children}
            </div>
        </div>
    )
}