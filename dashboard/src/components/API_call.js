const eod_data = async () => {
    const apikey = import.meta.env.VITE_API_KEY;
    const apiurl = import.meta.env.VITE_API_URL;
    const date_from = "2024-01-01"; // set your start date
    const currdate = new Date().toISOString().split('T')[0]; // current date in YYYY-MM-DD format

    let response = await fetch(`${apiurl}eod?access_key=${apikey}&symbols=AAPL&date_from=${date_from}&date_to=${currdate}`);
    response = await response.json();
    console.log(response);
    console.log(typeof(response.data));
    console.log(response.data)
    return response.data;
};
export default eod_data;