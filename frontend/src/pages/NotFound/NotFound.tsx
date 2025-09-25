
function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full text-center p-50">
                <span className="text-6xl mb-4 animate-bounce">🤷‍♂️</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">Not Found</h1>
                <p className="text-lg text-gray-600">It looks like the page you are looking for doesn't exist.</p>
            </div>
        </>
    )
}
export default NotFound