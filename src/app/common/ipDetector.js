export default {
    async detect() {
        const response = await fetch('//api.ipify.org?format=json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });

        const responseJSON = await response.json();

        return responseJSON.ip;
    }
};
