"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";

const contactSchema = z.object({
  email: z
    .string({ required_error: "Por favor, insira seu email" })
    .email("Insira um email válido")
    .nonempty("Por favor, insira seu email"),
  phone: z
    .string({ required_error: "Por favor, insira seu número" })
    .nonempty("Por favor, insira seu número"),
  name: z
    .string({ required_error: "Por favor, insira seu nome" })
    .nonempty("Por favor, insira seu nome"),
  message: z
    .string({ required_error: "Por favor, insira uma mensagem" })
    .nonempty("Por favor, insira uma mensagem"),
});

type ContactSchema = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSendMessage = async (data: ContactSchema) => {
    toast.success("Mensagem enviada com sucesso!", {
      duration: 3000,
      position: "top-center",
      style: {
        padding: "1rem",
        gap: "0.5rem",
        fontWeight: "600",
      },
    });
    form.reset();
  };

  return (
    <div className="bg-card text-for text-foreground h-fit w-full rounded-lg p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSendMessage)}>
          <div className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="11987654444" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Olá, gostaria de saber mais sobre os serviços..."
                      {...field}
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="h-14 w-full text-lg font-bold"
              //isLoading={pendingCredentials}
            >
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
