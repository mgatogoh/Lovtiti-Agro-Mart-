const UnAuthenticatedPageWrapper = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            {/*... Navbar  ..*/}

            {children}

            {/*... Footer  ..*/}

        </div>
    )
}


export default UnAuthenticatedPageWrapper