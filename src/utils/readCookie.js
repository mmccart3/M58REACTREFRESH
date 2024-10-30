function readCookie(key) {
    const cookieRegex = new RegExp(`(?<=${key}=)[^;]*`)
    try {
        let token = document.cookie.match(cookieRegex)[0];
        console.log(token);
        console.log(key);
        
        return token;
    } catch (error) {
        console.log(error);
        return false;
    }
};
export default readCookie;