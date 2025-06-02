import React, { FC } from 'react'
import { FormControl, FormHelperText, Input, InputLabel, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import BasicSelect from './basicSelect'
import { useRouter } from 'next/router'

interface formData {
    Name: string,
    Phone: string,
    Email: string,
    Class: string,
    Location: string,
    Message: string
} 

const indianPhoneRegex = /^[6-9]\d{9}$/;

const schema = z.object({
  Name: z.string().min(1, "Name is required"),
  Phone: z
    .string()
    .regex(indianPhoneRegex, "Enter a valid Indian phone number"),
  Email: z.string().email("Enter a valid email").or(z.literal("")).default(""),
  Class: z.string().min(1, "Class is required"),
  Location: z.string().min(1, "Location is required"),
  Message: z.string().default(""),
});


const MyForm: FC = () =>  {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  
  const router = useRouter();


  const onSubmit : (data: formData) => Promise<void> = async (data: formData) => {
    console.log(data.Name)
    const url = process.env.AWS_ENQUIRY_API 
    try {
      if(url){
        const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      const responseData = await res.json();
      console.log(responseData)
      } else {
        console.log('No AWS API URL FOUND')
      }
      
    } catch (error) {
      console.error('POST request failed:', error);
    }
    router.push('/thanks');
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <Container sx={{display:'flex', flexDirection:'column', gap:5,mb:10, mt:10}}>
      <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Enquiry{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                  
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    Form
                  </Typography>{' '}
                  <br />
                </Typography>
  <FormControl>
  <InputLabel htmlFor="Name" sx={{color: errors.Name ? 'primary.contrast' : 'primary.main'}}>Name</InputLabel>
  <Input {...register('Name')} sx={{color: '#000000'}}/>
  <FormHelperText id="name-helper-text">{errors.Name  ? errors.Name.message : ''}</FormHelperText>
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="Phone" sx={{ color: errors.Phone ? 'primary.contrast' : 'primary.main' }}>Phone</InputLabel>
  <Input {...register('Phone') } sx={{color: '#000000'}}/>
  <FormHelperText id="phone-helper-text"> {errors.Phone ? errors.Phone.message : ''}</FormHelperText>
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="Location" sx={{ color: errors.Location ? 'primary.contrast' : 'primary.main'}}>Location</InputLabel>
  <Input {...register('Location')} sx={{color: '#000000'}}/>
  <FormHelperText id="location-helper-text">  {errors.Location ? errors.Location.message : ''}</FormHelperText>
  </FormControl>
  <BasicSelect control={control} errors={errors}></BasicSelect>

  <FormControl>
    <InputLabel htmlFor="Email" sx={{color: errors.Email? 'primary.contrast' : 'primary.main' }}>Email <sup>(optional)</sup></InputLabel>
  <Input {...register('Email')} sx={{color: '#000000'}}/>
  <FormHelperText id="email-helper-text">{ errors.Email ? errors.Email.message : ''}</FormHelperText>
  </FormControl>
  
  <FormControl>
    <InputLabel htmlFor="Message" sx={{color: errors.Message? 'primary.contrast' : 'primary.main'}}>Message <sup>(optional)</sup></InputLabel>
  <Input {...register('Message')} sx={{color: '#000000'}}/>
  </FormControl>

  <Button type="submit">Submit</Button>
  </Container>
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register('Name')} name='Name'/>
    //   {errors.Name && <p>{errors.Name.message}</p>}
    //   <input {...register('Email')} />
    //   {errors.Email && <p>{errors.Email.message}</p>}
    //   <input {...register('Phone')} />
    //   {errors.Phone && <p>{errors.Phone.message}</p>}
    //   <input {...register('Class')} />
    //   {errors.Class && <p>{errors.Class.message}</p>}
    //   <input {...register('Location')} />
    //   {errors.Location && <p>{errors.Location.message}</p>}
    //   <input {...register('Message')} />
    //   {errors.Message && <p>{errors.Message.message}</p>}
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default MyForm