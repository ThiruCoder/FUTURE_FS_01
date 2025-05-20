import { AxiosInstance } from "@/app/ClientSideGlobalErrorHandler/GlobalErrorHandler";

const sendMail = async (prevState, formData) => {
    try {
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        const { name, email, message } = data;
        console.log('✅ Form Data:', { name, email, message });

        if (!data?.name || !data?.email || !data?.message) {
            throw new Error("Missing required fields");
        }
        await AxiosInstance.post('/send/sendMail', data);
        return { success: true };
    } catch (error) {
        console.error('❌ Error in sendMail:', error);
        return { success: false, error: error.message };
    }
};


export { sendMail }