import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";



export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' disabled={pending}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                color: '#717171',
                fontWeight: 600,
                width: '40%',
                background: '#313131',
                border: '1px solid #414141',
                padding: '12px 16px',
                gap: '8px',
                mt: '8px',
                borderRadius: '6px',
                '&:hover': {
                    backgroundColor: '#fff',
                    borderColor: '#fff'
                }
            }}
        >
            {pending ? 'Pending...' : 'Send'}
        </Button>
    )
};