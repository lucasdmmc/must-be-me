import { useRef, useState } from "react";
import { Button } from "../../components/Button";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

const contactUsSchema = z.object({
  name: z.string().nonempty("Enter your name"),
  surname: z.string(),
  email: z.string().nonempty("This field is required"),
  message: z.string().nonempty("You can not send a empty message")
})

type ContactUsDataType = z.infer<typeof contactUsSchema>

export function Form() {
  const [loading, setLoading] = useState(false)
  const { 
    handleSubmit,
    register, 
    reset, 
    formState: { errors } 
  } = useForm<ContactUsDataType>({
    resolver: zodResolver(contactUsSchema)
  })
  const form = useRef<HTMLFormElement>(null);

  const fetchEmailJsForm = () => {
    if (form.current) {
      emailjs.sendForm(
        "service_hlblmk2", 
        "template_z2xnj3e", 
        form.current, 
        "GW6fQYefCYYGVfMmJ"
      )
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response);
        setLoading(true)
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
      })
    } else {
      console.error('Variáveis de ambiente não estão definidas corretamente.');
    }
  }

  const handleSubmitContactUs = () => {
    fetchEmailJsForm();
    reset();
  };

  return (
    <form
      className="lg:p-20 p-10 w-full max-w-[1000px] bg-zinc-50 flex flex-col rounded-lg justify-between gap-8"
      onSubmit={handleSubmit(handleSubmitContactUs)}
      ref={form}
    >
      <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16">
        <div className="flex flex-col w-full">
          <input
            className="py-2 px-4 max-h-10 min-h-10 outline-none bg-transparent border border-zinc-400 hover:border-zinc-800 transition duration-300 rounded w-full"
            {...register("name")}
            type="text"
            placeholder="Name"
            name="name"
          />
          <p className="text-red-500 -mb-4 mt-[2px]">{errors.name?.message}</p>
        </div>
        <input
          className="py-2 px-4 max-h-10 min-h-10 outline-none bg-transparent border border-zinc-400 hover:border-zinc-800 transition duration-300 rounded w-full"
          {...register("surname")}
          type="text"
          placeholder="Surname"
          name="surname"
        />

      </div>
      <div>
        <input
          className="py-2 px-4 max-h-10 min-h-10 outline-none bg-transparent border border-zinc-400 hover:border-zinc-800 transition duration-300 rounded w-full"
          {...register("email")}
          type="email"
          placeholder="Email"
          name="email"
        />
        <p className="text-red-500 -mb-4 mt-[2px]">{errors.email?.message}</p>
      </div>

      <div>
        <textarea
          className="py-2 px-4 h-32 resize-none w-full outline-none bg-transparent border border-zinc-400 hover:border-zinc-800 transition duration-300 rounded"
          {...register("message")}
          name="message"
          placeholder="Message"
        />
        <p className="text-red-500 -mb-4 ">{errors.message?.message}</p>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <Button 
          type="submit" 
          label="Submit"
        />

        {loading && 
          <span className="text-green-500 text-sm">
            Message was successfully sent. We will contact you soon.
          </span>
        }
      </div>
    </form>
  );
}