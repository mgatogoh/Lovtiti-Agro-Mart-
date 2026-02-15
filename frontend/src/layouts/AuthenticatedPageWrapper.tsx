
export default function AuthenticatedPageWrapper( {children } : {children : React.ReactNode}            ) {
    return (
        <div className="min-h-screen flex flex-col">
            <aside>
            {/*    ....... Sidebar .......  */}
            </aside>

            <main className="flex-1 p-6 bg-gray-50">
                {children}
            </main>
        </div>
    );
}
