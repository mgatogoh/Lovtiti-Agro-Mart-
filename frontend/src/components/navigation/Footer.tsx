function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 w-full">
            <div className="px-36 py-18 flex">

                <p className="text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Lovtiti Agro Mart. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
