import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginCard = () => {
  return (
    <Tabs
      defaultValue='login'
      className='w-[95vw] sm:w-[600px] max-w-md relative '>
      <TabsList className='grid w-full grid-cols-2 h-11'>
        <TabsTrigger value='login' className='h-full'>
          Login
        </TabsTrigger>
        <TabsTrigger value='register' className='h-full'>
          Register
        </TabsTrigger>
      </TabsList>
      <TabsContent value='login' className='h-full'>
        <Card className='h-[80vh] sm:h-[500px] overflow-y-auto pb-2 w-full max-w-md  '>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to existing account </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter>
            <Link
              to='/forgot-password'
              className='text-xs text-slate-800 mx-auto'>
              Forgot Password?
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='register' className=''>
        <Card className='h-[80vh] sm:h-[500px] overflow-y-auto pb-2 '>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Open an account with us today for splendid discount rates and
              other mouth watering offers!
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <RegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginCard;
