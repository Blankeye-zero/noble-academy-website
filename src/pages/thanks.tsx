import MyForm from "@/components/home/enquiry-form";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/interfaces/layout";
import { Height } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const Enquiry: NextPageWithLayout = () => {

    const router = useRouter()

    const goToHome = () => router.push('/')
    return (
        <Container sx={{width: "100%", display:'flex-column', justifyContent: 'center',background: 'background.paper',height:'100dvh'}}>
            <Container sx={{display:'flex', height:'40%'}}>
            </Container>
            <Container sx={{display:'flex', justifyContent:'center'}}>
                Thank you for applying!    
            </Container>
            <Container sx={{display:'flex', justifyContent:'center'}}>
            <Button onClick={goToHome}>Go to HomePage</Button>
            </Container>
        </Container>
        
    )
}

Enquiry.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Enquiry