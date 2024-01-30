import React, {createContext,useEffect,useState} from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
export const ContextGeral = createContext({})


export default function ProviderContext({children}) {

    const hello = "Hello world !"

    const navegar = () => {

    }

    const sendContatoEmail = (data) => {
      const templateParams = {
        to_name: data?.Nome,
        message: data?.Mensagem,
        Email: data?.Email,
        Telefone: data?.Telefone
      
      }    
      
       emailjs.send("service_2ccqpwf", "template_1ihrisa", templateParams, "TdWTDHZq9K7dTh36Z")
        .then((res) => {
          toast.success("Mensagem Enviada com sucesso !")
          console.log(res)
        })
      .catch((err) => {
        console.log(err)
        toast.error("Ops! houve algum error ao enviar o Curriculo")
      })
    }

    const sendCurriculum = async (data) => {
      const pdf = await fetch(data.Anexo).then((res) => res.arrayBuffer());
      const pdfData = new Uint8Array(pdf);
      const pdfBase64 = btoa(String.fromCharCode.apply(null, pdfData));

      const templateParams = {
        to_name: `${data.Nome} ${data.Sobrenome}`,
        message: `
          Olá tudo bem me chamo ${data.Nome}, estou a procura de uma oportunidade na Rn terraplanagem, quero deixar aqui meu curriculo e meus dados especificos
        `,
        Email: data?.Email,
        CPF: data?.CPF,
        CEP: data?.CEP,
        Numero: data?.Numero,
        Endereco: data?.Endereco,
        EstadoCivil: data?.EstadoCivil,
        Telefone: data?.Telefone,
        Anexo: data?.Anexo
      }    
      
       emailjs.send("service_2ccqpwf", "template_y32ms7n", templateParams, "TdWTDHZq9K7dTh36Z")
        .then((res) => {
          toast.success("Curriculo Enviado !")
          console.log(res)
        })
      .catch((err) => {
        console.log(err)
        toast.error("Ops! houve algum error ao enviar o Curriculo")
      })

    }

  return (
    <ContextGeral.Provider value={{
      hello,
      sendCurriculum,
      sendContatoEmail
      }}>
       {children}
    </ContextGeral.Provider>
  )
}

