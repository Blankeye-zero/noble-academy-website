import React, { FC } from 'react';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography'
import {
  Form,
  FormSubmitHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import BasicSelect from './basicSelect';

interface formData {
  Name: string;
  Phone: string;
  Email: string;
  Class: string;
  Location: string;
  Message: string;
}

const indianPhoneRegex = /^[6-9]\d{9}$/;

const schema = z.object({
  Name: z.string().min(1, 'Name is required'),
  Phone: z
    .string()
    .regex(indianPhoneRegex, 'Enter a valid Indian phone number'),
  Email: z.string().email('Enter a valid email'),
  Class: z.string().min(1, 'Class is required'),
  Location: z.string().min(1, 'Location is required'),
  Message: z.string().min(1, 'Message is required'),
});

const MyForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((onValid: any) => console.log(onValid));

  type Option = {
    label: React.ReactNode;
    value: string | number | string[];
  };

  type SelectProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > & { options: Option[] };

  const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, ...props }, ref) => (
      <select ref={ref} {...props}>
        {options.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    )
  );

  return (
    <form onSubmit={onSubmit}>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', gap: 5, mb: 15 }}
      >
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
          <InputLabel htmlFor="Name">Name</InputLabel>
          <Input {...register('Name')} />
          {errors.Name && <p>{errors.Name.message}</p>}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Email">Email</InputLabel>
          <Input {...register('Email')} />
          {/* <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText> */}
          {errors.Email && <p>{errors.Email.message}</p>}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Phone">Phone</InputLabel>
          <Input {...register('Phone')} />
          {/* <FormHelperText id="phone-helper-text"> {errors.Phone ? errors.Phone.message : ''}</FormHelperText> */}
          {errors.Phone && <p>{errors.Phone.message}</p>}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Location">Location</InputLabel>
          <Input {...register('Location')} />
          <FormHelperText id="location-helper-text">
            Enter your address or area name
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Select
            {...register('Class')}
            options={[
              {
                label: 'PREKG',
                value: 'PREKG',
              },
              { label: 'LKG', value: 'LKG' },
              { label: 'UKG', value: 'UKG' },
              { label: 'I STD', value: 'I STD' },
              { label: 'II STD', value: 'II STD' },
              { label: 'III STD', value: 'III STD' },
              { label: 'IV STD', value: 'IV STD' },
              {
                label: 'V STD',
                value: 'V STD',
              },
              {
                label: 'VI STD',
                value: 'VI STD',
              },
              {
                label: 'VII STD',
                value: 'VII STD',
              },
              {
                label: 'VIII STD',
                value: 'VIII STD',
              },
              {
                label: 'IX STD',
                value: 'IX STD',
              },
              { label: 'X STD', value: 'X STD' },
            ]}
          ></Select>
          {errors.Class && <p>{errors.Class.message}</p>}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Message">Message</InputLabel>
          <Input {...register('Message')} />
          <FormHelperText id="message-helper-text">
            Enter any other further details you want to know
          </FormHelperText>
        </FormControl>
        <Button type="submit"></Button>
      </Container>
    </form>

  );
};

export default MyForm;
