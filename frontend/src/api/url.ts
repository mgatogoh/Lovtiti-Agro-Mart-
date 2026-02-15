const isPROD = import.meta.env.MODE === "production";
export const BASE_URL = isPROD
    ? "https://prod_url"
    : "http://localhost:8000";








// const isPROD : boolean = process.env.NODE_ENV === 'production';
//
// let apiHost: string = 'http://localhost:8000';
//
// if  (isPROD) apiHost = 'https://prod_url';
//
// export const BASE_URL = apiHost


// export const BASE_URL =
//     process.env.REACT_APP_API_URL ??
//
//     (process.env.NODE_ENV === "production"
//         ? "https://prod_url"
//         : "http://localhost:8000");
