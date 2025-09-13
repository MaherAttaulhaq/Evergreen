import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle, FaFacebookF } from "react-icons/fa"; // Install react-icons

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { loginFormSchema } from "@/schemas";
import  pb  from "@/lib/pocketbase";

export function Signin() {
  const navigate = useNavigate(); // Hook for navigation
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setError(null);
    try {
      await pb.collection("users").authWithPassword(data.email, data.password);
      navigate("/");
    } catch (e) {
      setError("Invalid email or password.");
    }
  };

  const handleOAuthSignIn = async (provider) => {
    setError(null);
    try {
      const authData = await pb
        .collection("users")
        .authWithOAuth2({ provider });

      if (authData.record) {
        navigate("/dashboard");
      }
    } catch (e) {
      setError(e.message || `An error occurred during ${provider} sign-in.`);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your email and password below or use a social provider.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? "Signing In..."
                : "Sign In with Email"}
            </Button>
          </form>
        </Form>
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignIn("google")}
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignIn("facebook")}
          >
            <FaFacebookF className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
