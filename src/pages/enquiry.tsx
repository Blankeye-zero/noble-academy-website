import MyForm from "@/components/home/enquiry-form";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/interfaces/layout";
import { Container } from "@mui/material";

const Enquiry: NextPageWithLayout = () => {
    return (
        <Container sx={{width: "100%", display:'flex', justifyContent: 'center',background: 'background.paper'}}><MyForm></MyForm></Container>
        
    )
}

Enquiry.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Enquiry